import { styled } from "@mui/styles";

export const DanhSachXeStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .app-list": {
    width: "100%",
  },
  "& .top-right-act": {
    position: "absolute",
    top: -50,
    right:0,
  },
}));
