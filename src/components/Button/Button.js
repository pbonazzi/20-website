import React from 'react';
import { StyledPrivacy } from './Button.styled';
import {Link} from "react-router-dom";

const Button = ({text, page}) => {

    return (
        <StyledPrivacy>
        <Link to={page}>
            <div> {text}  </div>
        </Link>
        </StyledPrivacy>
    )
};

export default Button;
