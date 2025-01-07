"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Conditional from "../conditional/Conditional";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiTwitter } from "react-icons/si";
import { TwitterLogo } from "@phosphor-icons/react";

export interface ItemProps {
  title: string;
  id?: string;
  description: string;
  badge?: string;
  thumbnail: string;
  twitter?: string;
  twitterTP?: string;
  isRoute?: boolean;
  role?: string;
  technologies?: string[];
  sourceCode?: string;
  link?: string;
  cta: string;
}

interface ItemCardProps {
  item: ItemProps;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const router = useRouter();

  const content = (
    <div className="cursor-pointer rounded-xl group relative">
      <div className="-inset-3 absolute opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/10 to-transparent duration-300 -z-10 rounded-xl" />
      <Card className="flex flex-col items-start sm:flex-row gap-4 border-none bg-transparent h-full z-10">
        <CardHeader className="px-0 p-0 min-w-[13rem]">
          <Image
            alt={`${item.title} thumbnail`}
            className="object-contain rounded-xl w-full sm:w-52"
            src={item.thumbnail}
            width={300}
            height={300}
          />

          <Conditional condition={Boolean(item.badge)}>
            <Badge
              variant={"secondary"}
              className="absolute top-2 right-2 text-xs "
            >
              {item.badge}
            </Badge>
          </Conditional>
        </CardHeader>

        <CardContent className="px-0 relative">
          <Conditional condition={Boolean(item.role)}>
            <p className="text-xs text-muted-foreground">
              Design & Development
            </p>
          </Conditional>

          <h5 className="scroll-m-20 text-lg font-semibold w-[90%] tracking-tight flex items-center gap-2">
            {item.title}

            <Conditional condition={Boolean(item.sourceCode)}>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        window.open(
                          item.sourceCode,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Conditional>

            <Conditional condition={Boolean(item.twitter)}>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        window.open(
                          item.twitter,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item?.twitterTP || "Twitter"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Conditional>
          </h5>
          <p className="text-sm text-muted-foreground mt-1 leading-[1.8]">
            {item.description}
          </p>

          {/* <ArrowUpRightIcon size={20} className="absolute right-2 top-5" /> */}
          <CardFooter className="items-start p-0 flex flex-col mt-2">
            <ul className="flex gap-1 flex-wrap">
              {item?.technologies?.map((tech) => (
                <li key={tech}>
                  <Badge className="bg-muted text-white/80 rounded-md">
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Conditional
      condition={Boolean(item.link)}
      whenTrue={
        <Link
          rel="noopener noreferrer"
          scroll={true}
          target={item.isRoute ? "_self" : "_blank"}
          href={item.link ?? ""}
        >
          {content}
        </Link>
      }
      whenFalse={content}
    />
  );
};

export default ItemCard;
