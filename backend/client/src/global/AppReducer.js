import { SET_ALERT, REMOVE_ALERT, SET_APP_THEME } from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_APP_THEME: {
      return {
        ...state,
        current_theme: state.all_themes.find(
          (th) => th.name == action?.payload?.name
        ),
        theme: action?.payload?.name,
      };
    }
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action?.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state?.alerts?.filter((alert) => alert.id !== action?.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
