import Footer from "@/components/portfolio/navbar/footer";
import AchievementsPage from "@/components/portfolio/sidebarlayout";
import ExtraSkills from "@/components/portfolio/skill/extraskill";
import SkillsGrid from "@/components/portfolio/skill/skill";
import React from "react";

const skillpage = () => {
  return (
    <div>
      <SkillsGrid />
      <AchievementsPage />
      <ExtraSkills />
       <Footer />
    </div>
  );
};

export default skillpage;
