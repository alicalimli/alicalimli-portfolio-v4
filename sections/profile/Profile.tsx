"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialLinks from "@/components/social-links/social-links";
import NewsletterSection from "../newsletter-section/newsletter-section";
import SpringyText from "@/components/springy-text/SpringyText";
import { SealCheck } from "@phosphor-icons/react";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <header>
      <Avatar className="size-32 md:size-36 xl:size-44">
        <AvatarImage
          src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fprofile-image.jpeg?alt=media&token=13372ddb-56b9-47ef-a937-46fa5e2c6a30"
          alt="Ali Calimli's Profile"
        />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <header className="scroll-m-20 font-semibold my-2 mt-4 tracking-tight flex items-center gap-2">
        <SpringyText
          className="justify-center text-3xl md:text-4xl xl:text-5xl"
          text={"Ali Calimli"}
        />

        <SealCheck
          weight="fill"
          className="size-6  md:size-8 xl:size-9 text-blue-500"
        />
        <SocialLinks iconSize="size-6  md:size-8 xl:size-9" />
      </header>

      <p className="text-md md:text-lg xl:text-xl text-muted-foreground">
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
