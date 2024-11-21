import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import languagesList from "../../utils/languages-list"; 
import PageContainer from "../../components/page-container";


const Navigation = styled(NavLink)`
  display: flex;
  gap: 0.5rem;
  align-items: end;
  margin-top: 1rem; 
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
  gap: 4px;
`;

const Button = styled.button.attrs({ type: "button" })<{ $isActive?: boolean }>`
  padding: 0.5rem;
  border: none;
  font-weight: ${(props) => (props.$isActive ? "bold" : "normal")};
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  cursor: pointer;
  transition: 0.5s;

  &: hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

function Legal() {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    languagesList[0]
  );
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

  return (
    <PageContainer>
      <ButtonsContainer>
        {languagesList.map((language) => (
          <Button
            $isActive={language === currentLanguage}
            onClick={() => setCurrentLanguage(language)}
          >
            {language}
          </Button>
        ))}
      </ButtonsContainer>

      <>
        <h1>{t("legal.heading")}</h1>
        <div>
          <h2>Olga Pinchuk</h2>
          <h3>{t("legal.contactInfo.heading")}</h3>
          <p>
            +4915752939227
            <br />
            olyapinch@gmail.com
          </p>
        </div>
        <div>
          <h3>{t("legal.disclaimer.heading")}</h3>
          <p>{t("legal.disclaimer.body")}</p>
        </div>
        <div>
          <h3>{t("legal.copyrightNotice.heading")}</h3>
          <p>{t("legal.copyrightNotice.body")}</p>
        </div>
        <div>
          <h3>{t("legal.dataProtection.heading")}</h3>
          <p>{t("legal.dataProtection.body")}</p>
        </div>
        <Navigation to="/">
          <Home />
          {t("legal.navigation")}
        </Navigation>
      </>
    </PageContainer>
  );
}

export default Legal;
