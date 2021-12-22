import styled from "styled-components";
import Image from "../../components/image";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
  background-color: ${(p) => p.current_theme.card_color};
`;

export const PlayerProfileImage = styled(Image)`
  width: 90px;
  height: 90px;
  background-color: ${(p) => p.current_theme.header_color};
  object-fit: contain;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
`;

export const PlayerInfoWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.current_theme.page_text_color};
`;
