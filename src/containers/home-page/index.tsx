import React from "react";
import { NavLink } from "react-router-dom"; 
import PageContainer from "../../components/page-container";
import Name from "../../components/name";
import AnimatedShape from "../../components/animated-shape";
import ContactInfo from "../../components/contact-info";

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
