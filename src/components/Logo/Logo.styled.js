import styled from 'styled-components';

export const StyledLogo = styled.img`
  position: relative;
  top: 10%;
  left: 1rem;
  @media (min-width: ${({ theme }) => theme.pc_min}) {
    width: 250px;
  }
  @media (max-width: ${({ theme }) => theme.tablet_max}) {
    width: 200px;
    }
  @media (max-width: ${({ theme }) => theme.mobile_max}) {
    width: 175px;
  }



`
