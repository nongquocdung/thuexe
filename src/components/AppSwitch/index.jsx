import React from "react"
import { Switch, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

export function AppSwitch({ field = {}, readOnly = false, control }) {
    return (
        <Controller
            name={`${field.id}`}
            defaultValue={field.defaultValue || false}
            control={control}
            render={({ field: { onChange, value } }) => {
                return (
                    <FormControlLabel
                        control={
                            <Switch
                                checked={Boolean(value)}
                                onChange={e => {
                                    if (readOnly) {
                                        return
                                    }
                                    onChange(e)
                                }}
                                name={`${field.id}`}
                                color="primary"
                            />
                        }
                        label={field.label}
                        className={`${field.id}`}
                    />
                );
            }}
        />
    );
}
