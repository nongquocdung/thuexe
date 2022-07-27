import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import { AppButton } from '../../../components'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import ThemTaiXeDialog from './component/ThemTaiXeDialog'
import { mockData } from './DanhSachTaiXe-const'
import { DanhSachTaiXeStyled } from './DanhSachTaiXe-styles'

const DanhSachTaiXe = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()
  const [themTaiXeDialog, setThemTaiXeDialog] = useState({});

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
  /**
   * acts
   */
  const handelThemTaiXe_onClick = () => {
    setThemTaiXeDialog({
      open: true
    })
  }
  /**
   * render
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
      <div className="top-right-act">
        <AppButton
          color='primary'
          label='Thêm tài xế'
          variant="outlined"
          onClick={handelThemTaiXe_onClick} />
      </div>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.DRIVER} hasBtn={true} />
      </div>
      <ThemTaiXeDialog dialog={themTaiXeDialog} setDialog={setThemTaiXeDialog} callback={() => { }} />
    </DanhSachTaiXeStyled>
  )
}

export default DanhSachTaiXe