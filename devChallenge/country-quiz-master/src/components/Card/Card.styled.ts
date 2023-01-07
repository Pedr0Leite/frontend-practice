import styled from 'styled-components';

export const CardDiv = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 25px;

  border-radius: 24px;
  width: 464px;
  height: 540px;
  background-color: #FFF;
  box-shadow: 5px 10px;
`

export const CardUl = styled.ul`
width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 10px;

list-style-type: none;
padding: 0;

& li:hover .card-li-first-span {
    color: #FFF;
  }
  
& li:hover .card-li-second-span {
    color: #FFF;
  }

li {
    width: 100%;
    height: 56px;
    /* background: #F9A826; */
    border-radius: 12px;
    /* margin-bottom: 25px; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;
    cursor: pointer;
  }
  
 li span {
    padding: 25px;
  }
`

export const CardButtonDiv = styled.div`
width: 400px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
`

export const CardLiFirstSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  
  color: rgba(96, 102, 208, 0.8);
`

export const CardLiSecondSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: rgba(96, 102, 208, 0.8);
`