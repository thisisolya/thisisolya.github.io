import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const ContactsContainer = styled.div`
  display: flex;
  padding-bottom: 50px;
  justify-content: space-evenly;
`;

const Link = styled.a`
  transition: 0.5s;
  &: hover {
    transform: scale(1.5);
    transition: 1s;
  }
`;

const iconStyles = {
  height: "30px",
  margin: "15px",
  width: "30px",
  color: "white",
};

const ContactInfo = () => {
  return (
    <ContactsContainer>
      <Link
        href={process.env.REACT_APP_GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub style={iconStyles} />
      </Link>
      <Link
        href={process.env.REACT_APP_LINKEDIN_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin style={iconStyles} />
      </Link>
      <Link href={`mailto:${process.env.REACT_APP_EMAIL_ADDRESS}`}>
        <AiFillMail style={iconStyles} />
      </Link>
      <Link
        href={process.env.REACT_APP_FACEBOOK_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook style={iconStyles} />
      </Link>
    </ContactsContainer>
  );
};

export default ContactInfo;
