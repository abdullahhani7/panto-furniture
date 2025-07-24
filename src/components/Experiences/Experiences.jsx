import React from 'react';
import HeaderTitle from '../Utilitices/HeaderTitle/HeaderTitle';
import Button from '../Utilitices/Button';

const Experiences = () => {
    return (
        <div className='lg:container mx-auto  w-full md:py-[300px] py-[200px] bg-white px-20'>

            <div className='md:flex justify-between gap-[200px] space-y-8 md:space-y-0 '>

                <div className="max-w-[630px] w-full h-auto shadow-xl">
                    <img src="/experiences.png" className='object-cover w-full h-auto rounded-l-2xl' alt="experience image" />
                </div>


                <div className="max-w-[565px] w-full h-auto">
                    <HeaderTitle title={'we provide you the best experience'} subtitle={'experience'} />
                    <p className='text-lg text-[#1e1e1e] font-normal mt-4 mb-4'>You don't have to worry about the result because all oth these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

                    <Button content={'more info'} />
                </div>
            </div>


        </div>
    );
};

export default Experiences;