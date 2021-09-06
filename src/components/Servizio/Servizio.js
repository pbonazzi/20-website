import React from 'react';
import { StyledServizio } from './Servizio.styled';

const Servizio = ({icona, titolo, testo}) => {
    return (
        <StyledServizio>
            <img src={icona} alt=""/>
            <h3> {titolo}</h3>
            <div> {testo}</div>
        </StyledServizio>
    )
}
export default Servizio;
