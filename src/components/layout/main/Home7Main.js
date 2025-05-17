"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Features2 from "@/components/sections/features/Features2";
import Pricing from "@/components/sections/pricing/Pricing";
import Projects2 from "@/components/sections/projects/Projects2";
import Skills from "@/components/sections/skills/Skills";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import Video from "@/components/sections/videos/Video";
import Hero7 from "@/components/sections/hero-banners/Hero7";
import About5 from "@/components/sections/about/About5";
import Services4 from "@/components/sections/services/Services4";
import Offer2 from "@/components/sections/offers/Offer2";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Team from "@/components/sections/team/Team";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import OfferedServices from "@/components/sections/services/OfferedServices";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Services2 from "@/components/sections/services/Services2";
import Brands2 from "@/components/sections/brands/Brands2";
import FeatureProducts from "@/components/sections/products/FeatureProducts";
import Features3 from "@/components/sections/features/Features3";
import Services5 from "@/components/sections/services/Services5";
import WorkProcess from "@/components/sections/work-process/WorkProcess";
import Team2 from "@/components/sections/team/Team2";

const Home7Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero7 />
     

            <Offer2 />
            <CounterUp2 />
            <Blogs />
                  <Services2 />
                  <Brands2 />

                  <FeatureProducts id="popular__products" />
                  <Team2 />

      {/* <Services5 /> */}
      {/* <WorkProcess />

            <OfferedServices />
      
            <Features2 />
      <About5 />
      <Services4
        title={"WE OFFER CONSULTANCY SERVICES."}
        service={2}
        desc={
          " Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim"
        }
      /> */}
      {/* <Video video={2} /> */}
      {/* <CounterUp />
    
      <Skills title="Human Resource solutions." type={2} />
      <PinkColor />
      <Projects2 project={2} />
      <div className="border__line"></div>
      <Team />
      <Testimonials />
      <Pricing title="WE OFFER CONSULTANCY SERVICES." plan={2} />
      <Brands />
      {isOnepage ? <Contact1 pt={true} /> : ""}
      <Blogs /> */}
    </main>
  );
};
export default Home7Main;
