import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector } from "react-redux";
import _ from "lodash";
import { authAct } from "../../../store/actions";

export default function HeadPage({ classes, open, setOpen }) {
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();
  const isMobile = false;
  const displayName = useMemo(() => {
    let ret = auth?.user?.profile?.username ?? "";

    return ret;
  }, [auth]);

  const handleLogout_click = () => {
    dispath(authAct.logout());
  };
  function renderDashboardHead() {
    let ret;
    ret = (
      <>
        <div className="head-left"></div>
        <div className="head-center">
          <Typography variant="h6" noWrap className="logo-text">
            THUE XE
          </Typography>
        </div>
        <div className="head-right">
          <div className="user-info">
            <Typography variant="caption" color="primary" className="dis-name">
              {displayName || 'user@gmail.com'}
            </Typography>
            <IconButton size="small" onClick={handleLogout_click}>
              <ExitToAppIcon
                fontSize="small"
                color="secondary"
                style={{ width: 24, height: 24, color: "#234738" }}
              />
            </IconButton>
          </div>
        </div>
      </>
    );
    return ret;
  }
  return (
    <AppBar
      position="fixed"
      color="transparent"
      className={clsx(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar className={clsx({ "toolbar-mobile": isMobile })}>
        {renderDashboardHead()}
      </Toolbar>
    </AppBar>
  );
}
