import styled from 'styled-components';

interface AppDivProp {
    bgImg: string;
}

export const AppDiv = styled.div<AppDivProp>`
background-image: url('${(props => props.bgImg)}');
background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`