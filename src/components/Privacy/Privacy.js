import React from 'react';
import { StyledPrivacy } from './Privacy.styled';
import {Link} from "react-router-dom";

/* TODO : Document type input text */

const Privacy = () => {

    return (
        <Link to="/privacy">
            <div> Normativa sulla privacy </div>
        </Link>
    )
};

export default Privacy;
