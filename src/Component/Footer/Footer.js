import React from 'react';

import './Footer.scss';
import politic from './../../img/politician.png';
import economic from './../../img/economic.png';
import social from './../../img/network.png';
import achieve from './../../img/trophy.png';
import network from './../../img/global-network.png';


// import doc from './../../doc/POLITIK';

export const Footer = () => {

    return(
        <>
            <div className='footer'>
                
                <p>© Jabatan Komunikasi Komuniti </p>
                <figure class="circle">
                    <div class="mask-b" >
                        <span class="ok-btn">
                            <a href="http://online.dccomm.gov.my/InspirasiSetahunKM/politik/" target='_blank'><img src={politic} className="pol" alt="" /></a>
                            
                        </span>
                        
                        {/* <div class="cursor"></div> */}
                    </div>
                    <div class="polText">POLITIK</div>

                    <div class="mask-c">
                        <span class="ok-btn2">
                            <a href="http://online.dccomm.gov.my/InspirasiSetahunKM/ekonomi/" target='_blank'><img src={economic} className="eco" alt="" /></a>
                        </span>
                        
                        {/* <div class="cursor2"></div> */}
                    </div>
                    <div class="ecoText">EKONOMI</div>

                    <div class="mask-d">
                        <span class="ok-btn3">
                            <a href="http://online.dccomm.gov.my/InspirasiSetahunKM/sosial/" target='_blank'><img src={social} className="soc" alt="" /></a>
                        </span>
                        
                        {/* <div class="cursor3"></div> */}
                    </div>
                    <div class="socText">SOSIAL</div>

                    <div class="mask-e">
                        <span class="ok-btn4">
                            <a href="http://online.dccomm.gov.my/InspirasiSetahunKM/pencapaian/" target='_blank'><img src={achieve} className="ach" alt="" /></a>
                        </span>
                        
                        {/* <div class="cursor4"></div> */}
                    </div>
                    <div class="achText">PENCAPAIAN</div>

                    <div class="mask-f">
                        <span class="ok-btn5">
                            <a href="http://online.dccomm.gov.my/InspirasiSetahunKM/hubunganAntarabangsa/" target='_blank'><img src={network} className="net" alt="" /></a>
                        </span>
                        
                        {/* <div class="cursor5"></div> */}
                    </div>
                    <div class="netText">PERHUBUNGAN ANTARABANGSA</div>

                </figure>
            </div>
        </>
    )
}
