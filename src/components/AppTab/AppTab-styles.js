import { styled } from "@mui/material/styles";

export const AppTabStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",

  "& .tab-top": {
    minHeight: 38,
    height: 38,
    borderBottom: "2px solid" + theme.palette.primary.main,

    "& MuiTabs-scroller": {
      minHeight: 38,
      height: 38,
    },
    "& button": {
      minWidth: 110,
      marginRight: 4,
      borderRadius: 0,
      textTransform: "capitalize",
      padding: "0px 16px",
      minsHeight: 38,
      height: 38,
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #000",
    },
  },
  "& .tab-body": {
    paddingTop: 8,
    position: "relative",
    height: "calc(100% - 38px)",
  },
  "& .tab-body-notabs": {
    paddingTop: 0,
    height: "100%",
  },
}));

export const AppTabVerticalStyled = styled("div")(({ theme }) => ({
  height: "100%",
  position: "relative",
  flexGrow: 1,
  display: "flex",
  "& .taby-left": {
    "& button": {
      minWidth: 110,
      borderRadius: 0,
      textTransform: "capitalize",
      padding: "0px 16px",
      minHeight: 18,
      height: 38,
      backgroundColor: "#fff",
      color: "#000",
    },
    "& .Mul-selected": {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
  },
  "& taby-body": {
    paddingLeft: 16,
    paddingTop: 8,
    position: "relative",
    flex: 1,
  },
}));
