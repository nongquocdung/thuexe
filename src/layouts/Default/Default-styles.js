import { makeStyles } from "@mui/styles";

const drawerWidth = 230;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    backgroundColor: "#fff !important",
    height: 40,
    "& .MuiToolbar-root": {
      minHeight: "unset",
      height: "100%",
      padding: "0px 12px",
    },
    "& .toolbar-mobile": {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    display: "flex",
    "& .head-left": {
      display: "flex",
      height: "100%",
      width: 200,
      "& .logo-text": {
        fontWeight: 900,
        marginTop: "auto",
        marginBottom: "auto",
        color: "#333",
      },
      "& .f-div, & .s-div": {
        display: "flex",
        "& p": {
          marginTop: "auto",
          marginBottom: "auto",
        },
      },
      "& .f-div": {
        borderRight: "1px solid #bebebe",
        paddingRight: 38,
        position: "relative",
        "& .rotate": {
          backgroundColor: "rgba(0,0,0,0.1)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: -12,
          right: 0,
        },
      },
      "& .s-div": {
        paddingLeft: 12,
        "& p": { fontWeight: 700 },
      },
    },
    "& .head-right": {
      display: "flex",
      justifyContent: "flex-end",
      width: 200,
      "& .profile": {
        marginLeft: theme.spacing(2),
        color: "#333",
      },
      "& .user-info": {
        display: "Flex",
        "& .dis-name": {
          marginTop: "auto",
          marginBottom: "auto",
          marginRight: 8,
          color: "#234738",
        },
      },
    },
    "& .head-center": {
      flex: 1,
      display: "flex",
      "& > *": {
        margin: "auto",
        fontWeight: 900,
      },
    },
  },
  appBarShift: {},
  menuButton: { marginRight: 10 },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    border: 0,
    zIndex: 1,
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
    },
    "& .MuiList-root": {
      padding: 0,
    },
    "& .icon": {
      color: "#fff",
    },
    "& .itm-text": {
      color: "#fff",
      "& .MuiTypography-root": {
        fontSize: "0.98rem",
      },
    },
    "& .arrow-itm": {
      "& .MuiListItem-root": {
        padding: "8px 8px",

        "& .MuiListItemTcon-root": {
          minWidth: "unset",
          marginRight: 8,
        },
      },
      "& .collap-arr": {
        "& .MuiListItemIcon-root": {
          marginRight: 0,
        },
      },
      "& .open": {
        transform: "rotate(180deg)",
        marginLeft: drawerWidth - 40,
        transition: theme.transitions.create(["transform", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      "& .close": {
        transform: "rotate(0deg)",
        marginLeft: 0,
        transition: theme.transitions.create(["transform", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      "& .wrap-menu": {
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "calc(100vh - 124px)",

        "& .route-exp": {
          backgroundColor: "transparent",
          color: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          "& .Mui-expanded": {
            height: 48,
            minHeight: "unset",
          },

          "& .MuiAccordionSummary-content": {
            overflow: "hidden",
            margin: 0,
            flex: 1,
            whitespace: "nowrap",

            "& .MuiListItemIcon-root": {
              color: "#fff",
            },
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            whitespace: "nowrap",
            color: "#fff",
            marginRight: 0,
            overflow: "hidden",
            padding: 12,
          },
          "& .MuiAccordionSummary-root": {
            padding: 0,
          },
          "& .MuiAccordionDetails-root": {
            padding: 0,
            "& .MuiList-root": {
              width: "100%",
            },
          },
          "& .MuiCollapse-container": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        },
        "& .route-exp::before": {
          display: "none",
        },
        "& .Mui-expanded": {
          margin: 0,
        },
        "& .hide-exp-btn": {
          "& .MuiAccordionSummary-expandIconWrapper": {
            display: "none",
          },
        },
      },
      "& .wrap-menu::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255,255,255,0.5)", //theme.palette.primary.main
      },
      "& .wrap-menu-close::-webkit-scrollbar": {
        display: "none",
      },
    },
    "& .logo-cpn": {
      position: "absolute",
      bottom: 0,
      left: 8,
      right: 0, // color: #fff'
      padding: 4,
      "& .wrap": {
        margin: "auto",
        flexDirection: "column",
        width: "100%",
        display: "flex",
        "& .divide": {
          backgroundColor: "rgba(255,255,255,0.68)",
          height: "2px",
        },
      },
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition:
      theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        durations: theme.transitions.duration.enteringScreen,
      }) + " !important",
    overflowX: "hidden",
    border: 0,
    backgroundColor: "#2d353c",
    "& .MuiList-root": {
      padding: 0,
    },
  },

  drawerClose: {
    transition:
      theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        durations: theme.transitions.duration.enteringScreen,
      }) + " !important",
    overflowX: "hidden",
    border: 0,
    width: 40,
    backgroundColor: "#2d353c !important",
    "& .MuiList-root": {
      padding: 0,
    },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    height: 40,
    minHeight: "unset",
  },
  content: {
    flexGrow: 1,
    padding: 8,
    paddingTop: 8,
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#eff3f7",

    "& .main-paper": {
      height: "calc(100vh - 152px + 16px)",
      padding: theme.spacing(1),
      position: "relative",
    },
    "& .loading-main": {
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
    },
  },
  contentMobile: {},

  contentFull: {
    padding: theme.spacing(1),
    "& .main-box": {
      height: "calc(100vh - 115px)",
    },
  },
  rootProfileMenu: {
    "& .display-name": {
      "& .avatar-icon": {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2),
      },
    },
    "& .menu-item": {
      "& .item-icon": {
        minWidth: "unset",
        paddingRight: theme.spacing(1),
      },
    },
    "& .MuiList-root": {
      padding: 0,
    },
  },
  rootProfileMenuMobile: {
    "& .display-name": {
      "& .avatar-icon": {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        marginWight: theme.spacing(0.5),
      },
      "&. item-icon": {
        minWidth: "unset",
        paddingRight: theme.spacing(1),
      },
    },
  },
}));
