import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppButton } from '../../../components'
import AppSlideImg from '../../../components/AppSlideImg'
import AppSteps from '../../../components/AppSteps'
import FooterCustom from '../../../components/FooterCustom/FooterCustom'
import { layoutActions } from '../../../store/actions'
import { TangChuStyled } from './TrangChu-styles'

const mock = [
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  },
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  },
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  },
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  },
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  },
  {
    img: 'https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_06_16/thumb_Senna.jpg',
    title: 'Toyota',
    subTitle: [
      'camry'
    ],
    act: 'Đặt ngay',
  }
]

const mock2 = [
  {
    img: '',
    title: 'Bước 1',
    subTitle: [
      'Bước 1'
    ],
  },
  {
    img: '',
    title: 'Bước 2',
    subTitle: [
      'Bước 2'
    ],
  },
  {
    img: '',
    title: 'Bước 3',
    subTitle: [
      'Bước 3'
    ],
  },
  {
    img: '',
    title: 'Bước 4',
    subTitle: [
      'Bước 4'
    ],
  },
  {
    img: '',
    title: 'Bước 5',
    subTitle: [
      'Bước 5'
    ],
  },
  {
    img: '',
    title: 'Bước 6',
    subTitle: [
      'Bước 6'
    ],
  }

]
const TrangChu = () => {
  const dispatch = useDispatch()
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    dispatch(layoutActions.setTitle(""))
    dispatch(layoutActions.hideBreadCrumbs())

    return () => {
      dispatch(layoutActions.setTitle(""))
      dispatch(layoutActions.showBreadCrumbs())
    }
  }, [])
  return (
    <TangChuStyled>
      <div className='segment'>
        <div className='segment-act'>
          <Typography className='segment-title'>
            Các mẫu xe phổ biến
            <span style={{
              height: 3,
              width: 100,
              display: 'block',
              margin: '0px auto',
              backgroundColor: '#333'
            }}></span>
          </Typography>
        </div>

        <AppSlideImg card={mock} isImg={false} />
        <AppButton
          style={{ marginRight: 10 }}
          color='primary'
          label='Xem tất cả'
          variant="text"
          onClick={() => { }} />
      </div>

      <div className='segment'>
        <div className='segment-act'>
          <Typography className='segment-title'>
            Quy trình đặt xe
            <span style={{
              height: 3,
              width: 100,
              display: 'block',
              margin: '0px auto',
              backgroundColor: '#333'
            }}></span>
          </Typography>
        </div>
        <AppSteps steps={mock2} stepIdx={stepIdx} setStepIdx={setStepIdx} />
        <AppSlideImg card={mock2} isImg={false} pagination={false} slidesPerView={1} useBreakpoints={false} callBack={setStepIdx} />
      </div>
      <FooterCustom />
    </TangChuStyled>
  )
}

export default TrangChu