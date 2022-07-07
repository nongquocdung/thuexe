import { styled } from "@mui/styles";

export const LienHeStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",

  "& .total-info": {
    marginBottom: 50,
    paddingBottom: 10,
    width: "calc(100% - 10px)",
    border: "1px solid #234378",
    borderRadius: 4,
    "& .form-header": {
      width: "100%",
      backgroundColor: "#234378",
      padding: "7px 0px",
      "& .form-title": {
        margin: "auto",
        color: "#fff",
        fontWeight: 700,
        display: "inline",
      },
    },
    "& .content": {
      width: "100%",
    },
  },
}));
