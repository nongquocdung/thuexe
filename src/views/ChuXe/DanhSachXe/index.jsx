import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import { mockData } from './DanhSachXe-const'
import { DanhSachXeStyled } from './DanhSachXe-styles'

const DanhSachXe = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Danh sách xe"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])
  /**
   * apis
   */
  const init = () => {
    var path = RoutePaths.ChiTietXe.replace(':id', 123)
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

  /**
   * acts
   */

  /**
   * render
   */
  return (
    <DanhSachXeStyled>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.CAR} hasBtn={true} />
      </div>
    </DanhSachXeStyled>
  )
}

export default DanhSachXe