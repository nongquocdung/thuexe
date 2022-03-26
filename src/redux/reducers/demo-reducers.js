import { demoTypes } from "../types/demo-type";

const initialState = {};

export function demo(state = initialState, action) {
  switch (action.type) {
    case demoTypes.DEMO:
      return { ...state };

    default:
      return state;
  }
}
