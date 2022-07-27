import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppButton, AppForm, AppTable } from '../../../components'
import { layoutActions } from '../../../store/actions'
import { AddCar_Form, AddCar_table, MoreInfo_Form, Note_Form, TotalInfo_Form } from './TaoDonXe-const'
import { TaoDonXeStyled } from './TaoDonXe-styles'
import { useForm } from 'react-hook-form'

const TaoDonXe = () => {
    const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const [rows, setRows] = useState([{
        loai_xe: '4 chỗ(Mini)',
        hang_xe: 'Toyota',
        mau_xe: 'TOYOTA WIGO',
        truyen_dong: 'Số tự động',
        so_luong: '1'
    }]);
    const [total, setTotal] = useState();
    const [page, setPage] = useState();
    const [pageSize, setPageSize] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        dispatch(layoutActions.setTitle(""))
        dispatch(layoutActions.hideBreadCrumbs())

        return () => {
            dispatch(layoutActions.setTitle(""))
            dispatch(layoutActions.showBreadCrumbs())
        }
    }, [])
    return (
        <TaoDonXeStyled>
            <div className="head">
                <Typography className='title'>THÔNG TIN THUÊ XE</Typography>
            </div>
            <div className='form'>
                <div className="total-info form-segment">
                    <Typography className='form-title'>Thông tin cơ bản</Typography>
                    <div className="form-body">
                        <AppForm
                            fields={TotalInfo_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                    </div>
                </div>

                <div className="add-car form-segment">
                    <Typography className='form-title'>Chọn thêm xe</Typography>
                    <div className="form-body">
                        <AppForm
                            fields={AddCar_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                        <div className='form-act'>
                            <AppButton
                                color='primary'
                                label='Thêm'
                                variant="outlined"
                                onClick={() => { }} />
                        </div>
                        <AppTable
                            screenName={'list_car'}
                            head={AddCar_table}
                            rows={rows}
                            total={total}
                            setPage={setPage}
                            pageSize={pageSize}
                            setPageSize={setPageSize}
                            loading={loading}
                            callBack={() => { }}
                            config={{
                                hasNoCol: false,
                                isPagination: false,
                                setHeight: false
                            }}
                        />
                    </div>
                </div>

                <div className="more-info form-segment">
                    <Typography className='form-title'>Các tiêu chí mong muốn</Typography>
                    <div className="form-body">
                        <AppForm
                            fields={MoreInfo_Form}
                            size="small"
                            control={control}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                        />
                    </div>
                </div>

                <div className="add-note form-segment">
                    <Typography className='form-title'>Ghi chú</Typography>
                    <AppForm
                        fields={Note_Form}
                        size="small"
                        control={control}
                        errors={errors}
                        getValues={getValues}
                        setValue={setValue}
                    />
                </div>

                <div className="add-note form-segment">
                    <div className="submit">
                        <AppButton
                            color='primary'
                            label='ĐẶT ĐƠN'
                            variant="outlined"
                            onClick={() => { }} />
                    </div>
                </div>
            </div>

        </TaoDonXeStyled>
    )
}

export default TaoDonXe