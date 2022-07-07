import { styled } from "@mui/styles";

export const LichSuStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  "& .segment": {
    width: "calc(100% - 10px)",
    height: "50%",
    "& .segment-title": {
      fontWeight: 700,
    },
    "& .list": {
      height: "calc(100% - 30px)",
      // width: "100%",
      overflow: "auto",
    },
  },
}));
