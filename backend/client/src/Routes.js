import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { HOME_ROUTE, PLAYER_LIST_ROUTE } from "./utils/page_route_names";
import Home from "./pages/home";
import PlayerList from "./pages/player-list";
import Header from "./components/header";
import { GlobalContext } from "./global/GlobalContext";
import { PageWrapper } from "./utils/styles";

function RoutesPage() {
  const { current_theme } = useContext(GlobalContext);
  return (
    <PageWrapper current_theme={current_theme}>
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={PLAYER_LIST_ROUTE} element={<PlayerList />} />
      </Routes>
    </PageWrapper>
  );
}

export default RoutesPage;
