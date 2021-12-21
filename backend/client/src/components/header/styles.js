import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  /* background-color: #1b1924; */
  background-color: ${(p) => p.current_theme.header_color};
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
`;

export const HeaderContainer = styled.div`
  padding: 18px 0;
  /* font-family: "Space Mono", monospace; */
  /* font-family: "Abril Fatface", cursive; */
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.img`
  width: 60px;
`;

export const AppTitleLabel = styled.label`
  color: white;
  letter-spacing: 1px;
  font-size: 12px;
  margin-left: 8px;
`;

export const AppLogoWrapper = styled.div``;

export const RightMenuWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const MenuWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const MenuItem = styled.div`
  margin-left: 8px;
  font-weight: 500;
  cursor: pointer;
`;

export const MenuGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
