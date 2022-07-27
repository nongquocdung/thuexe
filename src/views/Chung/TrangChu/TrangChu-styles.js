import { styled } from "@mui/styles";

export const TangChuStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .segment": {
    width: "100%",
    paddingBottom: 50,
    backgroundColor: "#fff",
    margin: "10px 0px",
    "& .segment-act": {
      display: "flex",
      justifyContent: "space-around",
      padding: "0px 0px 50px 0px",
    },
    "& .segment-title": {
      fontWeight: 700,
      fontSize: 30,
      margin: "auto 0px",
    },
  },
}));
