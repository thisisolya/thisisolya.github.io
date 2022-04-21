import React from "react"; 
import styled from "styled-components";

type Props = {
  size: string;
};

const Paragraph = styled.div<Props>`
  font-size: ${(props) => (props.size === "large" ? "2.5rem" : "1.5rem")};
  padding-top: ${(props) => (props.size === "large" ? "50px" : "10px")};
  text-align: center;
  text-transform: ${(props) => props.size === "large" && "uppercase"};
`;

const Name = () => {
  return (
    <>
      <Paragraph size="large">Olga Pinchuk</Paragraph>
      <Paragraph size="small">frontend developer</Paragraph>
    </>
  );
};

export default Name;
