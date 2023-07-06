"use client";

import ContactForm from "@/components/Contact/ContactForm";
import Socials from "@/components/Contact/Socials";

const ContactSection = () => {
  return (
    <section className="m-auto mb-40 grid max-w-7xl items-center gap-40 overflow-hidden px-5 md:grid-cols-2 md:gap-20">
      <div>
        <h2 className="text-3xl font-bold text-white transition-all sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl">
          Contact me
        </h2>
        <h3 className="mb-4 text-lg font-thin leading-none text-white transition-all sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
          We should get in touch
        </h3>
        <ContactForm />
      </div>
      <Socials />
    </section>
  );
};

export default ContactSection;
