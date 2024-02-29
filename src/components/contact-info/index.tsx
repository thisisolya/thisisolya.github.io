import React from "react";
import styled from "styled-components";
import {
  AiOutlineFile,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
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
  height: "25px",
  margin: "10px",
  width: "30px",
  color: "white",
};

const contactData = [
  { icon: AiOutlineFile, link: process.env.REACT_APP_CV_LINK },
  { icon: AiFillGithub, link: process.env.REACT_APP_GITHUB_PROFILE },
  { icon: AiOutlineLinkedin, link: process.env.REACT_APP_LINKEDIN_PROFILE },
  { icon: AiOutlineMail, link: process.env.REACT_APP_EMAIL_ADDRESS },
];

function ContactInfo() {
  return (
    <ContactsContainer>
      {contactData.map((item) => (
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <item.icon style={iconStyles} />
        </Link>
      ))}
    </ContactsContainer>
  );
}

export default ContactInfo;
