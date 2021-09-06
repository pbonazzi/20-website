import React from 'react';
import { StyledUfficio } from './Ufficio.styled';

const Ufficio = ({citta, strada_num, comune_zip, map}) => {

    return (
        <StyledUfficio>
            <h3>{citta}</h3>
            <div id="strada_num">{strada_num}</div>
            <div id="comune_zip">{comune_zip}</div>
            <a id="map" href={map}>Indicazioni stradali</a>
        </StyledUfficio>
    )
};

export default Ufficio;
