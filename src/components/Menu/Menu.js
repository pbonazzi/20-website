import React from 'react';
import {bool, func} from 'prop-types';
import { StyledMenu} from './Menu.styled';
import {Link} from "react-router-dom";

const Menu = ({ open,setOpen,...props }) => {

    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link to="/professionisti"  onClick={() => setOpen(!open)}>Professionisti</Link>
            <Link to="/contatti"onClick={() => setOpen(!open)}>Contatti</Link>
            <Link to="/servizi"onClick={() => setOpen(!open)}>Servizi</Link>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Menu;
