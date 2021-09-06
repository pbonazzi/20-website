import styled from 'styled-components';

export const StyledLink = styled.nav`
    margin-right: 3rem;
`

export const StyledBarra = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  right: 0;
  position: absolute;
  top: 2%;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  margin-top: 60px;
  
    @media (max-width: ${({ theme }) => theme.tablet_max}) {
      display: none;
    }
    
       a {
    font-size: 1rem;
    padding: 2rem 0;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s linear;
    }
     
    &:hover {
      color: ${({ theme }) => theme.hover};
    }
    
`;
