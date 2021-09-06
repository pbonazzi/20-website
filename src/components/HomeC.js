import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import {SlideShow} from './index';
import "../scenes/normalize.css";

function HomeC() {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div class="home_container">
                <div class="home_text">
                    <h1> Una storia lunga settant'anni. </h1>
                    Lo Studio nacque nel lontano <b> 1948</b> allorché Bruno Bonazzi iniziò la sua attività di avvocato civilista.
                    <p>Egli ricoprì per decenni la carica di consigliere presso il Consiglio dell’Ordine degli Avvocati di Torino di cui divenne segretario dal 1977 al 1991 per poi essere eletto nel
                        Consiglio Nazionale Forense e ricoprire in seno allo stesso la carica di Vice Presidente dal
                        1995.</p>
                    <p>Egli trasmise ai figli, Massimo e Livio, l’amore per la professione forense ben
                        sintetizzato nella locuzione:</p>
                    <p>“Essere avvocato, non fare l’avvocato”</p>
                    <p>A distanza di tanti anni l’avv. Livio Bonazzi opera ancora con la medesima dedizione ed
                        attenzione coniugando i principi della tradizione con le odierne esigenze di celerità.</p>
                    <p> Nella deriva di massificazione che ha coinvolto ogni aspetto della vita umana, lo Studio
                        Legale Bonazzi rivendica la sua specificità di <b class="highlight"> “bottega forense” </b>, nella quale le
                        problematiche giuridiche del cliente verranno esaminate con professionalità e onestà.</p>
                </div>

                <div class="home_slide">
                    <SlideShow/>
                </div>
            </div>
        </ThemeProvider>

    );
}

export default HomeC;
