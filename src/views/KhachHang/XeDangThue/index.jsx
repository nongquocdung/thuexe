import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MANAGER_TYPES } from '../../../common/utils/const'
import { AppButton } from '../../../components'
import AppList from '../../../components/AppList'
import { layoutActions } from '../../../store/actions/layout-act'
import { mockData } from './XeDangThue-const'
import { XeDangThueStyled } from './XeDangThue-styles'
import { useNavigate } from "react-router-dom";
import { RoutePaths } from '../../../routes/protected-routes'

const XeDangThue = () => {
  const dispatch = useDispatch()
  const [data, SetData] = useState()
  const navigator = useNavigate()

  useEffect(() => {
    init()
    dispatch(layoutActions.setTitle("Xe Đang Thuê"))
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
    <XeDangThueStyled>
      <div className='anchor-top-left'>
        <AppButton
          color='primary'
          label='Thuê Xe'
          variant="outlined"
          onClick={() => { }} />
      </div>
      <div className='app-list'>
        <AppList data={data || []} type={MANAGER_TYPES.CAR} hasBtn={true} />

      </div>
    </XeDangThueStyled>
  )
}

export default XeDangThue