import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootAppButton: {
    position: "relative",
    "& button": {
      textTransform: "capitalize",
      fontSize: "1rem",
    },
    "& .w-loading": {
      backgroundColor: "rgba(0,0,0,0.35)",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      zIndex: 1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      "& > *": {
        margin: "auto",
      },
    },
  },
  rootAppFormButton: {
    "& button": {
      textTransform: "capitalize",
      fontSize: "1rem",
      minHeight: "40px",
    },
  },
  rootAppDeleteButton: {
    padding: "4px 8px",
    minWidth: "unset",
    height: 36,
  },
  rootAppBackBtn: {
    position: "absolute",
    top: -58,
    right: 0,
    zIndex: 2,
  },
}));
