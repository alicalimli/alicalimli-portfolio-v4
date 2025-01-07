"use client";

import ItemCard from "@/components/item-card/ItemCard";
import Section from "@/components/section/section";
import { recentIssues } from "@/data";
import { ArrowLeft, Mailbox } from "@phosphor-icons/react";

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
import { DATA_NEWSLETTERS } from "@/data-newsletters";
import { useState } from "react";
import { NewsletterCard } from "../footer/newsletter-card";

const NewsletterSection = () => {
  const [activeNewsletter, setActiveNewsletter] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const data = DATA_NEWSLETTERS.find((d) => d.id === activeNewsletter);

  const renderIssues = recentIssues.map((issue) => (
    <li className="item-card " key={issue.title}>
      <button
        className="text-start w-full"
        onClick={() => {
          if (!issue?.id) return;

          setDrawerOpen(true);
          setActiveNewsletter(issue.id);
        }}
      >
        <ItemCard item={issue} />
      </button>
    </li>
  ));

  return (
    <Section
      titleIcon={Mailbox}
      className="mt-6"
      title="Newsletter"
      viewAllLink="https://alicalimli.beehiiv.com/"
    >
      <Drawer
        open={drawerOpen}
        shouldScaleBackground
        onOpenChange={() => {
          setDrawerOpen(false);
        }}
      >
        <DrawerContent className="w-screen sm:w-[95svw] mx-auto max-w-4xl  rounded-t-[32px] ">
          <button
            onClick={() => setDrawerOpen(false)}
            className="hidden sm:block bg-[#222] rounded-full p-3 absolute sm:top-10 sm:left-10 w-fit hover:bg-[#111] duration-300"
          >
            <ArrowLeft />
          </button>

          <section className="max-h-[80svh] sm:max-h-[90svh] scrollbar-hide overflow-y-auto  px-4 sm:px-12 mt-4">
            {data?.content}

            <div className="mt-12"></div>

            <NewsletterCard />
          </section>

          <DrawerFooter>
            <DrawerClose></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <ul className="grid gap-6 relative">{renderIssues}</ul>
    </Section>
  );
};

export default NewsletterSection;
