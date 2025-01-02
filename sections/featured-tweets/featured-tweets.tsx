"use client";

import Section from "@/components/section/section";
import { featuredTweets } from "@/data";
import { Star, XLogo } from "@phosphor-icons/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Tweet } from "react-tweet";

interface FeaturedTweetsProps {}

const FeaturedTweets = ({}: FeaturedTweetsProps) => {
  return (
    <Section
      titleIcon={XLogo}
      mainClassName="featured-tweets-section max-w-[90svw] xl:max-w-[40svw]"
      title="Featured Tweets"
    >
      <Marquee pauseOnHover>
        {featuredTweets.map((t) => (
          <div key={t.id} className="mx-4" data-theme="dark">
            <Tweet id={t.id} />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

export default FeaturedTweets;
