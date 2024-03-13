import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Papikondalu from '../../assets/Papikondalu.webp'
import gangavaram from '../../assets/gangavaram.jpg'
import maxresdefault from '../../assets/maxresdefault.jpg'
import Godavari from '../../assets/Godavari.jpg'
import Aaraku from '../../assets/Aaraku.webp'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Papikondalu} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={gangavaram} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={maxresdefault} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Godavari} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={Aaraku} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
