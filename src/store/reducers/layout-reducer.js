import { layoutTypes } from "../types";

const initialState = {
  openDrawer: false,
  loadingMain: false,
  showBreadCrumbs: true,
  refreshMenu: true,
  preSubTitClickable: false,
  title: "",
  params: {},
};

export function layout(state = initialState, action) {
  switch (action.type) {
    case layoutTypes.TOGGLE_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    case layoutTypes.SET_OPEN_DRAWER:
      return { ...state, openDrawer: action.open };
    case layoutTypes.TOGGLE_LOADING_MAIN:
      return {
        ...state,
        loadingMain: !state.loadingMain,
      };
    case layoutTypes.HIDE_BREADCRUMBS:
      return {
        ...state,
        showBreadCrumbs: false,
      };
    case layoutTypes.SHOW_BREADCRUMBS:
      return {
        ...state,
        showBreadCrumbs: true,
      };
    case layoutTypes.TITLE:
      return {
        ...state,
        title: action.title,
      };
    case layoutTypes.SUR_BREADCRUMBS:
      return {
        ...state,
        subBreadcrumb: action.subBreadcrumb,
        preSubTitClickable: action.preSubTitClickable,
      };

    case layoutTypes.SET_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...(action?.params || {}),
        },
      };
    case layoutTypes.REFRESH_MENU:
      return {
        ...state,
        refreshMenu: state.refreshMenu + 1,
      };
    default:
      return state;
  }
}
