import ProductsSection from "@/sections/products/products-section";
import AboutMe from "@/sections/about-me/about-me-section";
import OPProjectsSection from "@/sections/op-projects/op-projects-section";
import StackSection from "@/sections/stack/stack-section";
import NewsletterSection from "@/sections/newsletter-section/newsletter-section";
import ProjectsSection from "@/sections/projects/projects";
import BackgroundDots from "@/components/ui/bg-dot";
import BackgroundBricks from "@/components/ui/bg-bricks";
import FeaturedTweets from "@/sections/featured-tweets/featured-tweets";
import ScrollToTop from "@/components/scroll-top/scroll-to-top";
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

          <div className="absolute bottom-12 left-[66px]">
            <ScrollTracker />
          </div>
        </aside>

        {/* Main Content */}
        <main className=" overflow-y-auto p-16 pt-4 xl:pt-24 max-w-4xl mx-auto xl:max-w-[auto]">
          <div className="app-section">
            <AboutMe />
          </div>

          <div className="app-section">
            <NewsletterSection />
          </div>

          <main className="app-section flex flex-col gap-12 my-12">
            {/* <ProductsSection /> */}

            <div className="app-section">
              <ProjectsSection />
            </div>

            <div className="app-section">
              <StackSection />
            </div>

            <hr />

            <div className="app-section w-full">
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
