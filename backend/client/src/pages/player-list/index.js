import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContainer } from "../../utils/styles";
import PlayerItem from "../../components/player-item";
import { PlayerListContainer, PlayerWrapper, PageTitle } from "./styles";
import { GlobalContext } from "../../global/GlobalContext";

function PlayerList() {
  const { current_theme } = useContext(GlobalContext);

  const [allPlayers, setAllPlayers] = useState([]);
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
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <AppContainer>
        <PlayerWrapper>
          <PageTitle current_theme={current_theme}>All Player</PageTitle>
          <PlayerListContainer>
            {allPlayers.map((a_p, index) => {
              return (
                <PlayerItem
                  key={index}
                  a_p={a_p}
                  current_theme={current_theme}
                />
              );
            })}
          </PlayerListContainer>
        </PlayerWrapper>
      </AppContainer>
    </div>
  );
}

export default PlayerList;
