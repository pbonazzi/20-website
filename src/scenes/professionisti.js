import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import React from "react";
import "./normalize.css";
import Professionista from "../components/Professionista";
import {Helmet} from "react-helmet";

function Professionisti() {

    const nome = [
        `Avv. Livio Bonazzi`,
        `Avv. Alessandra Arbezzano`,
    ];

    const testo = [
        `L’Avv. Livio Bonazzi è nato a Torino il 14/04/1966.
Il 23/07/1990 ha conseguito la laurea in Giurisprudenza presso l’Università di Torino con la votazione 105/110 in Diritto dell’informatica.
Dopo il praticantato obbligatorio, ha sostenuto l’esame di abilitazione alla professione presso la Corte d’Appello di Torino e dal 13/09/1993 si è iscritto all’Albo degli Avvocati di Torino.
Dal 1993 al 1998 ha maturato una esperienza quinquennale come Vice Pretore Onorario, poi come Giudice Onorario aggregato alla 1ª sezione del Tribunale di Torino e quale curatore di eredità giacenti.
Nel 1999 ha conseguito un Master in “Arbitrato Nazionale e Internazionale” presso la Scuola di Amministrazione Aziendale e successivamente ha svolto la funzione di Arbitro e di presidente di collegi arbitrali.
Dal 27/03/2009 è iscritto all’Albo dei Cassazionisti.
Si occupa principalmente di questioni nell’ambito del diritto civile, sia giudiziale che stragiudiziali, e concentra la propria attività nei settori del diritto previdenziale e del diritto del lavoro, del diritto locatizio e condominiale, del diritto risarcitorio e del diritto di famiglia.`,
        `L’Avv. Alessandra Arbezzano è nata a Torino il 20 agosto 1990.
Nel giugno del 2014 ha conseguito la laurea in Giurisprudenza presso l’Università degli Studi di Torino.
È iscritta all’Albo degli Avvocati di Torino dal 2017.
È stata insignita dal Consiglio dell’Ordine degli Avvocati di Torino della onorificenza denominata ” Toga d’oro” , assegnata annualmente ai soli quattro avvocati che hanno ottenuto la migliore votazione.
Ha svolto la pratica forense presso lo Studio Legale Bonazzi, con il quale ha continuato a collaborare anche dopo il conseguimento del titolo di avvocato.
In ambito professionale, ha maturato esperienza nei settori di diritto civile e di previdenza sociale, svolgendo attività di assistenza giudiziale e stragiudiziale.`,
    ];

    const immagine = [
        'https://raw.githubusercontent.com/pbonazzi/slb/main/papa.jpg',
        'https://raw.githubusercontent.com/pbonazzi/slb/main/ale.jpg',
    ];

    const rows = [];
    for (let i = 0; i < nome.length; i++) {
        rows.push(<Professionista nome={nome[i]} immagine={immagine[i]} testo={testo[i]} />);
    }
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Bonazzi | Professionisti</title>
            </Helmet>
            <GlobalStyles />
            <div className='prof_container'>
                {rows}
            </div>
        </ThemeProvider>
    );
}

export default Professionisti;
