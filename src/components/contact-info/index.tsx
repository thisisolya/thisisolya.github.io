import React from "react";
import styled from "styled-components";
import { GitHub, Linkedin, FileText as CV, Mail } from 'react-feather';


const ContactsContainer = styled.ul`
  display: flex;
  padding-bottom: 50px;
  justify-content: space-evenly;
  list-style: none;
`;

const IconWrapper = styled.li`
  margin: 0;
  padding: 0;
  transition: 0.5s;
  &: hover {
    transform: scale(1.5);
    transition: 1s;
    transition: 0.5s;
  }
`;

const iconStyles = {
  height: "1.25rem",
  margin: "0.5rem",
  color: "white",
};

const contactData = [
  { icon: Linkedin, link: process.env.REACT_APP_LINKEDIN_PROFILE },
  { icon: CV, link: process.env.REACT_APP_CV_LINK },
  { icon: Mail, link: process.env.REACT_APP_EMAIL_ADDRESS },
  { icon: GitHub, link: process.env.REACT_APP_GITHUB_PROFILE },
];

function ContactInfo(): React.ReactElement {
  return (
    <nav>
      <ContactsContainer>
        {contactData.map((item) => (
          <IconWrapper key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon style={iconStyles} />
            </a>
          </IconWrapper>
        ))}
      </ContactsContainer>
    </nav>
  );
}

export default ContactInfo;
