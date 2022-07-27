import { styled } from "@mui/styles";

export const AppStepsStyled = styled("div")(({ theme }) => ({
  width: "100%",
  "& .MuiStepper-root": {
    padding: 8,
    backgroundColor: "transparent",
    "& .MuiStep-root": {
      "& :hover": {
        cursor: "pointer",
      },
      "&.MuiStepIcon-completed": {
        color: '#008348',
      },
    },
    "& .MuiStepLabel-labelContainer": {
      "& .MuiStepLabel-alternativeLabel": {
        marginTop: 8,
      },
    },
  },
}));
