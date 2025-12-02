import AboutSection from "@/components/portfolio/about/about";
import FAQ from "@/components/portfolio/about/faq";
import TeamSection from "@/components/portfolio/about/team";
import BlogSection from "@/components/portfolio/blog/blog";
import LetsConnect from "@/components/portfolio/contractform/contractform";
import DeveloperProfile from "@/components/portfolio/dashboard/dasboard1";
import DashboardHero from "@/components/portfolio/dashboard/dashboard";
import Footer from "@/components/portfolio/navbar/footer";
import ProjectsSection from "@/components/portfolio/project/project.";
import AchievementsPage from "@/components/portfolio/sidebarlayout";
import ExtraSkills from "@/components/portfolio/skill/extraskill";
import SkillsGrid from "@/components/portfolio/skill/skill";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardHero />
      <DeveloperProfile />
      <AboutSection />
      <FAQ />
      <TeamSection />
      <SkillsGrid />
      <ExtraSkills />
      <AchievementsPage />
      <ProjectsSection />
      <BlogSection />
      <LetsConnect />
      <Footer />
    </div>
  );
};

export default page;
