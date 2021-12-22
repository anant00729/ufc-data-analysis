import React from "react";
import {
  PlayerContainer,
  PlayerProfileImage,
  PlayerInfoWrapper,
} from "./styles";
import AppH from "../../assets/app-logo-hollow.png";

function PlayerItem({ a_p, current_theme, handleItemClick }) {
  return (
    <PlayerContainer onClick={handleItemClick} current_theme={current_theme}>
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
    </PlayerContainer>
  );
}

export default PlayerItem;
