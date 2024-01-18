import ItemCard from "@/components/item-card/ItemCard";
import Section from "@/components/section/section";
import { recentIssues } from "@/data";

const NewsletterSection = () => {
  const renderIssues = recentIssues.map((issue) => (
    <li key={issue.title}>
      <ItemCard item={issue} />
    </li>
  ));

  return (
    <Section title="Newsletters" viewAllLink="https://alicalimli.beehiiv.com/">
      <ul className="grid xs:grid-cols-2 gap-8 relative">{renderIssues}</ul>
    </Section>
  );
};

export default NewsletterSection;
