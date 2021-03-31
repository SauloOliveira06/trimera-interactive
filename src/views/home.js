import React from "react";

// import AppHero from "../components/home/hero";
import AppAbout from "../components/home/about";
import AppFeature from "../components/home/feature";
import AppWorks from "../components/home/works";
import AppFaq from "../components/home/faq";
import AppPricing from "../components/home/pricing";
import AppContact from "../components/home/contact";
import BannerTrimera from "../components/home/bannerHeader";
import Roadmap from "../components/home/roadmap";
import Explore from "../components/home/explore";

function AppHome() {
  return (
    <div className="main">
      <BannerTrimera />
      <Roadmap />
      <Explore />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
    </div>
  );
}

export default AppHome;
