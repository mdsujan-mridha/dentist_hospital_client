import React, { useState } from 'react';
import appointmentBannerImg from "../.../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({selected,setSelected}) => {
    
    
        return (
            <section>
                <div class="hero min-h-screen bg-slate-50">
                    <div class="hero-content flex-col lg:flex-row-reverse gap-12">
                        <img className='w-2/4' src={appointmentBannerImg} alt="" />
                        <div className='drop-shadow-4xl bg-white border rounded'>
                            <DayPicker
                             mode="single"
                             selected={selected}
                             onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default AppointmentBanner;