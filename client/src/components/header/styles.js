import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 18px 0;
  /* font-family: "Space Mono", monospace; */
  /* font-family: "Abril Fatface", cursive; */
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  /* background-color: #fff; */
  /* background-color: #d10d0c; */

  background-color: #1b1924;

  box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
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
