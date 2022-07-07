import React from 'react';
import { TextField, InputAdornment } from "@mui/material";
import { Controller } from 'react-hook-form';
import { MODE_VIEW } from "../../common/utils/const"/////////////////////////////
import _ from 'lodash';

export function AppTextField({
    field = {},
    control,
    errors,
    readOnly,
    disabled,
    multiline,
    rows,
    size,
    getValues,
    setValue,
    onValueChange = () => { },
    emitEvent = () => { },
    ...rest
}) {
    const otherProps = {};
    let adornment = {};
    if (multiline | field.multiline) {
        otherProps['multiline'] = true;
        otherProps["rows"] = field.rows || rows || 2;
    }
    if (Boolean(_.get(errors, [field.id, 'message']))) {
        otherProps['helperText'] = _.get(errors, [field.id, 'message'], "Error");
    }
    if (field.adornment) {
        if (field.adornment.position === "end") {
            adornment['endAdornment'] = (
                <InputAdornment position="end">
                    <field.adornment.icon fontSize={field.adornment.fontSize} color={field.adornment.color} />
                </InputAdornment>
            );
        }else {
            adornment['startAdornment'] = (
                <InputAdornment position="start">
                    <field.adornment.icon fontSize={field.adornment.fontSize} color={field.adornment.color} />
                </InputAdornment>
            );
        }
    }

    const handleOnKeyDown = (e, value) => {
        if (rest.onKeyDown) {
            rest.onKeyDown(e, getValues, setValue);
        }
        if (e.key === 'Enter') {
            onValueChange && onValueChange({
                id: field.id,
                value
            })
            emitEvent("enter", {
                fieldId: field.id,
                value
            })
        }
    }

    return (
        <Controller
            name={field.id}
            defaultValue={field.defaultValue || ''}
            control={control}
            render={({ field: { onChange, value } }) => {
                let _readOnly = field?.readOnly || Boolean(readOnly)
                return (
                    <TextField
                        value={_.isNil(value) ? "" : value}
                        onChange={(e) => {
                            if (rest.mode === MODE_VIEW.DETAIL) {
                                return
                            }
                            onChange(e.target.value)
                            onValueChange({ id: field.id, value: e.target.value })
                        }}
                        id={field.id}
                        size={size || 'medium'}
                        fullWidth
                        variant={_readOnly ? 'outlined' : "outlined"}
                        label={field.label}
                        type={field.type || 'text'}
                        placeholder={field?.placeholder}

                        InputProps={{
                            readOnly: _readOnly,
                            disabled: Boolean(disabled),
                            ...adornment,
                        }}
                        inputProps={
                            field.inputProps || {}
                        }
                        required={Boolean(field.required)}
                        error={Boolean(_.get(errors, [field.id, 'type'], null))}
                        autoComplete="off"
                        {...otherProps}
                        className={`${field.id}`}

                        {...rest}
                        {...(field.props || {})}
                        onKeyDown={(e) => handleOnKeyDown(e, value)}
                    />
                );
            }}
        />
    );
}