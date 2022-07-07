import { layoutTypes } from "../types";

export const layoutActions = {
  toggleDrawer,
  toggleLoadingMain,
  hideBreadCrumbs,
  showBreadCrumbs,
  setTitle,
  setSubBreadcrumb,
  setParams,
  setOpenDrawer,
  refreshMenu,
};
function toggleDrawer() {
  return { type: layoutTypes.TOGGLE_DRAWER };
}
function setOpenDrawer(open) {
  return { type: layoutTypes.SET_OPEN_DRAWER, open };
}
function toggleLoadingMain() {
  return { type: layoutTypes.TOGGLE_LOADING_MAIN };
}
function hideBreadCrumbs() {
  return { type: layoutTypes.HIDE_BREADCRUMBS };
}
function showBreadCrumbs() {
  return { type: layoutTypes.SHOW_BREADCRUMBS };
}

function setTitle(title) {
  return { type: layoutTypes.TITLE, title };
}

function setSubBreadcrumb(subBreadcrumb, preSubTitClickable = false) {
  return {
    type: layoutTypes.SUB_BREADCRUMBS,
    subBreadcrumb,
    preSubTitClickable,
  };
}
function setParams(params) {
  return { type: layoutTypes.SET_PARAMS, params };
}
function refreshMenu(params) {
  return { type: layoutTypes.REFRESH_MENU, params };
}
