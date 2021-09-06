import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu} from './Menu.styled';
import {Link} from "react-router-dom";

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link to="/professionisti">Professionisti</Link>
            <Link to="/contatti">Contatti</Link>
            <Link to="/attivita">Attivita</Link>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;
