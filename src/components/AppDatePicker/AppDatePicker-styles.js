import { styled } from "@mui/material/styles";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

export const AppDatePickerStyled = styled(DatePicker)(({ theme }) => ({}));

export const AppDatePickerTextStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
}));
