import React from 'react'
import { useMemo } from 'react'
import { AppSlideImgStyled } from './AppSlideImg-styles'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const AppSlideImg = ({
    img = [],
    autoplay = { delay: 5000 },
    slidesPerView = 3,
    spaceBetween = 10,
    virtual = true,
    navigation = true,
    pagination = true,
    height = 320 }) => {

    const listImg = useMemo(() => {
        return img.map((_data, i) => (
            <SwiperSlide key={`slide-${i}`}>
                <div style={{
                    overflow: 'hidden',
                    backgroundImage: `url(${_data})`,
                    height: height,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    {/* <img src={_data} alt={i} className='img' /> */}
                </div>
            </SwiperSlide >
        ))
    })
    return (
        <AppSlideImgStyled>
            <Swiper
                id="swiper"
                virtual={virtual}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                autoplay={autoplay}
                navigation={navigation}
                pagination={pagination}
                breakpoints={{
                    // when window width is >= 300px
                   300: {
                     slidesPerView: 1,
                   },
                   640: {
                     slidesPerView: 2,
                   },
                   800: {
                     slidesPerView: 3,
                   },
                 }}
            >
                {listImg}
            </Swiper>
        </AppSlideImgStyled>
    )
}

export default AppSlideImg