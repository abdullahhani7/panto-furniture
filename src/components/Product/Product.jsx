import React, { useState } from 'react';
import HeaderTitle from '../Utilitices/HeaderTitle/HeaderTitle';
import ProductSlider from '../Sliders/ProductSlider/ProductSlider';

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        category: 'chair'
    });

    const categoriesName = [
        {
            id: 0,
            category: 'chair'
        },
        {
            id: 1,
            category: 'bed'
        },
        {
            id: 2,
            category: 'sofa'
        },
        {
            id: 3,
            category: 'lamp'
        },
    ];


    const products = [
        {
            title: 'Chair',
            image: '/product_1.png',
            description: 'Sakarias armchair',
            price: 392,
            rating: 4.5,
            category: 'chair',
        },
        {
            title: 'Chair',
            image: '/product_2.png',
            description: 'baltsar chair',
            price: 299,
            rating: 5,
            category: 'chair',
        },
        {
            title: 'Chair',
            image: '/product_3.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'chair',
        },
        {
            title: 'Chair',
            image: '/product_4.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'chair',
        },
        {
            title: 'Chair',
            image: '/product_1.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'chair',
        },
        {
            title: 'bed',
            image: '/product_4.png',
            description: 'Sakarias armchair',
            price: 392,
            rating: 4.5,
            category: 'bed',
        },
        {
            title: 'bed',
            image: '/product_3.png',
            description: 'baltsar chair',
            price: 299,
            rating: 5,
            category: 'bed',
        },
        {
            title: 'bed',
            image: '/product_2.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'bed',
        },
        {
            title: 'bed',
            image: '/product_1.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'bed',
        },
        {
            title: 'bed',
            image: '/product_1.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'bed',
        },
        {
            title: 'sofa',
            image: '/product_1.png',
            description: 'Sakarias armchair',
            price: 392,
            rating: 4.5,
            category: 'sofa',
        },
        {
            title: 'sofa',
            image: '/product_2.png',
            description: 'baltsar chair',
            price: 299,
            rating: 5,
            category: 'sofa',
        },
        {
            title: 'sofa',
            image: '/product_3.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'sofa',
        },
        {
            title: 'sofa',
            image: '/product_4.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'sofa',
        },
        {
            title: 'sofa',
            image: '/product_1.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'sofa',
        },
        {
            title: 'lamp',
            image: '/product_4.png',
            description: 'Nyantuy  chair',
            price: 600,
            rating: 3,
            category: 'lamp',
        },
        {
            title: 'lamp',
            image: '/product_3.png',
            description: 'Sakarias armchair',
            price: 392,
            rating: 4.5,
            category: 'lamp',
        },
        {
            title: 'lamp',
            image: '/product_2.png',
            description: 'baltsar chair',
            price: 299,
            rating: 5,
            category: 'lamp',
        },
        {
            title: 'lamp',
            image: '/product_1.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'lamp',
        },
        {
            title: 'lamp',
            image: '/product_4.png',
            description: 'Anjoy  chair',
            price: 500,
            rating: 3.5,
            category: 'lamp',
        },
    ];


    const filteredProducts = products?.filter((item) => item?.category === active?.category);

    return (
        <div className='w-full min-h-[906px] h-full bg-[#f7f7f7] pt-[50px] pb-[120px] px-20'>


            <div className="lg:container mx-auto">
                <div className='flex items-center justify-center w-full mb-8'>
                    <HeaderTitle title={'Best selling product'} />
                </div>

                <div className='flex items-center justify-between max-w-[450px] w-full h-[57px] rounded-4xl bg-[#eeeeee] p-6 mx-auto'>
                    {
                        categoriesName?.map((item, indx) => (
                            <button 
                            key={indx} 

                            onClick={() => setActive({
                                id: item?.id,
                                category: item?.category
                            })}

                            className={`text-xl text-[#1e1e1e] font-medium capitalize cursor-pointer ${active?.id === item?.id ? 'bg-[#e58411] text-white' : 'bg-transparent'} rounded-4xl px-6 py-2 transition-all duration-300`}
                            >{item?.category}</button>
                        ))

                    }
                </div>


                <div>
                    <ProductSlider slideContent={filteredProducts}/>
                </div>


            </div>
        </div>
    );
};

export default Product;