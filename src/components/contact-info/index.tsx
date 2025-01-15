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
  { icon: Linkedin, link: 'https://www.linkedin.com/in/olga-pinchuk', label: "LinkedIn" },
  { icon: CV, link: 'https://shorturl.at/51CeU', label: "CV" },
  { icon: Mail, link: 'mailto:olyapinch@gmail.com', label: "Email" },
  { icon: GitHub, link: 'https://github.com/thisisolya', label: "GitHub" },
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
