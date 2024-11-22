import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2.5rem;
  padding-top: 4rem;
  text-align: center;
  text-transform: uppercase;
`;

const Subheading = styled.h2`
  font-size: 1.25rem;
  padding-top: 0.5rem;
  text-align: center;
`;

function Name(): React.ReactElement {
  return (
    <>
      <Heading>Olga Pinchuk</Heading>
      <Subheading>frontend developer</Subheading>
    </>
  );
}

export default Name;
