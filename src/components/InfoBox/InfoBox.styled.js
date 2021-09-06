import styled from 'styled-components';

export const StyledInfoBox = styled.button`
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.line1};
    line-height: 35px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    
    
    @media (min-width: ${({ theme }) => theme.pc_min}) {
      width: 33.33%;
    }
    
    @media (max-width: ${({ theme }) => theme.tablet_max}) {
      width: 100%;
    }
    
    
    h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    }
    
    img {
    margin-top: 45px;
    height: 5rem;
    width: 5rem;
    }
    
    a {
    color: black;
    }


`
