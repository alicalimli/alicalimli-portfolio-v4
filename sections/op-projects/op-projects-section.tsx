"use client";

import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { opprojects as projects } from "@/data";
import { GitBranchPlus } from "lucide-react";
import { GitBranch } from "@phosphor-icons/react";

const OPProjectsSection = () => {
  const renderProjects = projects.map((project) => (
    <li className="item-card " key={project.title}>
      <ItemCard item={project} />
    </li>
  ));

  return (
    <Section titleIcon={GitBranch} title="Open Source Projects">
      <ul className="grid gap-6 relative">{renderProjects}</ul>
    </Section>
  );
};

export default OPProjectsSection;
