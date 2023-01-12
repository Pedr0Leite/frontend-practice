import styled from 'styled-components';

interface LeftSideMainDivProps {
    showSearch: boolean;
  }

export const LeftSideMainDiv = styled.div<LeftSideMainDivProps>`
background: #1E213A;
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.showSearch === false ? 'space-around' : 'flex-start'};

@media (max-width: 900px) {
    width: 100vw;
}
`