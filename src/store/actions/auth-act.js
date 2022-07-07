import { authType } from "../types";

export const authAct = {
  loginSuccess,
  logout,
  updateRole,
};

function loginSuccess(userInfo) {
  return { type: authType.LOGIN_SUCCESS, userInfo };
}
function logout() {
  return { type: authType.LOGOUT };
}
function updateRole(role) {
  return { type: authType.UPDATE_ROLE, role };
}
