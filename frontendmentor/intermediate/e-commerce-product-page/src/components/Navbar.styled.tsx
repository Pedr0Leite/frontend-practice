import styled from 'styled-components';
//import avatarLogo from '../assets/';

export const navBar = styled.nav`
  width: 100vw;
  border-bottom: 2px solid #f8f9fd;
  height: 8vh;
  display: flex;
  justify-content: space-between;


  @media only screen and (max-width: 720px) {
    &{
      justify-content: flex-start;
    }
  }
  `;

export const navBarUL = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
cursor: pointer;
color: black;
display: flex;
justify-content: flex-start;
margin: 0 100px 0 100px;
gap: 50px;

@media only screen and (max-width: 1080px) {
  &{
    margin: 0 100px 0 10px;
    gap: 25px;
  }
}

@media only screen and (max-width: 800px) {
  &{
    margin: 0 100px 0 10px;
    gap: 5px;
  }
}


`;

export const navBarLI = styled.li`
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  column-gap: 20px;

  &:hover {
    border-bottom: 3px solid orange;
  }

 &:first-child {
  padding: 0;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 39px;
  letter-spacing: 0.04em;
  color: #000000;
  }

 &:nth-child(7), &:nth-child(8){
    float:right;
  }


@media only screen and (max-width: 720px) {
  &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6){
    display: none;
  }
}

`;

export const navBarUserLogo = styled.div`
border: 1px solid #FF7D1A;
width: 40px;
height: 40px;
background: url(image-avatar.png);
border: 1px solid #FF7D1A;
border-radius: 117px;
flex: none;
order: 1;
flex-grow: 0;
`;
