import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

const slideImages = [
    'https://raw.githubusercontent.com/pbonazzi/slb/main/pa.jpg',
    'https://raw.githubusercontent.com/pbonazzi/slb/main/nonno.jpeg'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <img src={slideImages[0]} alt={''}></img>
                </div>
                <div className="each-slide">
                    <img src={slideImages[1]} alt={''}></img>
                </div>
            </Slide>
        </div>
    )
};

export default Slideshow;
