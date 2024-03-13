import React from 'react'
import './DestinationsStyles.css'

import hussian_sagar from '../../assets/hussian_sagar.jpg'
import Araku_valley from '../../assets/Araku_valley.jpg'
import vizag_beach from '../../assets/vizag_beach.jpg'
import Vijayawada_Main from '../../assets/Vijayawada_Main.jpg'
import th from '../../assets/th.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Best Inclusive Placess</h1>
                <p>On both the Andhra and Telangana</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={hussian_sagar} alt="/"/>
                    <img src={Araku_valley} alt="/"/>
                    <img src={vizag_beach} alt="/"/>
                    <img src={Vijayawada_Main} alt="/"/>
                    <img src={th} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
