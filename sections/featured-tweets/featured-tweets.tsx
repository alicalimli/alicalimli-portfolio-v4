"use client";

import Section from "@/components/section/section";
import { featuredTweets } from "@/data";
import { ArrowLeft, CaretLeft, Star, XLogo } from "@phosphor-icons/react";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Tweet } from "react-tweet";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowLeftIcon } from "lucide-react";
import { FaChevronLeft } from "react-icons/fa6";

interface FeaturedTweetsProps {}

const FeaturedTweets = ({}: FeaturedTweetsProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Section
        titleIcon={XLogo}
        mainClassName="featured-tweets-section xl:max-w-[40svw] overflow-hidden"
        title="Featured Tweets"
        viewAllFunction={() => setDrawerOpen(true)}
      >
        <Marquee pauseOnHover>
          {featuredTweets.map((t) => (
            <div key={t.id} className="mx-4" data-theme="dark">
              <Tweet id={t.id} />
            </div>
          ))}
        </Marquee>
      </Section>

      <Drawer
        open={drawerOpen}
        shouldScaleBackground
        onOpenChange={() => {
          setDrawerOpen(false);
        }}
      >
        <DrawerContent className="w-screen sm:w-[95svw] mx-auto max-w-6xl bg-[#111] pb-0">
          <button
            onClick={() => setDrawerOpen(false)}
            className="hover:opacity-80 text-2xl flex items-center mx-4  sm:mx-12 my-4"
          >
            <CaretLeft className="size-8" />
            Featured Tweets
          </button>

          <section className="max-h-[80svh] scrollbar-hide overflow-y-auto  px-4 sm:px-12 mt-4">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter={"16px"}>
                {featuredTweets.map((t) => (
                  <div key={t.id} className="" data-theme="dark">
                    <Tweet id={t.id} />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </section>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FeaturedTweets;
