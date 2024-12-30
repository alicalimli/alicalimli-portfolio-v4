"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialLinks from "@/components/social-links/social-links";
import NewsletterSection from "../newsletter-section/newsletter-section";
import SpringyText from "@/components/springy-text/SpringyText";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <header>
      <Avatar className="w-24 h-24">
        <AvatarImage
          src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Falicalimli.webp?alt=media&token=30ed30fc-e0f0-4c27-8873-840501d0760c"
          alt="Ali Calimli's Profile"
        />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <header className="scroll-m-20 text-2xl font-semibold my-2 tracking-tight flex items-center gap-2">
        <SpringyText className="justify-center text-3xl" text={"Ali Calimli"} />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fverified-badge.webp?alt=media&token=37374006-9fe0-4665-b2b2-058c9f76c698"
          width={25}
          height={25}
          alt="verified badge"
        />
        <SocialLinks iconSize="w-6 h-6" />
      </header>

      <p className="text-md sm:text-xl  text-muted-foreground">
        I send 1k+ developers tips, strategies, and resources that would help
        them succeed in their web development journey.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col xs:flex-row gap-2 w-full items-center mt-4"
      >
        <Input
          className="h-11"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <Button size="lg" className="w-full xs:w-40">
          Join In
        </Button>
      </form>
    </header>
  );
};

export default Profile;
