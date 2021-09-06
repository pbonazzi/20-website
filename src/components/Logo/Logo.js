import React from 'react';
import { StyledLogo } from './Logo.styled';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
        <StyledLogo
            alt={''}
            src={'https://raw.githubusercontent.com/pbonazzi/PERSONAL-SLB/main/src/assets/logo.jpg'}>
        </StyledLogo>
        </Link>
    )
}
export default Logo;
