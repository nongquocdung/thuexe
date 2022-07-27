import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

const AppRadioButtonField = ({
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
}) => {
    return (
        <Controller
            name={field.id}
            defaultValue={field.defaultValue || ''}
            control={control}
            render={({ field: { onChange, value } }) => {
                let _readOnly = field?.readOnly || Boolean(readOnly)
                return (
                    <FormControl>
                        <FormLabel >{field.label}</FormLabel>
                        <RadioGroup
                            row={field.row || false}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={value}
                            value={value}
                            name="radio-buttons-group"
                            onChange={(e) => {
                                if (_readOnly) {
                                    return
                                } else {
                                    onChange(e.target.value)
                                    onValueChange({ id: field.id, value: e.target.value })
                                }

                            }}
                        // disable={_readOnly}
                        >
                            {
                                field.radio.map(i => (
                                    <FormControlLabel value={i.value} control={<Radio />} label={i.label} />
                                ))
                            }
                            {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                        </RadioGroup>
                    </FormControl>
                );
            }}
        />
    );
}

export default AppRadioButtonField