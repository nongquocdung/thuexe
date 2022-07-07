import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../store/actions'
import { ChiTietGiaoDichStyled } from './ChiTietGiaoDich-styles'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AppButton, AppForm, AppTable } from '../../../components';
import { mockData_DanhSachTaiXe, mockData_DanhSachXe, Payment_table, ThongTinThem_Form } from './ChiTietGiaoDich-const';
import AppList from '../../../components/AppList';
import { MANAGER_TYPES } from '../../../common/utils/const';
import { RoutePaths } from '../../../routes/protected-routes';
import { useForm } from 'react-hook-form';

const ChiTietGiaoDich = () => {
    const { reset, setError, clearErrors, getValues, setValue, control, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const { id } = useParams()
    const { state } = useLocation()
    const [listCar, setListCar] = useState([])
    const [listDriver, setListDriver] = useState([])
    const [rows, setRows] = useState();
    const [total, setTotal] = useState();
    const [page, setPage] = useState();
    const [pageSize, setPageSize] = useState();
    const navigator = useNavigate()
    const [loading, setLoading] = useState();


    useEffect(() => {
        init()
        dispatch(layoutActions.setTitle("Giao dịch #" + id))
        return () => {
            dispatch(layoutActions.setTitle(""))
        }
    }, [])

    const init = () => {
        var path = RoutePaths.ChiTietXe.replace(':id', 123)
        const _listCar = mockData_DanhSachXe.map(i => {
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
        setListCar(_listCar)

        var path1 = RoutePaths.ChiTietTaiXe.replace(':id', 123)
        const _listDriver = mockData_DanhSachTaiXe.map(i => {
            return {
                ...i,
                btnData: {
                    label: "Chi Tiết",
                    onClick: () => {
                        navigator(path1)
                    }
                }
            }
        })
        setListDriver(_listDriver)

        setRows([
            {
                time: '14:03 15/2/2022',
                money: '5,600,000VNĐ'
            },
            {
                time: '14:02 15/2/2022',
                money: '5,600,000VNĐ'
            },
            {
                time: '14:02 15/2/2022',
                money: '5,600,000VNĐ'
            },
            {
                time: '14:02 15/2/2022',
                money: '5,600,000VNĐ'
            },
            {
                time: '14:02 15/2/2022',
                money: '5,600,000VNĐ'
            },
            {
                time: '14:02 15/2/2022',
                money: '5,600,000VNĐ'
            }
        ])
    }
    return (
        <ChiTietGiaoDichStyled>
            <div>
                <div className="line inline">
                    <Typography>Nơi thuê xe: Hồ Chí Minh</Typography>
                    <Typography style={{ paddingRight: 10 }}>Trạng thái: Chờ thanh toán</Typography>
                </div>
                <div className="line">
                    <Typography>Thời gian thuê: Từ 6:00 20/2/2022 - 6:00 21/2/2022</Typography>
                </div>
                <div className="line">
                    <Typography>Tổng số xe: 2   Tổng số tài xế: 2</Typography>
                </div>
            </div>
            <div style={{ marginTop: 50 }}>
                <AppForm
                    fields={ThongTinThem_Form}
                    size="small"
                    control={control}
                    errors={errors}
                    getValues={getValues}
                    setValue={setValue}
                />
            </div>
            <div className='list-detail'>
                <div className="segment">
                    <Typography className='segment-title'>Danh sách xe thuê</Typography>
                    <div className='list'>
                        <AppList data={listCar} type={MANAGER_TYPES.CAR} hasBtn={true} />
                    </div>
                </div>
                <div className="segment">
                    <Typography className='segment-title'>Danh sách tài xế</Typography>
                    <div className='list'>
                        <AppList data={listDriver} type={MANAGER_TYPES.DRIVER} hasBtn={true} />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 100 }}>
                <div className="line inline">
                    <Typography>Tổng số tiền: 11,200,000VNĐ</Typography>
                    <Typography style={{ paddingRight: 10 }}>Số tiền cọc: 5,600,000VNĐ</Typography>
                </div>
                <div className="line">
                    <Typography>Đã thu: 0VNĐ</Typography>
                </div>
                <div className="line">
                    <Typography>Còn lại: 11,200,000VNĐ</Typography>
                </div>
                <div className="line inline">
                    <Typography>Hạn thanh toán: 6:00 18/2/2022</Typography>
                    <AppButton
                        style={{ marginRight: 10 }}
                        color='primary'
                        label='Thanh Toán'
                        variant="outlined"
                        onClick={() => { }} />
                </div>
            </div>
            <div className="listPayment">
                <Typography className='listPayment-title'>Lịch sử giao dịch</Typography>

                <AppTable
                    screenName={'list_payment'}
                    head={Payment_table}
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
        </ChiTietGiaoDichStyled>
    )
}

export default ChiTietGiaoDich