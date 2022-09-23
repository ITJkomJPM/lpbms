import React from 'react';

import './Header.scss';

import Logo from './../../img/logojkom.png';

export const Header = () => {

    return(
        <>
            <div className='header'>
                <img src={Logo} className="logo" alt="" />
            </div>
        </>
    )
}
