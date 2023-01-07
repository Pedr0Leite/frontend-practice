import styled from 'styled-components';

interface DivProps {
    
  }


export const CardDivFinish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 35px;
  border-radius: 24px;
  width: 464px;
  height: 540px;
  background-color: #FFF;
  box-shadow: 5px 10px;
`;

export const CardSvgFinish = styled.img`
  width: 250px;
  height: 200px;
  `

export const CardButtonFinish = styled.button`
width: 209px;
height: 62px;

color: #1D355D;

// box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
background-color: white;

color: #1D355D;

margin: 1em;
padding: 0.25em 1em;
border: 2px solid #1D355D;
border-radius: 12px;

  /* Add a box-shadow to the button when it is clicked */
  &:active {
    box-shadow: 0 0 0 0.2rem rgba(0,0,0,0.1);
  }
`
// export const CardTitle = styled.h1`
//   display: inline-block;
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: bolder;
//   font-size: 34px;
//   line-height: 54px;

//   text-transform: uppercase;
//   transform: translateY(15px);

//   color: #F2F2F2;`;