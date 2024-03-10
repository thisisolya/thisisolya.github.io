import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";
import { NavLink } from "react-router-dom";

function Legal() {
  const Container = styled.div`
    padding: 2rem;

    div {
      margin-top: 10px;
    }
  `;

  const Navigation = styled(NavLink)`
    display: flex;
    align-items: end;
    gap: 0.5rem;
    margin-top: 1rem;
    transition: 0.5s;
    text-decoration: none;
    &: hover {
      transform: scale(0.9);
      transition: 0.5s;
    }
  `;

  const Switcher = styled.label<{ checked: boolean }>`
    cursor: pointer;
    width: 30px;
    height: 15px;
    background: ${({ checked }) => (checked ? "white" : "#00fcff")};
    display: block;
    border-radius: 90px;
    position: relative;
    margin: 10px 0;
    &:after {
      content: "";
      position: absolute;
      left: ${({ checked }) => (checked ? "0" : "14px")};
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 15px;
      background: ${({ checked }) => (checked ? "#00fcff" : "white")};
      border-radius: 90px;
    }

    input {
      display: none;
    }
  `;

  const SwitcherContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
  `;

  const [isEnglish, setEnglish] = React.useState(true);

  return (
    <Container>
      <SwitcherContainer>
        eng
        <Switcher htmlFor="checkbox" checked={isEnglish}>
          <input
            id="checkbox"
            type="checkbox"
            checked={isEnglish}
            onChange={() => setEnglish(!isEnglish)}
          />
        </Switcher>
        de
      </SwitcherContainer>

      {isEnglish && (
        <>
          <h1>Legal information</h1>
          <div>
            <h2>Olga Pinchuk</h2>
            <h3>Contact info:</h3>
            <p>
              +4915752939227
              <br />
              olyapinch@gmail.com
            </p>
          </div>
          <div>
            <h3>Disclaimer:</h3>
            <p>
              This website serves as a personal portfolio and CV platform for
              Olga Pinchuk. The information provided on this website is for
              informational purposes only. While every effort is made to keep
              the information accurate and up-to-date, Olga Pinchuk makes no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability, or
              availability of the information contained on this website. Any
              reliance you place on such information is therefore strictly at
              your own risk.
            </p>
          </div>
          <div>
            <h3>Copyright Notice:</h3>
            <p>
              All content, including text, images, and other multimedia
              elements, on this website is the property of Olga Pinchuk unless
              otherwise stated. Unauthorized use and/or duplication of this
              material without express and written permission from Olga Pinchuk
              is strictly prohibited. Excerpts and links may be used, provided
              that full and clear credit is given to Olga Pinchuk with
              appropriate and specific direction to the original content.
            </p>
          </div>
          <div>
            <h3>Data Protection and Privacy Policy:</h3>
            <p>
              This website does not collect any personal data from visitors
              unless explicitly provided through contact forms or other means.
              Any personal information provided will be used solely for the
              purpose of responding to inquiries or providing requested services
              and will not be shared with third parties without consent.
            </p>
          </div>
          <Navigation to="/">
            <Home />
            back to homepage
          </Navigation>
        </>
      )}
      {!isEnglish && (
        <>
          <h1>Rechtliche Informationen</h1>
          <div>
            <h2>Olga Pinchuk</h2>
            <h3>Kontaktdaten:</h3>
            <p>
              +4915752939227
              <br />
              olyapinch@gmail.com
            </p>
          </div>
          <div>
            <h3>Haftungsausschluss:</h3>
            <p>
              Diese Website dient als persönliches Portfolio und
              Lebenslaufplattform für Olga Pinchuk. Die auf dieser Website
              bereitgestellten Informationen dienen nur zu Informationszwecken.
              Obwohl alle Anstrengungen unternommen werden, um die Informationen
              genau und aktuell zu halten, macht Olga Pinchuk keine
              Zusicherungen oder Gewährleistungen jeglicher Art, ausdrücklich
              oder implizit, hinsichtlich der Vollständigkeit, Richtigkeit,
              Zuverlässigkeit, Eignung oder Verfügbarkeit der auf dieser Website
              enthaltenen Informationen. Jegliches Vertrauen, das Sie in solche
              Informationen setzen, geschieht daher ausschließlich auf eigenes
              Risiko.
            </p>
          </div>
          <div>
            <h3>Urheberrechtshinweis:</h3>
            <p>
              Alle Inhalte, einschließlich Texte, Bilder und andere multimediale
              Elemente, auf dieser Website sind Eigentum von Olga Pinchuk,
              sofern nicht anders angegeben. Eine unbefugte Nutzung und/oder
              Vervielfältigung dieses Materials ohne ausdrückliche und
              schriftliche Genehmigung von Olga Pinchuk ist strengstens
              untersagt. Auszüge und Links dürfen verwendet werden,
              vorausgesetzt, dass Olga Pinchuk mit angemessener und spezifischer
              Verweisung auf den ursprünglichen Inhalt klar und deutlich genannt
              wird.
            </p>
          </div>
          <div>
            <h3>Datenschutzrichtlinie:</h3>
            <p>
              Diese Website erhebt keine personenbezogenen Daten von Besuchern,
              es sei denn, sie werden ausdrücklich durch Kontaktformulare oder
              andere Mittel bereitgestellt. Alle bereitgestellten persönlichen
              Informationen werden ausschließlich für den Zweck der Beantwortung
              von Anfragen oder der Bereitstellung angeforderter
              Dienstleistungen verwendet und ohne Zustimmung nicht an Dritte
              weitergegeben.
            </p>
          </div>
          <Navigation to="/">
            <Home />
            zurück zur Startseite
          </Navigation>
        </>
      )}
    </Container>
  );
}

export default Legal;
