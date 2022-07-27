import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MANAGER_TYPES } from '../../../common/utils/const'
import { AppButton } from '../../../components'
import AppList from '../../../components/AppList'
import { RoutePaths } from '../../../routes/protected-routes'
import { layoutActions } from '../../../store/actions'
import ThemXeDialog from './component/ThemXeDialog'
import { mockData } from './DanhSachXe-const'
import { DanhSachXeStyled } from './DanhSachXe-styles'

const DanhSachXe = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()
  const [themXeDialog, setthemXeDialog] = useState({});
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
  const handelThemXe_onClick = () => {
    setthemXeDialog({
      open: true
    })
  }
  /**
   * render
   */
  return (
    <DanhSachXeStyled>
      <div className="top-right-act">
        <AppButton
          color='primary'
          label='Thêm xe'
          variant="outlined"
          onClick={handelThemXe_onClick} />
      </div>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.CAR} hasBtn={true} />
      </div>
      <ThemXeDialog dialog={themXeDialog} setDialog={setthemXeDialog} callback={() => { }} />
    </DanhSachXeStyled>
  )
}

export default DanhSachXe