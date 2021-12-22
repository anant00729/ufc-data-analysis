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
import { NavLink } from "react-router-dom";
import { AppContainer } from "../../utils/styles";
import { GlobalContext } from "../../global/GlobalContext";
import AppH from "../../assets/app-logo-hollow.png";
import { HOME_ROUTE, PLAYER_LIST_ROUTE } from "../../utils/page_route_names";

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
            <AppTitleLabel>Fights Analysis</AppTitleLabel>
          </AppLogoWrapper>
          <MenuGroup>
            <MenuWrapper>
              <MenuItem>
                <NavLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={HOME_ROUTE}
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={PLAYER_LIST_ROUTE}
                >
                  All Players
                </NavLink>
              </MenuItem>
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
