import { styled } from "@mui/styles";

export const AppSlideImgStyled = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  "& .img": {
    width: "100%",
    height: "auto",
    overflow: "hidden",
  },
  "& .swiper-pagination": {
    bottom: "0px !important",
  },
}));
