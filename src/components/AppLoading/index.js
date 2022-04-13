import React from "react";
import DotLoader from "react-spinners/DotLoader";
import clockLoader from "react-spinners/ClockLoader";
import CircleLoader from "react-spinners/CircleLoader";
import AppLoadingStyled from "./AppLoading-styles";

export function AppLoading({
  size = 60,
  color = "#B32034",
  type = "DotLoader",
}) {
  function renderLoader() {
    let Loader;
    if (type === "DotLoader") {
      Loader = "DotLoader";
    } else if (type === "clockLoader") {
      Loader = "ClockLoader";
    } else if (type === "CircleLoader") {
      Loader = "CircleLoader";
    } else {
      Loader = "DotLoader";
    }
    return <Loader size={size} color={color} />;
  }
  return <AppLoadingStyled>{renderLoader()}</AppLoadingStyled>;
}
