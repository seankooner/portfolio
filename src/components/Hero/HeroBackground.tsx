import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';


// Separate function to create stars
const createStars = (count : number) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < count; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ size: 0.5, color: 'white' });

  return new THREE.Points(geometry, material);
}


// Separate function to create shooting stars
const createShootingStars = (count : number) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < count; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000) + 1000); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ size: 1, color: 'white' });

  return new THREE.Points(geometry, material);
}

const HeroBackground = ({ onLoad = () => null }) =>  {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return; 
    // Create the scene, camera, and renderer as usual
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // Add stars and shooting stars to the scene
    const stars = createStars(5000);
    scene.add(stars);

    const shootingStars = createShootingStars(100);
    scene.add(shootingStars);

    // Animate the scene
    const animate = function () {
      requestAnimationFrame(animate);

      stars.rotation.z += 0.001;
      shootingStars.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
    

    // Adjust scene on window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);
    onLoad();
    return () => window.removeEventListener('resize', onWindowResize);
  }, [onLoad]);

  return (
      <div ref={ref} />
  );
}

export default HeroBackground 
