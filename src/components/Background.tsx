"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const MeteorShower = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / windowHeight;

      if (scrollPercentage > 0.7 && !showStars) {
        setShowStars(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showStars]);

  return (
    <div className={`night ${showStars ? "animate" : ""}`}>
      {[...Array<number>(20)].map((_, i) => (
        <div key={i} className="shooting_star"></div>
      ))}
    </div>
  );
};

const createStars = (count: number) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < count; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const material = new THREE.PointsMaterial({ size: 0.5, color: "white" });

  return new THREE.Points(geometry, material);
};

const createShootingStars = (count: number) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < count; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000) + 1000); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const material = new THREE.PointsMaterial({ size: 1, color: "white" });

  return new THREE.Points(geometry, material);
};

const Background = ({ onLoad = () => null }) => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(180deg, rgba(54, 12, 81, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(0, 212, 255, 1) 100%)",
      "linear-gradient(180deg, rgba(27, 6, 40.5, 1) 0%, rgba(4.5, 4.5, 60.5, 1) 50%, rgba(0, 106, 126, 1) 100%)",
    ]
  );

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Create the scene, camera, and renderer as usual
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
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
    };

    window.addEventListener("resize", onWindowResize);
    onLoad();
    return () => window.removeEventListener("resize", onWindowResize);
  }, [onLoad]);

  return (
    <>
      <motion.div
        ref={ref}
        id="mainBackground"
        style={{ background: backgroundColor }}
      />
    </>
  );
};

export default Background;
