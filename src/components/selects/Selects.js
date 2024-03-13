import React from 'react'
import './SelectsStyles.css'

import Charminar from '../../assets/Charminar (1).jpg'
import thMaredumilli from '../../assets/thMaredumilli.jpg'
import amaravathi from '../../assets/amaravathi.jpg'
import RJD_Bridge from '../../assets/RJD_Bridge.jpg'
import Tirupati from '../../assets/Tirupati.jpg'
import th from '../../assets/th.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Charminar} text='Charminar' />
                <SelectsImg bgImg={thMaredumilli} text='Maredumilli' />
                <SelectsImg bgImg={amaravathi} text='Amaravthi' />
                <SelectsImg bgImg={RJD_Bridge} text='Godavari Bridge' />
                <SelectsImg bgImg={Tirupati} text='Tirumala' />
                <SelectsImg bgImg={th} text='Papikondalu' />
            </div>

        </div>
    )
}

export default Selects
