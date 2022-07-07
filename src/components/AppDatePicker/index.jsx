import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@mui/lab';
import { Controller } from 'react-hook-form';
import { Box, IconButton, TextField } from '@mui/material';
import ToIcon from "@mui/icons-material/TrendingFlat";
import closeIcon from "@mui/icons-material/Close";

import { AppDatePickerStyled, AppDatePickerTextStyled } from "./AppDatePicker-styles"
import { isBetween, MOMENT_FORMAT, parse2Str } from '../../common/utils/date'; ///////////////////////////
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export function AppDatePicker({
    field,
    control,
    errors,
    getValues,
    setValue,
    size = "small",
    readOnly,
    onValueChange = () => { }
}) {

    const handleDisableDates = (date) => {
        const start = getValues(`${field.id}_min`)
        const end = getValues(`${field.id}_max`)
        if (start && end) {
            const _dt = parse2Str(date, MOMENT_FORMAT.YYYY_MM_DD)
            const _s = parse2Str(start, MOMENT_FORMAT.YYYY_MM_DD_00_00_00)
            const _e = parse2Str(end, MOMENT_FORMAT.YYYY_MM_DD_23_59_59)
            if (isBetween(_dt, _s, _e)) {
                return false
            }
            return true
        }
        return false
    }
    return (
        <Controller
            name={field.id}
            defaultValue={field.defaultValue || null}
            control={control}
            render={({ field: { onChange, value } }) => {
                if (field?.category === 'time') {
                    return (
                        <TimePicker
                            label={field?.label}
                            value={value}
                            ampm={field?.ampm}
                            onChange={(newValue) => {
                                onChange(newValue)
                            }}
                            renderInput={(params) => {
                                const error = Boolean(errors?.[field.id]?.type)

                                return (
                                    <AppDatePickerTextStyled
                                        size={size}
                                        {...params}
                                        required={Boolean(field?.required)}
                                        error={error}
                                        helperText={error ? errors?.[field.id]?.message : null}
                                    />
                                )
                            }}
                        />
                    );
                } else if (field?.category === 'datetime') {
                    return (
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DateTimePicker
                                label={field.label}
                                value={value}
                                ampm={field?.ampm}
                                minutesStep={field?.minutesStep ? field?.minutesStep : 1}
                                onChange={(date) => {
                                    onChange(date);
                                    onValueChange({
                                        id: field.id,
                                        value: date,
                                    });
                                }}
                                renderInput={(params) => {
                                    const error = Boolean(errors?.[field.id]?.type);
                                    return (
                                        <AppDatePickerTextStyled
                                            size={size}
                                            {...params}
                                            required={Boolean(field?.required)}
                                            error={error}
                                            helperText={error ? errors?.[field.id]?.message : null}
                                        />
                                    );
                                }}
                                inputFormat={field?.format || "dd/mm/yyyy"}
                                readOnly={Boolean(readOnly)}
                                shouldDisableDate={handleDisableDates}
                            />
                        </LocalizationProvider>
                    );
                }
                return (
                    <AppDatePickerStyled
                        views={["day"]}
                        label={field.label}
                        value={value}
                        onChange={(date) => {
                            onChange(date);
                            onValueChange({
                                id: field.id,
                                value: date
                            })
                        }}
                        renderInput={(params) => {
                            const error = Boolean(errors?.[field.id]?.type)
                            return (

                                <AppDatePickerTextStyled
                                    size={size}
                                    {...params}
                                    required={Boolean(field?.required)}
                                    error={error}
                                    helperText={error ? errors?.[field.id]?.message : null}
                                />
                            )
                        }}
                        InputFormat={field?.format || "dd/MM/yyyy"}
                        readOnly={Boolean(readOnly)}
                        shouldDisableDate={handleDisableDates}
                    />
                );
            }}
        />
    );
}