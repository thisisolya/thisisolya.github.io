import React from "react";
import { NavLink } from "react-router-dom";
import PageContainer from "../../components/page-container";
import AnimatedShape from "../../components/animated-shape";
import ContactInfo from "../../components/contact-info";
import Name from "../../components/name";
import useWindowSize from "../../hooks/useWindowSize";

function HomePage(): React.ReactElement {
  const { height } = useWindowSize();
  
  return (
    <PageContainer $centeredHorizontally $centeredVertically $height={height}>
      <Name />
      <AnimatedShape />
      <ContactInfo />
      <NavLink to="legal" className="linkToLegalPage">legal information</NavLink>
    </PageContainer>
  );
}

export default HomePage;
