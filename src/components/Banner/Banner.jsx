import React from 'react';
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='banner_section flex items-center justify-center pt-40 pb-40'>
            <div className="banner_container">
                <div className="banner_content flex items-center flex-col justify-center">
                    <h1 className='max-w-[861px] w-full text-7xl text-white font-bold capitalize leading-22 mb-4 text-center'>Make your interior more minimalistic & Modern</h1>
                    <p className='max-w-[606px] w-full text-2xl text-white font-normal mb-6 text-center'>Turn your room with panto into a lot more minimalistic and modern with ease and speed</p>
                    <form className='form_wrapper '>
                        <input type="text" placeholder='Search furniture' />
                        <button><CiSearch size='1.5rem' color='white' /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;