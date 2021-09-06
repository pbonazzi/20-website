import React from 'react';
import { StyledInfoBox } from './InfoBox.styled';

const InfoBox = ({tipo, icona, num}) => {
    return (

        <StyledInfoBox>
            <a href={num}>
                <h4> {tipo}</h4>
                <img src={icona} alt="" />
            </a>
        </StyledInfoBox>
)

}
export default InfoBox;

