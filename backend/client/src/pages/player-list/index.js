import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContainer } from "../../utils/styles";
import PlayerItem from "../../components/player-item";
import PlayerInfoModal from "../../components/player-info-modal";
import { PlayerListContainer, PlayerWrapper, PageTitle } from "./styles";
import { GlobalContext } from "../../global/GlobalContext";

function PlayerList() {
  const { current_theme, is_player_info_open, setPlayerInfoModal } =
    useContext(GlobalContext);

  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  useEffect(async () => {
    await axios({
      method: "get",
      url: "/getAllPlayers",
    }).then(
      (response) => {
        setAllPlayers(response.data.all_fighter_data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }, []);

  const handlePlayerInfo = (selectedPlayer) => {
    setPlayerInfoModal(true);
    setSelectedPlayer(selectedPlayer);
  };

  const display_player_list = (allPlayers) => {
    return allPlayers.map((a_p, index) => {
      return (
        <PlayerItem
          key={index}
          a_p={a_p}
          current_theme={current_theme}
          handleItemClick={() => handlePlayerInfo(a_p)}
        />
      );
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AppContainer>
          <PlayerWrapper>
            <PageTitle current_theme={current_theme}>All Player</PageTitle>
            <PlayerListContainer>
              {display_player_list(allPlayers)}
            </PlayerListContainer>
          </PlayerWrapper>
        </AppContainer>
      </div>
      {is_player_info_open ? (
        <PlayerInfoModal selectedPlayer={selectedPlayer} />
      ) : null}
    </div>
  );
}

export default PlayerList;
