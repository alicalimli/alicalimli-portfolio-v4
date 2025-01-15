"use client";

import ItemCard from "@/components/item-card/ItemCard";
import Section from "@/components/section/section";
import { techBlogsData } from "@/data";
import { Mailbox } from "@phosphor-icons/react";

const TechBlogsSection = () => {
  const renderIssues = techBlogsData.map((issue) => (
    <li className="item-card " key={issue.title}>
      <ItemCard item={issue} />
    </li>
  ));

  return (
    <Section
      titleIcon={Mailbox}
      title="Technical Blogs"
      viewAllLink="https://blog.alicalimli.com/"
    >
      <ul className="grid gap-6 relative">{renderIssues}</ul>
    </Section>
  );
};

export default TechBlogsSection;
