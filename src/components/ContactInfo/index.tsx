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

const contactData = [
  { icon: AiFillGithub, link: process.env.REACT_APP_GITHUB_PROFILE },
  { icon: AiFillLinkedin, link: process.env.REACT_APP_LINKEDIN_PROFILE },
  { icon: AiFillMail, link: process.env.REACT_APP_EMAIL_ADDRESS },
  { icon: AiFillFacebook, link: process.env.REACT_APP_FACEBOOK_PROFILE },
];

const ContactInfo = () => {
  return (
    <ContactsContainer>
      {contactData.map((item) => (
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <item.icon style={iconStyles} />
        </Link>
      ))}
    </ContactsContainer>
  );
};

export default ContactInfo;
