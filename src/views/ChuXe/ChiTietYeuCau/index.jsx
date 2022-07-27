import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import { AppButton, AppForm } from '../../../components'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import { GhiChu_Form, mockData_DanhSachTaiXe, mockData_DanhSachXe, ThemTaiXe_Form } from './ChiTietYeuCau-const'
import { ChiTietYeuCauStyled } from './ChiTietYeuCau-styles'

const ChiTietYeuCau = () => {
  const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [listCar, setListCar] = useState([])
  const [listDriver, setListDriver] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Yêu cầu #" + id))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])

  const init = () => {
    var path = RoutePaths.ChiTietXe.replace(':id', 123)
    const _listCar = mockData_DanhSachXe.map(i => {
      return {
        ...i,
        btnData: {
          label: "Chi Tiết",
          onClick: () => {
            navigator(path)
          }
        }
      }
    })
    setListCar(_listCar)

    var path1 = RoutePaths.ChiTietTaiXe.replace(':id', 123)
    const _listDriver = mockData_DanhSachTaiXe.map(i => {
      return {
        ...i,
        btnData: {
          label: "Chi Tiết",
          onClick: () => {
            navigator(path1)
          }
        }
      }
    })
    setListDriver(_listDriver)
  }

  return (
    <ChiTietYeuCauStyled>
      <div>
        <div className="line ">
          <Typography>Địa điểm giao xe: DN10, Đông Hưng Thuận, Quận 12, tp HCM.</Typography>
        </div>
        <div className="line">
          <Typography>Thời gian thuê: 6:00 20/2/2022 - 6:00 21/2/2022</Typography>
        </div>
        <div className="line">
          <Typography>Tổng số xe: 2   Tổng số tài xế: 2</Typography>
        </div>
      </div>

      <div className='list-detail'>
        <div className="segment">
          <Typography className='segment-title'>Danh sách xe thuê</Typography>
          <div className='list'>
            <AppList data={listCar} type={MANAGER_TYPES.CAR} hasBtn={true} />
          </div>
        </div>
        <div className="segment">
          <div style={{ display: 'flex' }}>
            <Typography style={{ margin: 'auto 0px' }} className='segment-title'>Danh sách tài xế</Typography>
            <div style={{ minWidth: 150, margin: '0px 10px' }}>
              <AppForm
                fields={ThemTaiXe_Form}
                size="small"
                control={control}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
              />
            </div>
            <AppButton
              style={{ minHeight: 40 }}
              color='primary'
              label='Thêm tài xế'
              variant="outlined"
              onClick={() => { }} />
          </div>
          <div className='list'>
            <AppList data={listDriver} type={MANAGER_TYPES.DRIVER} hasBtn={true} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <AppForm
          fields={GhiChu_Form}
          size="small"
          control={control}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
        />
      </div>

      <div style={{ marginTop: 50 }}>
        <div className="line ">
          <Typography>Tổng số tiền: 11,200,000VNĐ</Typography>
        </div>
        <div className="line">
          <Typography>Phí phát sinh: 22,800VNĐ</Typography>
        </div>
        <div className="line">
          <Typography>Số tiền thu được: 22,800,000VNĐ</Typography>
        </div>
      </div>
      <div className="access">
        <AppButton
          style={{ marginRight: 10 }}
          color='primary'
          label='Xác nhận'
          variant="outlined"
          onClick={() => { }} />
      </div>
    </ChiTietYeuCauStyled>
  )
}

export default ChiTietYeuCau