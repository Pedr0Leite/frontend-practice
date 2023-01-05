import styled from 'styled-components';

interface DivProps {
    
  }


export const CardTitleAndLogo = styled.div`
/* background-color: brown; */
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
width: 430px;
`;

export const CardTitle = styled.h1`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bolder;
  font-size: 34px;
  line-height: 54px;

  text-transform: uppercase;
  transform: translateY(15px);

  color: #F2F2F2;`;