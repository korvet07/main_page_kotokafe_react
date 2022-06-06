import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

// подвал сайта
function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
