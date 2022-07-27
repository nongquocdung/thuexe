import styled from '@emotion/styled'
import { Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppButton, AppForm } from '../../../../components'
import { CarInfo_Form, CauHinhGia_Form, ThongTinThem_Form } from '../DanhSachXe-const'

const ThemXeDialogStyled = styled(Dialog)(({ theme }) => ({
    width: '100%',
    height: '100%',
    "& .car-info": {
        marginBottom: 10,
        // paddingBottom: 10,
        width: "calc(100% )",
        border: "1px solid #234378",
        borderRadius: 4,
    },
    "& .form-content": {
        width: "100%",
        padding: 10,
    },
    "& .form-header": {
        width: "100%",
        backgroundColor: "#234378",
        padding: "7px 0px",
        "& .form-title": {
            margin: "auto",
            color: "#fff",
            fontWeight: 700,
            display: "inline",
        },
    },

}))

const ThemXeDialog = ({ dialog, setDialog, callback = () => { } }) => {
    const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()

    useEffect(() => {
    }, [])
    /**
     * acts
     */
    const handelClose_onClick = () => {
        setDialog({
            ...dialog,
            open: false
        })
    }
    const handelAdd_onClick = () => {

    }
    /**
     * render
     */
    return (
        <ThemXeDialogStyled
            open={Boolean(dialog?.open)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        // maxWidth={true}
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
            <DialogTitle>Thêm Xe</DialogTitle>
            <DialogContent dividers>
                <div className="car-info">
                    <Paper
                        elevation={1}
                        className='form-header'
                        position='static'
                    >
                        <div style={{ display: 'flex' }}>
                            <Typography className='form-title'>Thông tin xe</Typography>
                        </div>
                    </Paper>
                    <div className="form-content">
                        <AppForm
                            fields={CarInfo_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                    </div>

                </div>

                <div className="car-info">
                    <Paper
                        elevation={1}
                        className='form-header'
                        position='static'
                    >
                        <div style={{ display: 'flex' }}>
                            <Typography className='form-title'>Các thông tin thêm</Typography>
                        </div>
                    </Paper>
                    <div className="form-content">
                        <AppForm
                            fields={ThongTinThem_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                    </div>

                </div>

                <div className="car-info">
                    <Paper
                        elevation={1}
                        className='form-header'
                        position='static'
                    >
                        <div style={{ display: 'flex' }}>
                            <Typography className='form-title'>Cấu hình giá</Typography>
                        </div>
                    </Paper>
                    <div className="form-content">
                        <AppForm
                            fields={CauHinhGia_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                    </div>

                </div>
            </DialogContent>
            <DialogActions>
                <AppButton
                    color='primary'
                    label='Đăng xe'
                    variant="outlined"
                    onClick={handelAdd_onClick} />
                <AppButton
                    color='primary'
                    label='Đóng'
                    variant="outlined"
                    onClick={handelClose_onClick} />
            </DialogActions>
        </ThemXeDialogStyled>
    )
}

export default ThemXeDialog