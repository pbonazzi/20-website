import styled from 'styled-components';

export const StyledUfficio = styled.div`
  border: 2px solid ${({theme}) => theme.line1};
  line-height: 35px;
  font-family: "Montserrat", sans-serif;
  align-content: center;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.pc_min}) {
    width: 33.33%;
  }

  @media (max-width: ${({ theme }) => theme.mobile_max}) {
    width: 100%;
  }
  

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
    text-transform: uppercase;
  }

  #zip_comma_town {
    margin-bottom: 20px
  }
  

`;
