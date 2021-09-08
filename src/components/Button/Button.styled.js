import styled from 'styled-components';

export const StyledPrivacy = styled.div`
  background: ${({theme}) => theme.button};
  border: 1px solid ${({theme}) => theme.line1};
  border-radius: 4px;
  padding: 10px 20px;
  text-align: center;

  a {
    color: ${({theme}) => theme.background};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: ${({theme}) => theme.pc_min}) {
    padding-left: 10px;
    padding-right: 10px;

    a {
      font-size: 8px;
    }


  }
`;
