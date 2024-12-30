import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { opprojects as projects } from "@/data";

const OPProjectsSection = () => {
  const renderProjects = projects.map((project) => (
    <li key={project.title}>
      <ItemCard item={project} />
    </li>
  ));

  return (
    <Section title="Open Source Projects">
      <ul className="grid gap-6 relative">{renderProjects}</ul>
    </Section>
  );
};

export default OPProjectsSection;
