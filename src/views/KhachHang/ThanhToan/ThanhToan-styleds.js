import { styled } from "@mui/styles";

export const ThanhToanStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& button": {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding:'10px 0px'
  },
}));
