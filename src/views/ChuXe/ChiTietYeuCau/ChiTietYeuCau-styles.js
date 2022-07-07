import { styled } from "@mui/styles";
import { padding } from "@mui/system";

export const ChiTietYeuCauStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  "& .inline": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .line": {
    marginBottom: "10px",
  },
  "& .list-detail": {
    height: "100%",
    width: "100%",
    margin: "50px 0px",
    "& .segment": {
      marginTop: 50,
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
  },
}));
