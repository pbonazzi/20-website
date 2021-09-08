import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import "../scenes/normalize.css";

function NotFound() {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="home_container">
                <h1 className="title">
                    Questa pagina non esiste.
                </h1>
                <div className="home_text">
                    Per continuare la navigazione clicca in una voce del menu oppure sul logo.
                </div>
            </div>
        </ThemeProvider>

    );
}

export default NotFound;
