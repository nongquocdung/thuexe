import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker"
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Box from "@mui/material/Box";
import { MOMENT_FORMAT } from "../../common/utils/date";////////////////////
import { styled } from "@mui/material";

export const AppRangeDateStyled = styled("div")(({ theme }) => ({
    "& div": {
        display: 'flex',
        alignItems: 'center !important'
    },

    "& MulOutlinedInput-root": {
        width: 140,
        height: 45
    }
}));
export default function AppRangeDate({ value, setValue, inputFormat = "yyyy/MM/dd", startText = '', endText = '', callback = () => { } }) {

    return (
        <AppRangeDateStyled>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                    style={{ height: 40 }}
                    startText={startText}
                    endText={endText}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        callback(newValue)
                    }}
                    InputFormat={inputFormat}
                    renderInput={(startProps, endProps) => (

                        <React.Fragment>
                            <textfield style={{ background: "#fff" }} {...startProps} />
                            <Box sx={{ mx: 2 }}>
                                <ArrowRightAltIcon />
                            </Box>
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider >
        </AppRangeDateStyled >
    );
}