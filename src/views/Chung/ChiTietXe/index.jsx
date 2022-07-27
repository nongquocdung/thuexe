import React, { useState } from 'react'
import { AppButton, AppForm } from '../../../components'
import AppSlideImg from '../../../components/AppSlideImg'
import { CarInfo_Form, Date_Form, ThietBi_Form } from './ChiTietXe-const'
import { ChiTietXeStyled } from './ChiTietXe-styles'
import { useForm } from 'react-hook-form'
import { Paper } from '@mui/material'
import { Typography } from 'antd'
import { useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LichTrinhDialog from './component/LichTrinhDialog'
import LichBaoDuongDialog from './component/LichBaoDuongDialog'

const img = [
    'https://vnn-imgs-f.vgcloud.vn/2020/10/21/10/huracan-la-mo-t-trong-nhu-ng-ma-u-xe-de-p-nha-t-cu-a-lamborghini-a-nh-autocar.jpg',
    'https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/tmuihk/2021_06_12/aspark-owl_fxcn.jpg',
    'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    'https://cdn.24h.com.vn//upload/1-2022/images/2022-01-19/av-1642533445-976-width640height480.jpg',
    'https://vnn-imgs-f.vgcloud.vn/2020/10/21/10/huracan-la-mo-t-trong-nhu-ng-ma-u-xe-de-p-nha-t-cu-a-lamborghini-a-nh-autocar.jpg'

]
const ChiTietXe = () => {
    const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()
    const [baoDuongDialog, setBaoDuongDialog] = useState({});
    const [lichTrinhDialog, setLichTrinhDialog] = useState({});

    useEffect(() => {
        const param = {
            thiet_bi: 'camera'
        }
        reset(param)
    }, [])
    /**
     * acts
     */
    const handleLichTrinh_onClick = () => {
        setLichTrinhDialog({
            open: true
        })
    }

    const handleLichBaoDuong_onClick = () => {
        setBaoDuongDialog({
            open: true
        })
    }
    /**
     * render
     */
    return (
        <ChiTietXeStyled>
            <div className="slide-img">
                <AppSlideImg img={img} />
            </div>

            <div className="act">
                <AppButton
                    className='btn'
                    color='primary'
                    label='Thay đổi ảnh'
                    variant="outlined"
                    onClick={() => { }} />
                <AppButton
                    className='btn'
                    color='primary'
                    label='Thay đổi thông tin'
                    variant="outlined"
                    onClick={() => { }} />
                <AppButton
                    className='btn'
                    color='primary'
                    label='Lịch trình'
                    variant="outlined"
                    icon={CalendarMonthIcon}
                    onClick={handleLichTrinh_onClick}
                    style_icon={{ style: { marginRight: 10 } }}
                />
                <AppButton
                    className='btn'
                    color='primary'
                    label='Lịch sử bảo dưỡng'
                    variant="outlined"
                    icon={CalendarMonthIcon}
                    onClick={handleLichBaoDuong_onClick}
                    style_icon={{ style: { marginRight: 10 } }}
                />
            </div>

            <div className="date">
                <AppForm
                    fields={Date_Form}
                    size="small"
                    control={control}
                    errors={errors}
                    getValues={getValues}
                    setValue={setValue}
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
                        <Typography className='form-title'>Thiết bị kèm theo</Typography>
                    </div>
                </Paper>
                <div className="form-content">
                    <AppForm
                        fields={ThietBi_Form}
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
                        <Typography className='form-title'>Bảo hiểm</Typography>
                    </div>
                </Paper>
                <div className="form-content">

                </div>

            </div>
            <LichTrinhDialog dialog={lichTrinhDialog} setDialog={setLichTrinhDialog} />
            <LichBaoDuongDialog dialog={baoDuongDialog} setDialog={setBaoDuongDialog} />
        </ChiTietXeStyled>
    )
}

export default ChiTietXe