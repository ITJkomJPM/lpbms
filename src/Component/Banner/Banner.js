import React from "react";
import './Banner.scss'

import pm from './../../img/pm.png';


export const Banner = () => {
    return(
        <>
            <div className='Banner'>
                <img src={pm} className="pm" alt="" />
                {/* <img src={is} className="is" alt="" /> */}

                
            </div>
        </>
    )
}