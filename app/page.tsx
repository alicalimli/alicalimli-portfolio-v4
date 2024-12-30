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
      <div className="app-section">
        <NewsletterSection />
      </div>

      <main className="app-section flex flex-col gap-12 my-12">
        {/* <ProductsSection /> */}

        <div className="app-section">
          <ProjectsSection />
        </div>

        <div className="app-section">
          <OPProjectsSection />
        </div>

        <div className="app-section">
          <StackSection />
        </div>

        <hr />

        <div className="app-section">
          <AboutMe />
        </div>
      </main>
    </>
  );
}
