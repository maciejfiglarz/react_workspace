import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper.scss';

import postServices from '../../../services/post';

import Card from './Card';

const Slider = () => {
  
  SwiperCore.use([Autoplay])
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const result = await postServices.fakeFetchAll();
    setItems(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {items.length > 0 && (
        <Swiper autoplay={{ delay: 3000 }}
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item) => (
            <SwiperSlide>
              <Card
                title={item.title}
                content={item.content}
                imageLink={item.imageLink}
                key={item.id}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
