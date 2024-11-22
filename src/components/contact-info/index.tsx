import React from "react";
import styled from "styled-components";
import { GitHub, Linkedin, FileText as CV, Mail } from "react-feather";

const ContactsContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const IconWrapper = styled.li`
  margin: 0;
  padding: 0;
  transition: 0.3s;

  &: hover {
    transform: scale(1.5);
    transition: 0.3s ease;
  }
`;

const StyledIcon = styled.span`
  display: inline-block;
  height: 1.25rem;
  margin: 0.75rem;
  color: white;
`;

const contactData = [
  { icon: Linkedin, link: process.env.REACT_APP_LINKEDIN_PROFILE, label: "LinkedIn" },
  { icon: CV, link: process.env.REACT_APP_CV_LINK, label: "CV" },
  { icon: Mail, link: process.env.REACT_APP_EMAIL_ADDRESS, label: "Email" },
  { icon: GitHub, link: process.env.REACT_APP_GITHUB_PROFILE, label: "GitHub" },
];

function ContactInfo(): React.ReactElement {
  return (
    <nav>
      <ContactsContainer>
        {contactData.map((item: (typeof contactData)[0]) => (
          <IconWrapper key={item.label}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <StyledIcon as={item.icon} />
            </a>
          </IconWrapper>
        ))}
      </ContactsContainer>
    </nav>
  );
}

export default ContactInfo;
