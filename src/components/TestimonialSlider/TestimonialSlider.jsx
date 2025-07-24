import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight, FaRegStar } from "react-icons/fa";
const TestimonialSlider = ({content}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const breakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
    return (
        <div className='relative w-full py-10'>
                    {/* Custom Navigation buttons  */}
                    <div className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2">
                        <button ref={prevRef} className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer'><FaArrowLeft size={'1.5rem'} color='#1e1e1e' /></button>
                    </div>
        
        
                    <div className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2">
                        <button ref={nextRef} className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer'><FaArrowRight size={'1.5rem'} color='#1e1e1e' /></button>
                    </div>
        
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
        
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
        
                        breakpoints={breakpoints}
                    >
                        {
                            content?.map((item, indx) => (
                                <SwiperSlide key={indx} className='rounded-2xl bg-white shadow-lg'>
                                    <div className='w-full h-full relative'>
                                        <img className='object-cover w-full h-full' src={item?.image} alt="" />

                                        <div className="absolute right-10 left-10 bottom-8 bg-white rounded-2xl p-6 flex items-center justify-center flex-col">
                                            <div className='w-[65px] has-[65px] rounded-full bg-white p-2 shadow-lg -mt-16'>
                                                <img src={item?.avatar} alt="" />
                                            </div>
                                            <span className='text-xl text-[#1e1e1e] font-bold capitalize mt-4 mb-5'>{item?.name}</span>
                                            <p className='text-base text-[#1e1e1e] mb-6'>{item?.review}</p>
                                            <div className='flex items-center gap-1'>
                                                {
                                                    item?.rating && (
                                                        [...Array(Math.ceil(item?.rating))].map((_, i) => (
                                                            <FaRegStar key={i} size={'1.5rem'} color='#e58411' />   )
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
        
                        }
                    </Swiper>
                </div>
    );
};

export default TestimonialSlider;