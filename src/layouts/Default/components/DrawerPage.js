import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
} from "@mui/material";
import { useTheme } from "@mui/styles";
// import useMediaQuery from @material ui/core/useMediaquery";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePaths, ProtectedRoutes } from "../../../routes/protected-routes";

export default function DrawerPage({ classes, open, setOpen, auth, routes }) {
  const navigate = useNavigate();
  const [childDrawer, setChildDrawer] = React.useState(
    Object.values(routes).filter((r) => r.icon || r.iconSvg)
  );
  const { pathname } = useLocation();
  const theme = useTheme();
  const [ver, setVer] = useState("0.0.0");
  useEffect(() => {
    async function init() {
      setVer("0.0.1");
    }
    init();
  }, []);

  useEffect(() => {
    setChildDrawer(routes.filter((f) => f.icon || f.iconSvg));
  }, [routes]);

  const handleItem_click = ({ id, path }) => {
    navigate(path);
  };

  let Comp = DrawerDesk;
  return (
    <Comp
      classes={classes}
      open={open}
      setOpen={setOpen}
      onItemClick={handleItem_click}
      routes={childDrawer}
      pathname={pathname}
      theme={theme}
      version={ver}
    />
  );
}

function DrawerDesk({
  classes,
  open,
  setOpen,
  routes,
  pathname,
  theme,
  onItemClick = () => {},
  version,
}) {
  const [focusRoute, setForceRoute] = useState();
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (!open) {
    }
  }, [open]);
  useEffect(() => {
    const route = pathname.split("/").filter((str) => !_.isEmpty(str));
    setForceRoute(route.join("/"));
    setOpen(JSON.parse(localStorage.getItem("menu", "false")));
  }, [pathname]);

  const handleMenu = () => {
    const status = !open;
    localStorage.setItem("menu", JSON.stringify(status));
    setOpen(status);
  };
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar} />
      <List className="arrow-itm">
        <div key="arrow">
          <ListItem
            button
            onClick={() => setOpen(handleMenu)}
            className="collap-arr"
          >
            <ListItemIcon>
              <DoubleArrowIcon
                className={clsx("icon", {
                  open: open,
                  close: !open,
                })}
              />
            </ListItemIcon>
          </ListItem>
        </div>

        <div
          className={clsx("wrap-menu", {
            "wrap-menu-close": !open,
          })}
        >
          {routes.map((route, idx) => {
            let style = {};
            const _focusRoute = `/${focusRoute}`;
            if (
              _focusRoute === route.path ||
              _focusRoute.indexOf(route.path) !== -1
            ) {
              style = {
                backgroundColor: theme.palette.primary.main, //"#234378"
              };
            }
            if (route.children) {
              let _style = {};
              if (!open) {
              }
              if (route.path?.includes(_focusRoute) && !open) {
                _style = {
                  backgroundColor: theme.palette.primary.main, //"#234378"
                };
              } else if (
                !open &&
                _focusRoute &&
                route.path &&
                route.path.constructor === Array
              ) {
                const subRoute = _focusRoute.split("/");
                route.path.map((s) => {
                  if (s.includes(`/${subRoute[1]}/`)) {
                    _style = {
                      backgroundColor: theme.palette.primary.main, //"8234378"
                    };
                  }
                });
              }
              let icon;
              if (route.bigIcon) {
                icon = (
                  <route.bigIcon
                    fill="#3f53b5"
                    stroke="#3f51b5"
                    width={24}
                    height={24}
                  />
                );
              } else if (route.iconSvg) {
                let width = 18;
                let margin = 3;
                icon = (
                  <img
                    src={route.iconSvg}
                    className="icon"
                    alt="icon svg"
                    style={{
                      width: width,
                      margin: margin,
                      filter: "invert(1)",
                    }}
                  />
                );
              } else if (route.icon) {
                icon = <route.icon className="icon" color="primary" />;
              }
              return (
                <Accordion
                  expanded={open ? Boolean(expanded[route.id]) : false}
                  onchange={(e) =>
                    setExpanded((p) => ({ ...p, [route.id]: !p[route.id] }))
                  }
                  className={clsx("route-exp", {
                    "hide-exp-btn": !open,
                  })}
                  key={idx}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize="small" />}
                    style={_style}
                  >
                    <ListItem>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText
                        className="itm-text"
                        primary={route.label}
                      />
                    </ListItem>
                  </AccordionSummary>

                  <AccordionDetails>
                    <List>
                      {route.children.map((child, cIdx) => {
                        let style = {};
                        const childs = _focusRoute.split("/");
                        if (
                          _focusRoute === child.path ||
                          (childs &&
                            childs.length > 1 &&
                            child.path === `/${childs[childs.length - 2]}`)
                        ) {
                          style = {
                            backgroundColor: theme.palette.primary.main, //"#234378"
                          };
                        }
                        let _exp = {};
                        if (cIdx === 0) {
                          _exp = {
                            borderTop: "1px solid rgba(255,255,255,0.2)",
                          };
                        }
                        return (
                          <ListItem
                            key={`child-${cIdx}`}
                            button
                            onClick={() => onItemClick(child)}
                            style={{ ...style, ..._exp }}
                          >
                            <ListItemIcon style={{ width: 24 }}></ListItemIcon>
                            <ListItemText
                              className="itm-text"
                              primary={child.label}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            } else {
              let icon;
              if (route.bigIcon) {
                icon = (
                  <route.bigIcon
                    fill="#3f51bs"
                    stroke="#3f51b5"
                    width={24}
                    height={24}
                  />
                );
              } else if (route.iconSvg) {
                let width = 18;
                let margin = 3;
                icon = (
                  <img
                    src={route.iconSvg}
                    className="icon"
                    alt="icon svg"
                    style={{
                      width: width,
                      margin: margin,
                      filter: "invert(1)",
                    }}
                  />
                );
              } else if (route.icon) {
                icon = <route.icon className="icon" color="primary" />;
              }
              let _ext = {};
              if (idx === 0) {
                _ext = {
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                };
              }
              return (
                <div
                  key={route.id + idx}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    ..._ext,
                  }}
                >
                  <ListItem
                    button
                    onClick={() => onItemClick(route)}
                    style={style}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText className="itm-text" primary={route.label} />
                  </ListItem>
                </div>
              );
            }
          })}
        </div>
      </List>
      <div className="logo-cpn">
        <div className="wrap">
          <div className="divide" />
          <Typography
            variant="caption"
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.08)",
              fontSize: open ? "0`.68rem" : "0.56rem",
            }}
          >
            v{version}
          </Typography>
        </div>
      </div>
    </Drawer>
  );
}
