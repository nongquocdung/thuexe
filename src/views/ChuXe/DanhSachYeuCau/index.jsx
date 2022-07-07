import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import { mockData } from './DanhSachYeuCau-const'
import { DanhSachYeuCauStyled } from './DanhSachYeuCau-styles'

const DanhSachYeuCau = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Danh sách yêu cầu"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])
  const init = () => {
    var path = RoutePaths.ChiTietYeuCau.replace(':id', 123)
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
    <DanhSachYeuCauStyled>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.REQUIREMENT} hasBtn={true} />
      </div>
    </DanhSachYeuCauStyled>
  )
}

export default DanhSachYeuCau