import ContactForm from "@/components/pages/Contact/ContactForm";
import ContactHero from "@/components/pages/Contact/ContactHero";
import ContactInfo from "@/components/pages/Contact/ContactInfo";
import React from "react";

const ContactPage = () => {
  return (
    <main className="flex-grow pt-32 pb-20 min-h-screen bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHero />
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
