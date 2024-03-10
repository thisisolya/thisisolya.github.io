import React from "react";
import styled from "styled-components";
import AnimatedShape from "../../components/animated-shape";
import ContactInfo from "../../components/contact-info";
import Name from "../../components/name";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  a {
    text-decoration: none;
    font-size: 8px;
    margin-bottom: 10px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Name />
      <AnimatedShape />
      <ContactInfo />
      <NavLink to="legal">legal information / Impressum</NavLink>
    </Container>
  );
};

export default HomePage;
