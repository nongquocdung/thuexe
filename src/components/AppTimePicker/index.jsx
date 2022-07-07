import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export function AppTimePicker({ setTime }) {

    const [startTime, setStartTime] = React.useState(new Date("2020-01-01 08:00"));
    const [endTime, setEndTime] = React.useState(new Date("2020-01-01 09:00"));

    React.useEffect(() => {
        setTime({
            startTime,
            endTime
        });

    }, [startTime, endTime]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <div style={{ display: "flex" }}>
                    <TimePicker

                        renderInput={(params) => <TextField size="small" style={{ flex: 1 }} {...params} />}
                        value={startTime}
                        label={"Start Time"}
                        onChange={(newValue) => {
                            setStartTime(newValue);
                        }}
                    />

                    <TimePicker
                        renderInput={(params) => <TextField size="small" style={{ flex: 1 }} {...params} />}
                        label="End Time"
                        value={endTime}
                        onchange={(newValue) => {
                            setEndTime(newValue);
                        }}
                    />
                </div>
            </Stack>

        </LocalizationProvider>
    )
}