import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import ContactForm from "./contact-form";
import Section from "@/components/section/section";

interface ContactSectionProps {}

const ContactSection = ({}: ContactSectionProps) => {
  return (
    <Section mainClassName="relative" title="Get In Touch!">
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
