import React from "react";
import { NavLink } from "react-router-dom"; 
import PageContainer from "../../components/page-container";

const Error = () => {
  return (
    <PageContainer $centeredHorizontally $centeredVertically>
      this page doesn's seem to exist...
      <NavLink to="/">go to homepage</NavLink>
    </PageContainer>
  );
};

export default Error;
