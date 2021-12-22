import styled from "styled-components";

export const PlayerListContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 1fr);
`;

export const PlayerWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.label`
  color: ${(p) => p.current_theme.page_text_color};
`;
