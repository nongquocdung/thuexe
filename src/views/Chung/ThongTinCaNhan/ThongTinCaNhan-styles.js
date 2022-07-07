import { styled } from "@mui/styles";

export const ThongTinCaNhanStyled = styled("div")(({ theme }) => ({
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
  "& .form-field": {
    padding: "10px 20px",
    fontWeight: 700,
    "& .form-field-title": {
      fontWeight: 700,
      marginBottom: 5,
    },
  },
  "& .form-action": {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0px",
  },
  "& .total-info": {
    marginTop: 50,
    paddingBottom: 10,
    width: "calc(100% - 10px)",
    border: "1px solid #234378",
    borderRadius: 4,
  },
  "& .license-info": {
    marginTop: 50,
    paddingBottom: 10,
    width: "calc(100% - 10px)",
    border: "1px solid #234378",
    borderRadius: 4,
    "& .img-group": {
      display: "flex",
      width: "100%",
      "& .img-contend": {
        width: "50%",
        margin: 20,
        padding: 5,
        border: "1px solid",
        minHeight: 200,
        display: "flex",
        justifyContent: "space-around",
        "& img": {
          margin: "auto",
        },
      },
    },
  },
}));
