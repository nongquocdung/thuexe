import { getUserInfo } from "../../common/utils/other";

import { authType } from "../types";

let userInfo = getUserInfo();

const initialState = userInfo ? { loggedIn: true, user: userInfo } : {};
export function auth(state = initialState, action) {
  switch (action.type) {
    case authType.LOGIN_SUCCESS:
      return { loggedIn: true, user: action.userInfo };

    case authType.LOGOUT:
      localStorage.removeItem("USER");
      return {};

    case authType.UPDATE_ROLE:
      state.user.profile.role = action.role;
      localStorage.setItem("USER", JSON.stringify(state.user));
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
}
