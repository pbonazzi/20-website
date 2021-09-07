import React from 'react';
import { StyledUfficio } from './Ufficio.styled';

const Ufficio = ({citta, street_comma_num, zip_comma_town, map}) => {

    return (
        <StyledUfficio>
            <h3>{citta}</h3>
            <div id="street_comma_num">{street_comma_num}</div>
            <div id="zip_comma_town">{zip_comma_town}</div>
            <a id="map" href={map}>Indicazioni stradali</a>
        </StyledUfficio>
    )
};

export default Ufficio;
