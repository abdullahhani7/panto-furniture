import React from 'react';
import { NavLink } from 'react-router';

const MobileNav = () => {
    return (
        <nav className='flex flex-col items-center space-y-6'>
            <NavLink to='/' className='text-lg text-[#e58411] bg-black py-2 px-4 rounded-2xl flex items-center justify-center font-medium capitalize'>Furniture</NavLink>
            <NavLink to='/' className='text-lg text-[#e58411] bg-black py-2 px-4 rounded-2xl flex items-center justify-center font-medium capitalize'>Shop</NavLink>
            <NavLink to='/' className='text-lg text-[#e58411] bg-black py-2 px-4 rounded-2xl flex items-center justify-center font-medium capitalize'>About Us</NavLink>
            <NavLink to='/' className='text-lg text-[#e58411] bg-black py-2 px-4 rounded-2xl flex items-center justify-center font-medium capitalize'>Contact</NavLink>
        </nav>
    );
};

export default MobileNav;