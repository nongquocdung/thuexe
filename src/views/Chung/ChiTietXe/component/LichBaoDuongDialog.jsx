import styled from '@emotion/styled'
import { Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppButton, AppForm, AppTable } from '../../../../components'
import AppRangeDate from '../../../../components/AppRangeDate'
import { BaoDuong_Form, BaoDuong_table } from '../ChiTietXe-const'

const LichBaoDuongDialogStyled = styled(Dialog)(({ theme }) => ({
    width: '100%',
    height: '100%',
    "& .table": {
        width: '100%'
    },
    "& .car-info": {
        marginTop: 50,
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

const LichBaoDuongDialog = ({ dialog, setDialog, callback = () => { } }) => {
    const [rows, setRows] = useState([
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        },
        {
            loai: 'Kiểm tra hệ thống đèn',
            ngay: '22/4/2022',
            trang_thai: 'hoàn thành',
            chi_phi: '1.000.000'
        }
    ]);
    const [total, setTotal] = useState();
    const [page, setPage] = useState();
    const [pageSize, setPageSize] = useState();
    const [loading, setLoading] = useState();
    const [time, setTime] = useState(new Date());
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
    /**
     * render
     */
    return (
        <LichBaoDuongDialogStyled
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
            <DialogTitle>Lịch Bảo Dưỡng</DialogTitle>
            <DialogContent dividers>
                <div className="table">
                    <AppTable
                        screenName={'list_car'}
                        head={BaoDuong_table}
                        rows={rows}
                        total={total}
                        setPage={setPage}
                        page={page}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                        loading={loading}
                        callBack={() => { }}
                        config={{
                            hasNoCol: false,
                            isPagination: true,
                            localPagination: true,
                            maxHeight: 'calc(200px)'
                        }}
                    />
                </div>

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
                            fields={BaoDuong_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                        <AppRangeDate
                            value={time}
                            setValue={setTime}
                            callback={() => { }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'row-reverse', paddingTop: 10 }}>
                            <AppButton
                                color='primary'
                                label='Thêm lịch'
                                variant="outlined"
                                onClick={() => { }} />
                        </div>
                    </div>

                </div>
            </DialogContent>
            <DialogActions>
                <AppButton
                    color='primary'
                    label='Đóng'
                    variant="outlined"
                    onClick={handelClose_onClick} />
            </DialogActions>
        </LichBaoDuongDialogStyled>
    )
}

export default LichBaoDuongDialog