import React from 'react';
import Banner from '../../components/Banner/Banner';
import Choose from '../../Components/Choose/Choose';
import Product from '../../Components/Product/Product';
import Experiences from '../../Components/Experiences/Experiences';
import Materials from '../../Components/Materials/Materials';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>

            {/* Banner || Hero Section */}
            <div>
                <Banner/>
            </div>



            {/* Choose Section */}
            <div className='px-4'>
                <Choose/>
            </div>

            {/* Best Selling Product */}
            <div className='px-4'>
                <Product/>
            </div>



            {/* Experience Section */}
            <div className='px-4'>
                <Experiences/>
            </div>



            {/* Materials Section */}
            <div className='px-4'>
                <Materials/>
            </div>




            {/* Testimonial Section */}
            <div className='px-4'>
                <Testimonial/>
            </div>



        </div>
    );
};

export default Home;