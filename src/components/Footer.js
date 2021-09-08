import React from "react";
import "../scenes/normalize.css";
import Ufficio from "./Ufficio/Ufficio";
import Button from "./Button/Button";
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/theme";
import {GlobalStyles} from "../styles/global";
import Logo from "./Logo";
import {ColoredLine} from "./ColoredLine";
import Ufficio2 from "./Ufficio/Ufficio2";

function Footer() {

    const citta = [
        'Sede Principale',
        'Sede Secondaria',
    ];

    const street_comma_num = [
        'Largo Re Umberto, 106',
        'Chemin de Prasouy, 7',
    ];

    const zip_comma_town = [
        '10128. Torino (TO)',
        '11010, Verrand (AO)',
    ];

    const map = [
        'https://www.google.com/maps/place/Largo+Re+Umberto,+106,+10128+Torino+TO,+Italia/@45.0533424,7.6618554,17z/data=!3m1!4b1!4m5!3m4!1s0x47886d3a44a2a53f:0x2400b2a35c90bb90!8m2!3d45.0533424!4d7.6640441',
        'https://www.google.com/maps/place/Chemin+de+Prasouy,+7,+11010+Verrand+AO,+Italia/@45.7828642,6.9726917,17z/data=!3m1!4b1!4m5!3m4!1s0x4789475cb3ca19cd:0x4df7c38caae187b0!8m2!3d45.7828642!4d6.9748804',
    ];


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="highbox">
            <div className='footer'>
                <Ufficio2/>
                <Ufficio citta={citta[0]} street_comma_num={street_comma_num[0]} zip_comma_town={zip_comma_town[0]} map={map[0]} />
                <Ufficio citta={citta[1]} street_comma_num={street_comma_num[1]} zip_comma_town={zip_comma_town[1]} map={map[1]} />
            </div>
            <ColoredLine color={theme.line1}/>
            <div className='end'>
                <Logo/>
                <Button page={"/privacy"} text={"Normativa sulla privacy"}> </Button>
            </div>
        </div>

        </ThemeProvider>
    );
}

export default Footer;
