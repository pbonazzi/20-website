import styled from 'styled-components';

export const StyledPrivacy = styled.button`
    background: ${({ theme }) => theme.background};
    border: none;
    border-left: 1px solid ${({ theme }) => theme.line1};
    line-height: 35px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    
    @media (min-width: ${({ theme }) => theme.pc_min}) {
      width: 33.33%;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile_max}) {
      width: 100%;
    }
    
    @media (min-width: ${({ theme }) => theme.mobile_max}) and (max-width: ${({ theme }) => theme.tablet_max}){
      width: 50%;
    }
    
    #strada_num{
   
    }
    
    #comune_zip{
    
    }
    
    #map{
    
    }
    
    {
    
    }
    

`;
