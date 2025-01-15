"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialLinks from "@/components/social-links/social-links";
import NewsletterSection from "../newsletter-section/newsletter-section";
import SpringyText from "@/components/springy-text/SpringyText";
import { CaretRight, SealCheck } from "@phosphor-icons/react";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <header>
      <Avatar className="group size-32 md:size-36 xl:size-44 profile-avatar">
        <AvatarImage
          src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fprofile-image.jpeg?alt=media&token=13372ddb-56b9-47ef-a937-46fa5e2c6a30"
          alt="Ali Calimli's Profile"
          className="group-hover:scale-[1.2] duration-300 hover:brightness-75"
        />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <header className="scroll-m-20 font-semibold mt-4 tracking-tight flex items-center gap-2">
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

      <p className="mt-3 text-md md:text-xl text-muted-foreground lg:max-w-xl leading-[1.7] md:leading-[1.7]">
        <span className="text-white opacity-90 font-medium">
          Front-end Engineer
        </span>{" "}
        building high-quality and scalable web applications. Join 1K+ developers
        learning tips and strategies from my journey :
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col xs:flex-row gap-2 w-full mt-4 relative"
      >
        <Input
          className="p-4 px-6 sm:p-5 sm:px-8 h-auto rounded-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <div className="h-full absolute right-0 top-1/2 -translate-y-1/2 p-2 aspect-square sm:aspect-video">
          <Button size="lg" className="h-full rounded-full p-2 w-full">
            <span className="hidden sm:inline-block">Join In</span>
            <span className="sm:hidden">
              <CaretRight />
            </span>
          </Button>
        </div>
      </form>
    </header>
  );
};

export default Profile;
