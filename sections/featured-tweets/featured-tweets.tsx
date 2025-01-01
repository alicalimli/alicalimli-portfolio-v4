"use client";

import Section from "@/components/section/section";
import { featuredTweets } from "@/data";
import React from "react";
import Marquee from "react-fast-marquee";
import { Tweet } from "react-tweet";

interface FeaturedTweetsProps {}

const FeaturedTweets = ({}: FeaturedTweetsProps) => {
  return (
    <Section mainClassName="featured-tweets-section" title="Featured Tweets">
      <Marquee pauseOnHover>
        {featuredTweets.map((t) => (
          <div className="mx-4" data-theme="dark">
            <Tweet id={t.id} />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

export default FeaturedTweets;
