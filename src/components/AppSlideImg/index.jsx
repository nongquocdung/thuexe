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
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { AppButton } from '../AppButton';

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const AppSlideImg = ({
    isImg = true,
    img = [],
    card = [],
    autoplay = { delay: 5000 },
    slidesPerView = 3,
    spaceBetween = 10,
    virtual = true,
    navigation = true,
    pagination = true,
    height = 320,
    useBreakpoints = true,
    callBack = () => { } }) => {

    const listImg = useMemo(() => {
        if (isImg) {
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
        } else {
            return card.map((_data, i) => (
                <SwiperSlide key={`slide-${i}`}>
                    <Card>
                        <CardMedia
                            component="img"
                            height={height}
                            image={_data.img}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {_data.title}
                            </Typography>

                            {_data.subTitle.map((i, idx) =>
                                <Typography key={idx} variant="body2" color="text.secondary">
                                    {i}
                                </Typography>
                            )}
                        </CardContent>

                        {_data.act &&
                            <CardActions
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    paddingBottom: 20
                                }}
                            >
                                <AppButton
                                    variant="outlined"
                                    color='primary'
                                    size="small"
                                    onClick={callBack}
                                    label={_data.act}
                                />
                            </CardActions>
                        }
                    </Card>
                </SwiperSlide >
            ))
        }

    }, [img])
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
                breakpoints={useBreakpoints && {
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
                onSlideChange={(swiper) => callBack(swiper.activeIndex)}
            >
                {listImg}
            </Swiper>
        </AppSlideImgStyled>
    )
}

export default AppSlideImg