import { styled } from "@mui/styles";

export const XeDangThueStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .anchor-top-left": {
    position: "absolute",
    top: -48,
    right: 0,
    "& button": {
      minWidth: 120,
    },
  },
  "& .app-list": {
    width: "100%",
  },
}));
