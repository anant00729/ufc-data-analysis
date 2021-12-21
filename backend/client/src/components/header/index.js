import React, { useContext } from "react";
import {
  HeaderContainer,
  AppLogo,
  AppTitleLabel,
  AppLogoWrapper,
  MenuWrapper,
  MenuItem,
  HeaderWrapper,
  MenuGroup,
  RightMenuWrapper,
} from "./styles";
import { AppContainer } from "../../utils/styles";
import { GlobalContext } from "../../global/GlobalContext";
import AppH from "../../assets/app-logo-hollow.png";

function Header() {
  const { current_theme, setAppTheme } = useContext(GlobalContext);

  const handleThemeChange = (theme_name) => {
    setAppTheme(theme_name);
  };

  return (
    <HeaderWrapper current_theme={current_theme}>
      <AppContainer>
        <HeaderContainer>
          <AppLogoWrapper>
            <AppLogo src={AppH} alt="app-logo" />
            <AppTitleLabel htmlFor="">Fights Analysis</AppTitleLabel>
          </AppLogoWrapper>
          <MenuGroup>
            <MenuWrapper>
              <MenuItem>Home</MenuItem>
              <MenuItem>All Players</MenuItem>
            </MenuWrapper>

            <RightMenuWrapper>
              <MenuItem onClick={() => handleThemeChange("light")}>
                Light
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange("dark")}>
                Dark
              </MenuItem>
            </RightMenuWrapper>
          </MenuGroup>
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default Header;
