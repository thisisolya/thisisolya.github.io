import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import languagesList from "../../utils/languages-list";
import PageContainer from "../../components/page-container";
import { NavLink } from "react-router-dom";
import MulticoloredText from "../../components/multicolored-text";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

const LanguageButton = styled.button.attrs({ type: "button" })`
  padding: 0.5rem;
  border: none;
  font-size: bold;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0.5rem;
`;

function Legal(): React.ReactElement {
  const [currentLanguage, setCurrentLanguage] = React.useState<string>(
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
          <LanguageButton
            key={language}
            onClick={() => setCurrentLanguage(language)}
            aria-label={t(`legal.languageButtonAriaLabel.${language}`)}
          >
            {language === currentLanguage
              ? <MulticoloredText>{language}</MulticoloredText>
              :  language
            }
          </LanguageButton>
        ))}
      </ButtonsContainer>

      <TextContainer>
        <h1>{t("legal.heading")}</h1>

        <section>
          <h2>Olga Pinchuk</h2>
          <h3>{t("legal.contactInfo.heading")}</h3>
          <p>
            <a href="tel:+4915752939227">+4915752939227</a>
            <br />
            <a href="mailto:olyapinch@gmail.com">olyapinch@gmail.com</a>
          </p>
        </section>

        <section>
          <h3>{t("legal.disclaimer.heading")}</h3>
          <p>{t("legal.disclaimer.body")}</p>
        </section>

        <section>
          <h3>{t("legal.copyrightNotice.heading")}</h3>
          <p>{t("legal.copyrightNotice.body")}</p>
        </section>

        <section>
          <h3>{t("legal.dataProtection.heading")}</h3>
          <p>{t("legal.dataProtection.body")}</p>
        </section>

        <NavLink to="/">
          <MulticoloredText>{t("legal.navigation")}</MulticoloredText>
        </NavLink>
      </TextContainer>
    </PageContainer>
  );
}

export default Legal;
