import React from 'react';
import HeaderTitle from '../Utilitices/HeaderTitle/HeaderTitle';
import Button from '../Utilitices/Button';

const Choose = () => {
    const chooseData = [
        {
            title: 'Luxury facilities',
            description: 'the advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities'
        },
        {
            title: 'affordable price',
            description: 'you can get a workspace of the highest quality at and affordable price and still enjoy the facilities that are oly here.'
        },
        {
            title: 'Many Choices',
            description: 'you can get a workspace of the highest quality at and affordable price and still enjoy the facilities that are oly here.'
        },
    ]
    return (
        <div className='lg:container mx-auto pb-[120px] pt-[120px] px-20'>
            <div className="md:flex items-center justify-between gap-6 space-y-8 md:space-y-0">
                <div className='max-w-[242px] h-auto w-full'>
                    <HeaderTitle title={'Why choosing us'}></HeaderTitle>
                </div>

                <div className='grid md:grid-cols-3 gap-6 items-center'>
                    {
                        chooseData?.map((item, indx) => (
                            <div key={indx} className='space-y-4'>
                                <h3 className='text-2xl text-[#1e1e1e] font-bold capitalize'>{item?.title}</h3>
                                <p className='text-base text-[#e1e1e1e] font-normal'>{item?.description}</p>
                                <Button content={'more info'} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Choose;