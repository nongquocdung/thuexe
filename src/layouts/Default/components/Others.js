import {
  Avatar,
  Divider,
  Fade,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import clsx from "clsx";
import _ from "lodash";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
export function ProfileMenu({ classes, anchorEl, onClose, logout, isMobile }) {
  const auth = useSelector((state) => state.authentication);
  const displayName = useMemo(() => {
    let ret = "";
    if (!_.isEmpty(auth.user?.profile?.displayName)) {
      ret = auth.user.profile.displayName;
    } else if (!_.isEmpty(auth.user?.profile?.username)) {
      ret = auth.user.profile.username;
    }
    return ret;
  }, [auth]);

  const handle_close = (route) => {
    onClose(route);
  };
  return (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      keepMounted
      TransitionComponent={Fade}
      anchorOrigins={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(anchorEl)}
      onclose={() => handle_close()}
      className={clsx(classes.rootProfileMenu, {
        [classes.rootProfileMenuMobile]: isMobile,
      })}
    >
      <MenuItem className="display-name">
        <ListItemIcon className="item-icon">
          <Avatar className="avatar-icon" />
        </ListItemIcon>

        <ListItemText primary={displayName} className="item-text" />
      </MenuItem>
      <Divider />

      <MenuItem onClick={logout} className="menu-item">
        <ListItemIcon className="item-icon">
          <ExitToAppIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary={"Logout"} className="item-text" />
      </MenuItem>
    </Menu>
  );
}
