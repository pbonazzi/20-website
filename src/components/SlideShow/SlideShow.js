import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

const images = [
    'https://raw.githubusercontent.com/pbonazzi/PERSONAL-SLB/main/src/assets/pa.jpg',
    'https://raw.githubusercontent.com/pbonazzi/PERSONAL-SLB/main/src/assets/nonno.jpeg'
];

const Slideshow = () => {

    const prop = {
        indicators: true,
        scale: 0.4,
        indicators: i => (<div className="indicator">{i + 1}</div>),
        prevArrow: <div style={{width:0}}></div>,
        nextArrow: <div style={{width:0}}></div>,
    };

    return (
        <div className="slide-container">
            <Slide {...prop}>
                { images.map((each, index) => <img key={index} style={{width: "100%", height: 500}} src={each} />) }
            </Slide>
        </div>
    )
};

export default Slideshow;
