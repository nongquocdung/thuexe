import { styled } from "@mui/styles";

export const ThongBaoStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .item": {
    width: "calc(100% - 10px)",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: "5px 10px",
    border: "1px solid",
  },
}));
