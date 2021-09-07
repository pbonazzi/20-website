import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import React from "react";
import {Helmet} from "react-helmet";

function Contatti() {

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Contatti</title>
            </Helmet>
            <GlobalStyles />
            <div>
            </div>

        </ThemeProvider>
    );
}

export default Contatti;
