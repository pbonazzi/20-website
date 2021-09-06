import styled from 'styled-components';

export const StyledUfficio = styled.button`
    background: ${({ theme }) => theme.line1};
    border: none;
    line-height: 35px;
    padding-left: 20px;
    padding-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    text-align: left;
    width: 50%;
    height: 230px;
    
    h3 {
    margin-bottom: 15px;
    font-size: 18px;
    }
    
    #comune_zip {
    height: 30%;
    
    }

`;
