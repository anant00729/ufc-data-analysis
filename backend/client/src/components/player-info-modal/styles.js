import styled from "styled-components";
import Image from "../../components/image";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  transition: position 0.5s ease;
  display: flex;
  justify-content: center;
`;

export const CancelModal = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 40px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  color: #fff;
  background-color: ${(p) => p.current_theme.page_background};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.09);
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 24px;
  border-radius: 10px;
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
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.current_theme.page_text_color};
`;

export const CarrerStatsContent = styled.div`
  color: ${(p) => p.current_theme.page_text_color};
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const PlayerImageAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CarrerStatsLabel = styled.label`
  margin-top: 16px;
`;

export const BasicInfoWrapper = styled.div``;

export const CarrerInfoWrappper = styled.div``;

export const AbbreviationWrappper = styled.div``;
