import { styled } from "@mui/styles";

export const DanhSachYeuCauStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .app-list": {
    width: "100%",
  },
}));
