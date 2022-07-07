import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import { mockData } from './DanhSachTaiXe-const'
import { DanhSachTaiXeStyled } from './DanhSachTaiXe-styles'

const DanhSachTaiXe = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Danh sách tài xế"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])
  /**
   * apis
   */
  const init = () => {
    var path = RoutePaths.ChiTietTaiXe.replace(':id', 123)
    const _data = mockData.map(i => {
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
    SetData(_data)
  }
  return (
    <DanhSachTaiXeStyled>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.DRIVER} hasBtn={true} />
      </div>
    </DanhSachTaiXeStyled>
  )
}

export default DanhSachTaiXe