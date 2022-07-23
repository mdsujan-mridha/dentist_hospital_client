import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swipperStyle.css";
import heroImg1 from "../assets/images/chair.png";
import heroImg2 from "../assets/images/bg-2.jpg";
import heroImg3 from "../assets/images/bg-3.jpg";
import heroImg4 from "../assets/images/bg-4.jpg";

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <>
                        <div class="hero min-h-screen" style={{ backgroundImage: `url(${heroImg1})` }}>
                            <div class="hero-overlay bg-opacity-30"></div>
                            <div class="hero-content text-center text-neutral-content">
                                <div class="max-w-md">
                                    <h1 class="mb-5 text-4xl font-bold">Your New Smile Starts Here</h1>
                                    <p class="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide> <>
                    <div class="hero min-h-screen" style={{ backgroundImage: `url(${heroImg2})` }}>
                        <div class="hero-overlay bg-opacity-50"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-4xl font-bold">Your New Smile Starts Here</h1>
                                <p class="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </> </SwiperSlide>
                <SwiperSlide>
                    <>
                        <div class="hero min-h-screen" style={{ backgroundImage: `url(${heroImg3})` }}>
                            <div class="hero-overlay bg-opacity-60"></div>
                            <div class="hero-content text-center text-neutral-content">
                                <div class="max-w-md">
                                    <h1 class="mb-5 text-4xl font-bold">Your New Smile Starts Here</h1>
                                    <p class="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>
                        <div class="hero min-h-screen" style={{ backgroundImage: `url(${heroImg4})` }}>
                            <div class="hero-overlay bg-opacity-60"></div>
                            <div class="hero-content text-center text-neutral-content">
                                <div class="max-w-md">
                                    <h1 class="mb-5 text-4xl font-bold">Your New Smile Starts Here</h1>
                                    <p class="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;