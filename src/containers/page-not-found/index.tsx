import React from "react";
import { NavLink } from "react-router-dom";
import PageContainer from "../../components/page-container";
import MulticoloredText from "../../components/multicolored-text";

function PageNotFound(): React.ReactElement {
  return (
    <PageContainer $centeredHorizontally $centeredVertically $height={500}>
      this page doesn's seem to exist...
      <nav>
        <NavLink to="/">
          <MulticoloredText>go to homepage</MulticoloredText>
        </NavLink>
      </nav>
    </PageContainer>
  );
}

export default PageNotFound;
