"use client";

import { scrollIntoSection } from "./hugged-landing/shared";
import { Header } from "../custom/SiteHeader";
import Hero from "./hugged-landing/Hero";
import SiteFooter from "../custom/SiteFooter";
import StorySection, { stories } from "./hugged-landing/StorySection";
import FAQSection from "./hugged-landing/FAQSection";

export function HuggedLanding() {
  const onNavigate = (id: string) => {
    scrollIntoSection(id);
  };

  return (
    <div className="min-h-screen bg-[#f8f4e3] text-[#333333]">
      <Header onNavigate={onNavigate} />

      <main>
        <Hero onNavigate={onNavigate} />

        {stories.map((story, i) => (
          <StorySection key={story.id} story={story} index={i} />
        ))}

        <FAQSection />
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
