import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  SET_ALERT,
  REMOVE_ALERT,
  SET_APP_THEME,
  SET_IS_PLAYER_INFO_MODAL,
} from "./types";
import { v4 as uuidv4 } from "uuid";

const getThemeFromLocalStorage = () => {
  let theme = localStorage.getItem("theme");
  if (theme == null) {
    return "light";
  } else {
    return theme;
  }
};

// Initial state
const initialState = {
  theme: getThemeFromLocalStorage(),
  alerts: [],
  all_themes: [
    {
      name: "light",
      header_color: "#d20909",
      page_background: "#fff",
      page_text_color: "#000",
      card_color: "#fff",
    },
    {
      name: "dark",
      header_color: "#212121",
      page_background: "#181818",
      page_text_color: "#fff",
      card_color: "#212121",
    },
  ],
  current_theme: {
    name: "light",
    header_color: "#d20909",
    page_background: "#fff",
    page_text_color: "#000",
    card_color: "#fff",
  },
  is_player_info_open: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setPlayerInfoModal(is_open = false) {
    dispatch({
      type: SET_IS_PLAYER_INFO_MODAL,
      payload: { is_open },
    });
  }

  function setAppTheme(name = "light") {
    dispatch({
      type: SET_APP_THEME,
      payload: { name },
    });
  }

  function setAlert(msg, timeout = 2500) {
    if (msg) {
      const id = uuidv4();
      dispatch({
        type: SET_ALERT,
        payload: { msg, id },
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        alerts: state.alerts,
        all_themes: state.all_themes,
        current_theme: state.current_theme,
        is_player_info_open: state.is_player_info_open,
        setAlert,
        setAppTheme,
        setPlayerInfoModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
