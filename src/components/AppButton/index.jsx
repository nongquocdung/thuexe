import { Button, Paper, Typography, CircularProgress } from '@mui/material';
import * as React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useStyles } from './AppButton-styles';

export function AppButton({ label = '...', icon: Icon, type = "", loading = false, ...rest }) {
    const classes = useStyles();
    function renderIcon() {
        let ret = null
        if (type === "back") {
            ret = <KeyboardBackspaceIcon />
        } else if (Icon) {
            ret = <Icon {...rest?.style_icon} />
        }
        return ret;
    }
    return (
        <div className={classes.rootAppButton}>
            {loading && (
                <div className="w-loading">
                    <CircularProgress size={30} color="secondary" />
                </div>
            )}
            {
                type === "back" &&
                <Button color="primary" variant="outlined" {...rest}>
                    {renderIcon()}
                    <Typography> {label}</Typography>
                </Button>
            }
            {
                type !== "back" &&
                <Button variant="contained" {...rest}>
                    {renderIcon()}
                    <Typography>{label}</Typography>
                </Button>
            }
        </div>
    );
}
export function AppFormButton({ field, control, getValues, setValue, onValueChange, ...rest }) {
    const classes = useStyles();
    return (
        <div className={classes.rootAppFormButton}>
            <Button variant="contained" color="primary" {...rest} fullWidth onClick={rest.onClick ? () => rest.onClick(getValues, setValue) : () => { }}>
                <Typography> {field.label}</Typography>
            </Button>
        </div>
    );
}
export function AppDeleteButton({ size = "small", ...rest }) {
    const classes = useStyles();
    return (
        <Button className={classes.rootAppDeleteButton} size={size} color="secondary" variant="contained" {...rest}>
            <DeleteIcon />
        </Button>
    )
}
export function AppDownloadButton({ size = "small", ...rest }) {
    const classes = useStyles();
    return (
        <Button className={classes.rootAppDeleteButton} size={size} color="secondary" variant="contained" {...rest}>
            <GetAppIcon />
        </Button>
    )
}
export function AppBackButton({ label = "", ...rest }) {
    const classes = useStyles();
    return (
        <div className={classes.rootAppBackBtn}>
            <AppButton type="back" label={label} {...rest} />
        </div>
    )
}