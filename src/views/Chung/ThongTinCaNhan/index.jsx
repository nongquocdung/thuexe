import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppButton, AppForm } from '../../../components'
import { layoutActions } from '../../../store/actions/layout-act'
import { DiaChi_Form, Email_Form, HoVaTen_Form, SDT_Form } from './ThongTinCaNhan-const'
import { ThongTinCaNhanStyled } from './ThongTinCaNhan-styles'
import { useForm } from 'react-hook-form'

const ThongTinCaNhan = () => {
  const dispatch = useDispatch()
  const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()

  useEffect(() => {
    dispatch(layoutActions.setTitle("Thông tin cá nhân"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])
  /**
   * apis
   */

  /**
   * acts
   */

  /**
   * render
   */
  return (
    <ThongTinCaNhanStyled>
      <div className='anchor-top-left'>
        <AppButton
          color='primary'
          label='Thay đổi mật khẩu'
          variant="outlined"
          onClick={() => { }} />
      </div>
      <div className="avatar">
        <Card sx={{ display: 'flex', boxShadow: 'none' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
            alt=""
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Thành viên vàng
            </Typography>
          </CardContent>
        </Card>
        <AppButton
          color='primary'
          label='Thay ảnh đại diện'
          variant="outlined"
          onClick={() => { }} />
      </div>
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Thông tin cá nhân</Typography>
          </div>
        </Paper>


        <div className='form-field'>
          <Typography className='form-field-title'>Họ và tên</Typography>
          <AppForm
            fields={HoVaTen_Form}
            size="small"
            control={control}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
        <div className='form-field'>
          <Typography className='form-field-title'>Số điện thoại</Typography>
          <AppForm
            fields={SDT_Form}
            size="small"
            control={control}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
        <div className='form-field'>
          <Typography className='form-field-title'>Địa chỉ email</Typography>
          <AppForm
            fields={Email_Form}
            size="small"
            control={control}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
        <div className='form-field'>
          <Typography className='form-field-title'>Địa chỉ thường trú</Typography>
          <AppForm
            fields={DiaChi_Form}
            size="small"
            control={control}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </div>
        <div className='form-action'>
          <AppButton
            color='primary'
            label='Cập nhật thông tin'
            variant="outlined"
            onClick={() => { }} />
        </div>
      </div>

      <div className="license-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Bằng lái</Typography>
          </div>
        </Paper>
        <div className='img-group'>
          <div className='img-contend'>
            <img src="123" />
          </div>

          <div className='img-contend'>
            <img src="123" />
          </div>
        </div>
        <div className='form-action'>
          <AppButton
            color='primary'
            label='Cập nhật thông tin'
            variant="outlined"
            onClick={() => { }} />
        </div>
      </div>

      <div className="license-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Giấy tờ tùy thân</Typography>
          </div>
        </Paper>
        <div className='img-group'>
          <div className='img-contend'>
            <img src="123" />
          </div>

          <div className='img-contend'>
            <img src="123" />
          </div>
        </div>
        <div className='form-action'>
          <AppButton
            color='primary'
            label='Cập nhật thông tin'
            variant="outlined"
            onClick={() => { }} />
        </div>
      </div>

    </ThongTinCaNhanStyled>
  )
}

export default ThongTinCaNhan