import React from "react";
import "../scenes/normalize.css";
import Ufficio from "./Ufficio/Ufficio";
import Privacy from "./Privacy/Privacy";
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/theme";
import {GlobalStyles} from "../styles/global";

function Footer() {

    const citta = [
        'Torino',
        'Pre’ Saint-Didier',
        'Uffici',
    ];

    const strada_num = [
        'Largo Re Umberto 106,',
        'Chemin de Prasouy 7,',
    ];

    const comune_zip = [
        'Torino, 10128',
        'Verrand, Pre’ Saint-Didier 11010',
    ];

    const map = [
        'https://www.google.com/maps/place/Largo+Re+Umberto,+106,+10128+Torino+TO,+Italia/@45.0533424,7.6618554,17z/data=!3m1!4b1!4m5!3m4!1s0x47886d3a44a2a53f:0x2400b2a35c90bb90!8m2!3d45.0533424!4d7.6640441',
        'https://www.google.com/maps/place/Chemin+de+Prasouy,+7,+11010+Verrand+AO,+Italia/@45.7828642,6.9726917,17z/data=!3m1!4b1!4m5!3m4!1s0x4789475cb3ca19cd:0x4df7c38caae187b0!8m2!3d45.7828642!4d6.9748804',
    ];


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />


            <div className='footer'>
                <Ufficio citta={citta[0]} strada_num={strada_num[0]} comune_zip={comune_zip[0]} map={map[0]} />
                <Ufficio citta={citta[1]} strada_num={strada_num[1]} comune_zip={comune_zip[1]} map={map[1]} />
                <div className='links'>
                    <ul>
                    <li> <Privacy> </Privacy></li>
                    <li><a href={'mailto:avv.bonazzi@studiolegalebonazzi.it'}>avv.bonazzi@studiolegalebonazzi.it</a></li>
                    <li><a href={'tel:0115683654'}>0115683654</a></li>
                    </ul>
                </div>
            </div>



        </ThemeProvider>
    );
}

export default Footer;
