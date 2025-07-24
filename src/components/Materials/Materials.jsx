import React from 'react';
import HeaderTitle from '../Utilitices/HeaderTitle/HeaderTitle';
import Button from '../Utilitices/Button';

const Materials = () => {
    return (
        <div className='lg:container mx-auto  w-full md:pb-[200px] pb-[150px] px-20'>
            <div className='md:flex items-center justify-between gap-[200px] space-y-8 md:space-y-0 '>


                <div className="max-w-[565px] w-full h-auto">
                    <HeaderTitle title={'very serious materials  for making furniture'} subtitle={'materials'} />
                    <p className='text-lg text-[#1e1e1e] font-normal mt-4 mb-4'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>

                    <Button content={'more info'} />
                </div>

                <div className="flex items-center gap-6">
                    <div className='flex flex-col gap-4'>
                        <img src="/materials_1.png" className='max-w-[250px] min-h-[300px] rounded-xl w-full h-full object-cover' alt="materials 1 " />
                        <img src="/materials_2.png" className='max-w-[250px] min-h-[350px] h-full w-full object-cover' alt="materials 2 " />
                    </div>
                    <div>
                        <img src="/materials_3.png" className='max-w-[620px] w-full min-h-[480px] h-full object-cover rounded-xl' alt="materials 3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materials;