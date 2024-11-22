import React from "react";
import styled from "styled-components";

interface MulticoloredTextProps {
  children: React.ReactNode;
}

const StyledSpan = styled.span`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 120, 227, 1) 50%,
    rgba(116, 219, 255, 1) 100%
  );
  background-size: 200% 200%;
  animation: gradientAnimation 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: color 0.2s ease-in-out;

  @keyframes gradientAnimation {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: left;
    }
  }
`;

const MulticoloredText: React.FC<MulticoloredTextProps> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default MulticoloredText;
