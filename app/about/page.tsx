import AboutSection from '@/components/portfolio/about/about';
import FAQ from '@/components/portfolio/about/faq';
import TeamSection from '@/components/portfolio/about/team';
import React from 'react'

const aboutpage = () => {
  return (
    <div>
        <AboutSection />
              <FAQ />
              <TeamSection />
    </div>
  )
}

export default aboutpage;