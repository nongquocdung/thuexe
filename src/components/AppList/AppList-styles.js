import { styled } from "@mui/styles";

export const AppListStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  "& .item": {
    position: "relative",
    "& .btn": {
      position: "absolute",
      right: 5,
      top: 5,
    },
  },
}));
