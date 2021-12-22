import React, { useContext } from "react";
import {
  ModalContainer,
  CancelModal,
  ModalBody,
  PlayerProfileImage,
  PlayerInfoWrapper,
  CarrerStatsContent,
  PlayerImageAndNameWrapper,
  CarrerStatsLabel,
  BasicInfoWrapper,
  CarrerInfoWrappper,
  AbbreviationWrappper,
} from "./styles";
import { AppContainer } from "../../utils/styles";
import Cancel from "../../assets/cancel.png";
import { GlobalContext } from "../../global/GlobalContext";
import AppH from "../../assets/app-logo-hollow.png";

function PlayerInfoModal({ selectedPlayer: a_p }) {
  const { setPlayerInfoModal, current_theme } = useContext(GlobalContext);

  console.log(`a_p`, a_p);
  return (
    <ModalContainer>
      <AppContainer>
        <CancelModal
          onClick={() => setPlayerInfoModal(false)}
          src={Cancel}
          alt="cancel-modal"
        />
        <ModalBody current_theme={current_theme}>
          <PlayerImageAndNameWrapper>
            <PlayerProfileImage
              src={a_p.image_url}
              alt="image_url"
              fallbackSrc={AppH}
              current_theme={current_theme}
            />
            <PlayerInfoWrapper current_theme={current_theme}>
              <label>{a_p.name}</label>
              <label>{a_p.nickname == "Not Known" ? "" : a_p.nickname}</label>
            </PlayerInfoWrapper>
          </PlayerImageAndNameWrapper>

          <CarrerStatsContent current_theme={current_theme}>
            <BasicInfoWrapper>
              <CarrerStatsLabel>{"Basic Info:".toUpperCase()}</CarrerStatsLabel>
              <div>
                <div>HEIGHT: {a_p.height} </div>
                <div>WEIGHT: {a_p.weight}</div>
                <div>REACH: {a_p.reach}</div>
                <div>STANCE: {a_p.stance}</div>
                {/* <div>DOB: {a_p.}</div> */}
              </div>
            </BasicInfoWrapper>
            <CarrerInfoWrappper>
              <CarrerStatsLabel>
                {"Career statistics:".toUpperCase()}
              </CarrerStatsLabel>
              <div>
                <div>SLpM: 0.00 </div>
                <div>Str. Acc.: 0%</div>
                <div>SApM: 0.00</div>
                <div>Str. Def: 0%</div>
                <div>TD Avg.: 0.00</div>
                <div>TD Acc.: 0%</div>
                <div>TD Def.: 0%</div>
                <div>Sub. Avg.: 0.0</div>
              </div>
            </CarrerInfoWrappper>
            <AbbreviationWrappper>
              <label>Abbreviation</label>
              <div>
                <div>SLpM - Significant Strikes Landed per Minute</div>
                <div>Str. Acc. - Significant Striking Accuracy </div>
                <div>SApM - Significant Strikes Absorbed per Minute</div>
                <div>
                  Str. Def. - Significant Strike Defence (the % of opponents
                  strikes that did not land)
                </div>
                <div>TD Avg. - Average Takedowns Landed per 15 minutes</div>
                <div>TD Acc. - Takedown Accuracy</div>
                <div>
                  TD Def. -Takedown Defense (the % of opponents TD attempts that
                  did not land)
                </div>
                <div>
                  Sub. Avg. - Average Submissions Attempted per 15 minutes
                </div>
              </div>
            </AbbreviationWrappper>
          </CarrerStatsContent>
        </ModalBody>
      </AppContainer>
    </ModalContainer>
  );
}

export default PlayerInfoModal;
