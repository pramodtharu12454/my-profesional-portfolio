import AboutSection from '@/components/portfolio/about/about';
import FAQ from '@/components/portfolio/about/faq';
import TeamSection from '@/components/portfolio/about/team';
import Footer from '@/components/portfolio/navbar/footer';
import React from 'react'

const aboutpage = () => {
  return (
    <div>
        <AboutSection />
              <FAQ />
              <TeamSection />
               <Footer />
    </div>
  )
}

export default aboutpage;