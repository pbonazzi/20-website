import React from 'react';
import { StyledProfessionista } from './Professionista.styled';


const Professionista = ({immagine, nome, testo}) => {
    return (
        <StyledProfessionista>
            <h2> {nome}</h2>
            <img src={immagine} alt=""/>
            <div> {testo}</div>
        </StyledProfessionista>
    )
}
export default Professionista;
