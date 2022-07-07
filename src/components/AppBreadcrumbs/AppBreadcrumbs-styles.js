import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootAppBreadcrumbs: {
    marginBottom: 16,
    "& .break-top": {
      whitespace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 24,
    },
    "& .link": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
}));
