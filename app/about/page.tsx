import React from "react";
import AboutSVKM from "./AboutSvkm";
import PageHero from "@/components/PageHero";
import MessageFromPresident from "./PresidentMessage";
import MessageFromPrincipal from "./PrincipalMessage";

const page = () => {
  return (
    <>
      <PageHero bannerImage="/images/page_banner.png" />
      <AboutSVKM />
      <MessageFromPresident />
      <MessageFromPrincipal />
      {/* <AboutSop /> */}
    </>
  );
};

export default page;
