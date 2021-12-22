import React from "react";
import {
  PlayerContainer,
  PlayerProfileImage,
  PlayerInfoWrapper,
} from "./styles";
import AppH from "../../assets/app-logo-hollow.png";

function PlayerItem({ a_p, current_theme }) {
  return (
    <PlayerContainer current_theme={current_theme}>
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

      {/* <label>
        {Object.keys(a_p).map((d) => {
          return <div>{d}</div>;
        })}
      </label> */}
    </PlayerContainer>
  );
}

export default PlayerItem;
