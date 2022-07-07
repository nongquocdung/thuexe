import { Paper } from "@mui/material";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AppBreadcrumbs, AppLoading } from "../../../components";
import React from "react";

export default function MainPage({ classes, children }) {
  const isMobile = false;
  const { loadingMain, showBreadCrumbs } = useSelector((state) => state.layout);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentMobile]: isMobile,
        [classes.contentFull]: !showBreadCrumbs,
      })}
    >
      <div className={classes.toolbar} />
      <div>
        <AppBreadcrumbs />

        {showBreadCrumbs ? (
          <Paper className="main-paper" elevation={3}>
            {children}
          </Paper>
        ) : (
          <div className="main-box">{children}</div>
        )}
        {loadingMain && (
          <div className="loading-main">
            <AppLoading />
          </div>
        )}
      </div>
    </main>
  );
}
