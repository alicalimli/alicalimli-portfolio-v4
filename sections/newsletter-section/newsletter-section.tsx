"use client";

import ItemCard from "@/components/item-card/ItemCard";
import Section from "@/components/section/section";
import { recentIssues } from "@/data";
import { Mailbox } from "@phosphor-icons/react";

const NewsletterSection = () => {
  const renderIssues = recentIssues.map((issue) => (
    <li className="item-card " key={issue.title}>
      <ItemCard item={issue} />
    </li>
  ));

  return (
    <Section
      titleIcon={Mailbox}
      className="mt-6"
      title="Newsletters"
      viewAllLink="https://alicalimli.beehiiv.com/"
    >
      <ul className="grid gap-6 relative">{renderIssues}</ul>
    </Section>
  );
};

export default NewsletterSection;
