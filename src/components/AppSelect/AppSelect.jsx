import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { InputLabel, MenuItem, FormHelperText, FormControl, Select, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    rootAppSelect: {
        position: "relative",
        "& .bkg-readonly": {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2
        }
    }
}));
export function AppSelect({ label = '', value, setValue = () => { }, items = [], readOnly = false, hasError = false, labelError = "", callback = () => { } }) {
    const classes = useStyles();

    const handleItem_change = (e) => {
        setValue(e.target.value)
        callback(e.target.value)
    }
    return (

        <Box className={classes.rootAppSelect}>

            <FormControl variant="outlined" size="small" fullWidth>
                {label !== '' && !hasError && (
                    <InputLabel id="app-select-label">{label}</InputLabel>
                )}
                {label !== '' && hasError && (

                    <InputLabel style={{ color: `${hasError ? '#f44336' : 'rgb(118, 118, 118)'}` }} id="app-select-label">{label}</InputLabel>
                )}
                <Select
                    error={hasError}
                    required
                    labelId="app-select-label"
                    id="app-select"
                    value={value || ""}
                    onChange={handleItem_change}
                    style={{ backgroundColor: "#fff" }}
                    {...label !== '' ? { label } : {}}
                >
                    {items.map((itm, idx) => {
                        return (
                            <MenuItem key={idx} value={itm.id}>{itm.label}</MenuItem>
                        )
                    })}

                </Select>
                {hasError && <FormHelperText style={{ color: "#f44336" }} >{labelError}</FormHelperText>}
            </FormControl>
            {readOnly && <div className="bkg-readonly" />}
        </Box>
    )
}