import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-primary h-15 p-3'>
            <div className='mx-10 flex justify-between items-center '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='text-white flex gap-3'>
                    <a href="/shop" className=' hover:text-yellow-400'>shop</a>
                    <a href="/order" className=' hover:text-yellow-400'>order</a>
                    <a href="/invebtory" className=' hover:text-yellow-400'>inventory</a>
                    <a href="login" className=' hover:text-yellow-400'>login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;