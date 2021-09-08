import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import {SlideShow} from './index';
import { title, text } from '../story.json';
import "../scenes/normalize.css";

function HomeC() {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="home_container">
                <h1 className="title">
                    {title}
                </h1>
                <div className="home_text">
                    {text}
                </div>
                <div className="home_slide">
                    <SlideShow/>
                </div>
            </div>
        </ThemeProvider>

    );
}

export default HomeC;
