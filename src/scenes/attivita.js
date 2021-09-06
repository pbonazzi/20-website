import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import React from "react";
import Servizio from "../components/Servizio";
import "./normalize.css";
import { Helmet } from 'react-helmet';

function Attivita() {

    const titolo = [
        `Obbligazioni`,
        `Lavoro`,
        'Patrimonio',
        `Infortunistica`,
        `Persone e famiglie`,
        `Codice della strada`,
        `Successioni`,
        `Tutela dei diritti`
    ];

    const testo = [
        `Redazione di contratti e recupero crediti `,
        `Diritto previdenziale, fallimentare, vertenze sul lavoro`,
        'Locazioni e gestione dei condomini',
        `Responsabilità medica, vertenze assicurative e invalidità civili`,
        `Risoluzione di conflitti, separazione e divorzi`,
        `Incidenti e risarcimento danni`,
        `Donazioni e testamenti`,
        `Diritti dei consumatori`
    ];

    const icone = [
        '../assets/obbligazioni.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/lavor.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/pat.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/info.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/pers.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/car.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/suc.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/tut.jpg',
    ];

    const rows = [];
    for (let i = 0; i < titolo.length; i++) {
        rows.push(<Servizio titolo={titolo[i]} icona={icone[i]} testo={testo[i]} />);
    }

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Servizi</title>
            </Helmet>
            <GlobalStyles />
            <h1> I servizi dello studio. </h1>
            <div className='att_container'>
                {rows}
            </div>
        </ThemeProvider>
    );
}

export default Attivita;
