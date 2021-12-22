import React, { useContext } from "react";
import {
  ModalContainer,
  CancelModal,
  ModalBody,
  PlayerProfileImage,
  PlayerInfoWrapper,
} from "./styles";
import { AppContainer } from "../../utils/styles";
import Cancel from "../../assets/cancel.png";
import { GlobalContext } from "../../global/GlobalContext";
import AppH from "../../assets/app-logo-hollow.png";

function PlayerInfoModal({ selectedPlayer: a_p }) {
  const { setPlayerInfoModal, current_theme } = useContext(GlobalContext);
  return (
    <ModalContainer>
      <AppContainer>
        <CancelModal
          onClick={() => setPlayerInfoModal(false)}
          src={Cancel}
          alt="cancel-modal"
        />
        <ModalBody current_theme={current_theme}>
          <PlayerProfileImage
            src={a_p.image_url}
            alt="image_url"
            fallbackSrc={AppH}
            current_theme={current_theme}
          />
          <PlayerInfoWrapper current_theme={current_theme}>
            <label>{a_p.name}</label>
            <label>{a_p.nickname}</label>
          </PlayerInfoWrapper>
        </ModalBody>
      </AppContainer>
    </ModalContainer>
  );
}

export default PlayerInfoModal;
