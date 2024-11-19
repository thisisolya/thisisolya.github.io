import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedShape from "../../components/animated-shape/index";
import ContactInfo from "../../components/contact-info/index";
import Name from "../../components/name/index";
import PageContainer from "../../components/page-container/index";

const HomePage: React.FC = () => {
  return (
    <PageContainer $centeredHorizontally $centeredVertically>
      <Name />
      <AnimatedShape />
      <ContactInfo />
      <NavLink to="legal">legal information</NavLink>
    </PageContainer>
  );
};

export default HomePage;
