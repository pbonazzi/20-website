import styled from 'styled-components';

export const StyledProfessionista = styled.div`
    
    background: ${({ theme }) => theme.background};
    font-family: "Montserrat", sans-serif;
  
    @media (min-width: ${({ theme }) => theme.pc_min}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 9fr;
    grid-template-areas:
    "tit img"
    "testo img";
    
    h2 {
    position: relative;
    grid-area: tit;
    font-weight: normal;
    margin-left: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.line1};
    }
    
    div {
    position: relative;
    grid-area: testo;
    line-height: 35px; 
    margin-left: 20px;
    padding: 10px;
    }
    
    img {
    margin-top: 20px;
    position: relative;
    grid-area: img;
    width: 30rem;
    }
    
    }
    
    @media (max-width: ${({ theme }) => theme.pc_min}) {
    flex-direction: row;
    
    h2 {
    position: relative;
    font-weight: normal;
    margin-left: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.line1};
    }
    
    div {
    position: relative;
    line-height: 35px; 
    margin-left: 20px;
    padding: 10px;
    }
    
    img {
    margin-top: 5px;
    margin-left: 20px;
    position: relative;
    width: 75%;
    padding: 10px;
    }
    
    }
   

`;
