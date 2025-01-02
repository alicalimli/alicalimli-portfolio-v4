import AboutMe from "@/sections/about-me/about-me-section";
import StackSection from "@/sections/stack/stack-section";
import NewsletterSection from "@/sections/newsletter-section/newsletter-section";
import ProjectsSection from "@/sections/projects/projects";
import FeaturedTweets from "@/sections/featured-tweets/featured-tweets";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import Footer from "@/sections/footer/footer";
import Profile from "@/sections/profile/Profile";
import ScrollTracker from "@/components/ui/scroll-tracker";

export default function Home() {
  return (
    <>
      <div className="grid xl:grid-cols-2 max-w-[1600px] mx-auto min-h-screen">
        {/* Sidebar */}
        <aside className="xl:sticky xl:top-0 xl:h-screen text-white p-16 pt-24 pb-0 max-w-4xl mx-auto xl:max-w-[auto]">
          <Profile />

          <div className="absolute bottom-12 left-[74px]">
            <ScrollTracker />
          </div>
        </aside>

        {/* Main Content */}
        <main className=" overflow-y-auto p-16 pt-4 xl:pt-24 max-w-4xl mx-auto xl:max-w-[auto]">
          <div id="about-me-section" className="app-section">
            <AboutMe />
          </div>

          <div id="newsletter-section" className="app-section">
            <NewsletterSection />
          </div>

          <main className="app-section flex flex-col gap-12 my-12">
            {/* <ProductsSection /> */}

            <div id="projects-section" className="app-section">
              <ProjectsSection />
            </div>

            <div id="tect-stack-section" className="app-section">
              <StackSection />
            </div>

            <hr />

            <div id="featured-tweets-section" className="app-section w-full">
              <FeaturedTweets />
            </div>
          </main>
          <Footer />
        </main>
      </div>
      <ScrollToTopButton />
    </>
  );
}
