import styled from '@emotion/styled'
import { Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@mui/material'
import React from 'react'
import { AppButton } from '../../../../components'

const LichTrinhDialogDialog = styled(Dialog)(({ theme }) => ({
    
}))

const LichTrinhDialog = ({ dialog, setDialog, callback = () => { } }) => {


    /**
     * acts
     */
    const handelClose_onClick = () => {
        setDialog({
            ...dialog,
            open: false
        })
    }
    /**
     * render
     */
    return (
        <LichTrinhDialogDialog
            open={Boolean(dialog?.open)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
        >
            {/* <Paper
                elevation={1}
                className='paper-head'
                position='static'
                color='default'
            >
                <Typography className='title'>Lịch Bảo Dưỡng</Typography>
            </Paper>
            <div className="content">

            </div>
            <div className="bot-acts">
                <AppButton
                    color='primary'
                    label='Đóng'
                    variant="outlined"
                    onClick={handelClose_onClick} />
            </div> */}
            <DialogTitle>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                123
            </DialogContent>
            <DialogActions>
                <AppButton
                    color='primary'
                    label='Đóng'
                    variant="outlined"
                    onClick={handelClose_onClick} />
            </DialogActions>
        </LichTrinhDialogDialog>
    )
}

export default LichTrinhDialog