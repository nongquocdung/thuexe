import { Button, IconButton, Paper, Typography, Dialog, DialogActions, DialogContent } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AppButton } from "../AppButton";
import { useStyles } from './AppAlert-styles';

export function AppAlert({ dialog = {}, setDialog, confirmResult = () => { } }) {
    const classes = useStyles();
    const handleClose_click = () => {
        setDialog({
            ...dialog,
            open: false,
        });
    };
    return (
        <Dialog
            className={classes.rootAppAlert}
            open={Boolean(_.get(dialog, ['open']))}
            onClose={handleClose_click}
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
        >
            <Paper
                elevation={1}
                className="paper-head"
                position="static"
            >
                <Typography className="title">
                    {_.get(dialog, ['title'], '')}
                </Typography>
                <IconButton
                    className="icon-close"
                    color="secondary"
                    size="small"
                    onClick={handleClose_click}
                >
                    <closeIcon />
                </IconButton>
            </Paper>
            <DialogContent>
                <Typography
                    style={{
                        fontSize: '1rem',
                        minHeight: 40,
                        marginTop: 20,
                        minWidth: 300
                    }}
                >
                    {_.get(dialog, ['message'], '')}
                    <a
                        onClick={() => confirmResult("DETAIL")}
                        className="item-delete"
                        style={{
                            color: 'blue',
                            cursor: "pointer",
                            textDecoration: "underline"
                        }}
                    >
                        {_.get(dialog, ['itemDelete'], "")}
                    </a>
                    {_.get(dialog, ["itembelete"]) && <span>?</span>}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose_click} variant="outlined">
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={() => confirmResult('OK')}
                    color="primary"
                    autofocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export function AppConfirm({ dialog = {}, setDialog, callback = () => { }, }) {
    const classes = useStyles();
    const handleClose_click = () => {
        setDialog({
            ...dialog,
            open: false,
        });
    };
    return (
        <Dialog
            className={classes.rootAppAlert}
            open={Boolean(dialog?.open)}
        >
            <Paper
                elevation={1}
                className="paper-head"
                position="static"
            // color="default"
            >
                <Typography className="title">{dialog?.title}</Typography>
                <IconButton
                    className="icon-close"
                    color="secondary"
                    size="small"
                    onClick={handleClose_click}
                >
                    <CloseIcon />
                </IconButton>
            </Paper>
            <DialogContent style={{ minHeight: 100 }}>
                {dialog?.message}
            </DialogContent>
            <DialogActions>
                <AppButton label="Cancel" onClick={handleClose_click} variant="outlined" />
                <AppButton
                    label="Confirm"
                    variant="contained"
                    onClick={() => callback('OK')}
                    color="primary"
                />
            </DialogActions>
        </Dialog>
    );
}