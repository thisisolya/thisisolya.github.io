import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2.5rem;
  padding-top: 50px;
  text-align: center;
  text-transform: uppercase;
`;

const Subheading = styled.h2`
  font-size: 1.25rem;
  padding-top: 5px;
  text-align: center;
`;

const Name: React.FC = () => {
  return (
    <>
      <Heading>Olga Pinchuk</Heading>
      <Subheading>frontend developer</Subheading>
    </>
  );
};

export default Name;
