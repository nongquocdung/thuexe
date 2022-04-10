import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootAppTable: {
    position: "relative",
    height: "100%",
    backgroundColor: "#fff",
    "& .loading": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "99",
      backgroundColor: "rgba(0,0,0,0.1)",
      display: "flex",
      "& > *": {
        margin: "auto",
      },
    },
    "& .t-footer": {
      width: "100%",
      display: "flex",
      "&.f-left": {
        flex: "1",
        display: "flex",
        "& .1-page": {
          display: "flex",
          marginRight: "20px",
          "& >*": {
            margin: "auto",
            marginLeft: "5px",
          },
        },
      },
      "& .f-right": {
        display: "flex",
        height: "40px",
        "& .r-page": {
          display: "flex",
          marginRight: "20px", // padding: "5px 0px",
          "& >*": {
            margin: "auto",
            marginLeft: "5px",
          },
        },

        "& .r-actions": {
          height: "100%",
          display: "flex",
          "& >*": { margin: "auto" },
        },
      },
    },
  },
  table: {
    "& .r-c-check": {
      // padding: "0px !important"
    },
    "& .t-head": {
      "& .h-cell": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: "0px 8px",
        // borderRight: "1px solid #fff",
        "& button": {
          color: "#fff",
        },
        "& .chk-all": { color: "#fff" },
      },
      // "& .MuiIconButton-label": {
      "& .view-align-right": {
        justifyContent: "flex-end !important",
      },
      "& .view-sort": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        textTransform: "capitalize",
        backgroundColor: "rgba(116, 180, 236, 0.3)",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "3px",
        "&:hover": {
          cursor: "pointer",
        },
      },
      "& .view-sorted": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "10px",
        textTransform: "capitalize",
        paddingTop: "10px",
        paddingLeft: "3px",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    "& .t-body": {
      // backgroundColor: "rgba(51, 51, 51, 0.1)",
      "& .b-row": {
        "& .r-cell": {
          padding: "4px 8px",
          minHeight: 38,
          borderBottom: "0px",
          "& .cell-link": {
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          },
          "& p, & span": {
            fontSize: 14,
            fontFamily: "Open Sans', sans-serif !important",
          },
          "& span.Mui Typography-caption": {
            fontsize: "0.75rem",
          },
          fontsize: 14,
          fontFamily: "Open Sans', sans-serif !important",
        },
        "& .r-c-act": {
          paddingLeft: 0,
          paddingRight: 0,
        },
        "& .r-c-no": { paddingLeft: "10px" },
        "& .r-even": { backgroundColor: "rgb(239, 243, 247)" },
        "& .r-c-sts": { paddingLeft: 0, paddingRight: 0 },
      },
    },
  },
}));
