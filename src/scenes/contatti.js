import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import React from "react";
import {Helmet} from "react-helmet";

function Contatti() {

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Bonazzi | Contatti</title>
            </Helmet>
            <GlobalStyles />
            <h1> Contatti. </h1>
            <div className="contatti">
                <ul>
                    <li>Email : <a href={'mailto:avv.bonazzi@studiolegalebonazzi.it'}>avv.bonazzi@studiolegalebonazzi.it</a></li>
                    <li>Telefono : <a href={'tel:0115683654'}>0115683654</a></li>
                    <li>Fax : <a href={'tel:01150511523'}>01150511523</a></li>
                </ul>


            </div>

        </ThemeProvider>
    );
}

export default Contatti;
