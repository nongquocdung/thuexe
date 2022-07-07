import { ButtonGroup } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppButton } from '../../../components/AppButton'
import { layoutActions } from '../../../store/actions'
import { ThanhToanStyled } from './ThanhToan-styleds'

const ThanhToan = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layoutActions.setTitle("Phương thức thanh toán"))
        return () => {
            dispatch(layoutActions.setTitle(""))
        }
    }, [])
    return (
        <ThanhToanStyled>
            <ButtonGroup
                style={{
                    width: '100%'
                }}
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                <AppButton
                    // style={{
                    //     width: '100%',
                    //     flexDirection: 'row',
                    //     justifyContent: 'flex-start'
                    // }}
                    color='primary'
                    label='Ví điện tử Momo'
                    variant="outlined"
                />
                <AppButton
                    // style={{
                    //     width: '100%',
                    //     flexDirection: 'row',
                    //     justifyContent: 'flex-start'
                    // }}
                    color='primary'
                    label='Ví điện tử ZaloPay'
                    variant="outlined"
                />
                <AppButton
                    // style={{
                    //     width: '100%',
                    //     flexDirection: 'row',
                    //     justifyContent: 'flex-start'
                    // }}
                    color='primary'
                    label='Thẻ tín dụng/ ghi nợ'
                    variant="outlined"
                />
            </ButtonGroup>

        </ThanhToanStyled>
    )
}

export default ThanhToan