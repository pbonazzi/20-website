import styled from 'styled-components';

export const StyledServizio = styled.button`
    
    background: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.line1};
    border-width: 0.5px;
    height: 250px;
  pointer-events: none;
    
    @media (min-width: ${({ theme }) => theme.pc_min}) {
      width: 33.33%;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile_max}) {
      width: 100%;
    }
    
    @media (min-width: ${({ theme }) => theme.mobile_max}) and (max-width: ${({ theme }) => theme.tablet_max}){
      width: 50%;
    }
    
    h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    }
    
    div {
    height: 33%;
    font-family: "Montserrat", sans-serif;
    padding-bottom: 15px;
    }
    
    img {
    margin-top: 45px;
    height: 5rem;
    width: 5rem;
    }


`;
