import { styled } from "@mui/styles";
import { padding } from "@mui/system";

export const ChiTietXeStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .car-info": {
    marginTop: 50,
    // paddingBottom: 10,
    width: "calc(100% )",
    border: "1px solid #234378",
    borderRadius: 4,
  },
  "& .form-content": {
    width: "100%",
    padding: 10,
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
  "& .date": {
    width: "50%",
    marginTop: 50,
  },
}));
