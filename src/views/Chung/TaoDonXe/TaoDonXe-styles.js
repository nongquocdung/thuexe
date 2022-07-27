import { styled } from "@mui/styles";

export const TaoDonXeStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .head": {
    display: "flex",
    justifyContent: "space-around",
    padding: "50px 0px 10px 0px",
  },
  "& .title": {
    fontWeight: 700,
    fontSize: 30,
    margin: "auto 0px",
  },
  "& .form": {
    width: "calc(100% - 100px)",
    backgroundColor: "#fff",
    padding: "10px 20px",
    margin: "0px auto",
    "& .form-segment": {
      marginBottom: "30px",
    },
    "& .form-title": {
      fontWeight: 700,
      margin: "0px 0px 10px 10px",
    },
    "& .form-body": {
      border: "1px solid #c4c4c4",
      padding: "30px 30px",
      "& .form-act": {
        display: "flex",
        flexDirection: "row-reverse",
        padding: "10px 0px",
      },
    },
    "& .submit":{
      display:'flex',
      justifyContent:"space-around"
    }
  },
}));
