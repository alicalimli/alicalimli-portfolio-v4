import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { projects } from "@/data";

const ProjectsSection = () => {
  const renderProjects = projects.map((project) => (
    <li className="item-card " key={project.title}>
      <ItemCard item={project} />
    </li>
  ));

  return (
    <Section title="Projects">
      <ul className="grid gap-6 relative">{renderProjects}</ul>
    </Section>
  );
};

export default ProjectsSection;
