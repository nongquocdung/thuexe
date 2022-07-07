import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../store/actions'
import { ThongBaoStyled } from './ThongBao-styles'

const ThongBao = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layoutActions.setTitle("Thông báo"))
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
        <ThongBaoStyled>
            <div className="item">
                <Typography style={{ textDecoration: 'underline' }}>Đơn #175 đã được cọc thành công</Typography>
                <Typography>13:14 15/12/2022</Typography>
            </div>
            <div className="item">
                <Typography style={{ textDecoration: 'underline' }}>Đơn #175 đã được cọc thành công</Typography>
                <Typography>13:14 15/12/2022</Typography>
            </div>
            <div className="item">
                <Typography style={{ textDecoration: 'underline' }}>Đơn #175 đã được cọc thành công</Typography>
                <Typography>13:14 15/12/2022</Typography>
            </div>
            <div className="item">
                <Typography style={{ textDecoration: 'underline' }}>Đơn #175 đã được cọc thành công</Typography>
                <Typography>13:14 15/12/2022</Typography>
            </div>
        </ThongBaoStyled>
    )
}

export default ThongBao