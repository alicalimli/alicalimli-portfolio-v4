import ProductsSection from "@/sections/products/products-section";
import AboutMe from "@/sections/about-me/about-me-section";
import OPProjectsSection from "@/sections/op-projects/op-projects-section";
import StackSection from "@/sections/stack/stack-section";
import NewsletterSection from "@/sections/newsletter-section/newsletter-section";
import ProjectsSection from "@/sections/projects/projects";
import BackgroundDots from "@/components/ui/bg-dot";
import BackgroundBricks from "@/components/ui/bg-bricks";

export default function Home() {
  return (
    <>
      <NewsletterSection />

      <main className="flex flex-col gap-12 my-12">
        {/* <ProductsSection /> */}

        <ProjectsSection />

        <OPProjectsSection />

        <StackSection />

        <hr />

        <AboutMe />
      </main>
    </>
  );
}
