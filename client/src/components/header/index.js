import React from "react";
import { HeaderContainer, AppLogo, AppTitleLabel } from "./styles";
import AppH from "../../assets/app-logo-hollow.png";

function Header() {
  return (
    <HeaderContainer>
      <AppLogo src={AppH} alt="app-logo" />
      <AppTitleLabel htmlFor="">Fights Analysis</AppTitleLabel>
    </HeaderContainer>
  );
}

export default Header;
