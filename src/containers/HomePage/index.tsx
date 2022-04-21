import React from "react";
import styled from "styled-components";
import AnimatedShape from "../../components/AnimatedShape";
import ContactInfo from "../../components/ContactInfo";
import Name from "../../components/Name";

const Container = styled.div`
  align-items: center;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <Container>
      <Name />
      <AnimatedShape />
      <ContactInfo />
    </Container>
  );
};

export default MainPage;
