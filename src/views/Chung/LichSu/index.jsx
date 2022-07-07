import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MANAGER_TYPES, TRANSACTION_TYPES } from '../../../common/utils/const'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions/layout-act'
import { mockData_DonHangDaHoanThanh, mockData_DonHangDangXuLy } from './LichSu-const'
import { useNavigate } from "react-router-dom";
import { LichSuStyled } from './LichSu-styles'

const LichSu = () => {
  const dispatch = useDispatch()
  const [data1, SetData1] = useState([])
  const [data2, SetData2] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Lịch sử giao dịch"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])

  const init = () => {
    var path = RoutePaths.ChiTietGiaoDich.replace(':id', 123)
    const _data1 = mockData_DonHangDaHoanThanh.map(i => {
      return {
        ...i,
        btnData: {
          label: "Chi Tiết",
          onClick: () => {
            navigator(path, {
              state: {
                type: TRANSACTION_TYPES.FINISHED
              }
            })
          }
        }
      }
    })
    const _data2 = mockData_DonHangDangXuLy.map(i => {
      return {
        ...i,
        btnData: {
          label: "Chi Tiết",
          onClick: () => {
            navigator(path, {
              state: {
                type: TRANSACTION_TYPES.UNFINISHED
              }
            })
          }
        }
      }
    })
    SetData1(_data1)
    SetData2(_data2)
  }

  return (
    <LichSuStyled>
      <div className="segment">
        <Typography className='segment-title'>Đang xử lý</Typography>
        <div className='list'>
          <AppList data={data2} type={MANAGER_TYPES.HISTORY} hasBtn={true} />
        </div>
      </div>
      <div className="segment">
        <Typography className='segment-title'>Đã hoàn thành</Typography>
        <div className='list'>
          <AppList data={data1} type={MANAGER_TYPES.HISTORY} hasBtn={true} />
        </div>
      </div>
    </LichSuStyled>
  )
}

export default LichSu