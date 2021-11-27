import React from 'react';
import Card1 from '../Cards/Card-1';
import Card2 from '../Cards/Card-2';
import Card3 from '../Cards/Card-3';
import Card4 from '../Cards/Card-4';
import Card5 from '../Cards/Card-5';
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'; 

SwiperCore.use(Pagination);

function Slider() {
    return (
        <Swiper slidesPerView={1}
            breakpoints={{
                767: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 4
                }
            }}
        >
            <SwiperSlide>
                <Card1 />
            </SwiperSlide>
            <SwiperSlide>
                <Card2 />
            </SwiperSlide>
            <SwiperSlide>
                <Card3 />
            </SwiperSlide>
            <SwiperSlide>
                <Card4 />
            </SwiperSlide>
            <SwiperSlide>
                <Card5 />
            </SwiperSlide>
        </Swiper >
    )
}

export default Slider;