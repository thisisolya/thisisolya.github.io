import React from "react";
import styled from "styled-components";
import AnimatedShape from "../../components/animated-shape";
import ContactInfo from "../../components/contact-info";
import Name from "../../components/name";

const Container = styled.div`
  align-items: center;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Courier New", monospace;
  height: 100vh;
`;

function HomePage() {
  return (
    <Container>
      <Name />
      <AnimatedShape />
      <ContactInfo />
    </Container>
  );
}

export default HomePage;
