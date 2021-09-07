import {Link} from "react-router-dom";
import React from "react";
import {StyledBarra, StyledLink} from "./Barra.styled";

function Barra() {

    return (
            <StyledBarra>
                <StyledLink ><Link to="/professionisti" > Professionisti</Link></StyledLink>
                <StyledLink><Link to="/contatti">Contatti</Link></StyledLink>
                <StyledLink><Link to="/servizi">Servizi</Link></StyledLink>
            </StyledBarra>
    );
}

export default Barra;
