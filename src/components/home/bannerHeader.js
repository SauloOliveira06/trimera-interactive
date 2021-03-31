import React from "react";
import bannerHeader from "../../assets/images/banner_header.jpg";
const BannerHeader = () => {
  return (
    <>
      <div id="hero" className="heroBlock">
        <div className="bannerTrimera">
          <img
            src={bannerHeader}
            alt="Banner Trimera"
            className="banner-trimera"
          />
        </div>
      </div>
    </>
  );
};

export default BannerHeader;
