"use client";

import SpringyText from "@/components/springy-text/SpringyText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CaretRight } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <Card className="rounded-[32px]">
      <CardHeader>
        <SpringyText
          className="justify-start text-2xl opacity-90 "
          text={"Empower your Web Dev Journey"}
        />
        <CardDescription>
          Join 1k+ developers getting tips, strategies, and resources that would
          help you succeed in your web dev journey.
        </CardDescription>
      </CardHeader>
      <CardFooter>
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
            <Button
              data-umami-event={"JOIN Newsletter CARD Button "}
              size="lg"
              className="h-full rounded-full p-2 w-full"
            >
              <span className="hidden sm:inline-block">Join In</span>
              <span className="sm:hidden">
                <CaretRight />
              </span>
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
