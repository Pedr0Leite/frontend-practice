import styled from 'styled-components';

interface CrewImgProps {
  src: string,
  alt: string
}

export const CrewImgDiv = styled.div`
  grid-column: 2;
  grid-row: span 6;
`

export const CrewImg = styled.image.attrs(({src, alt,...props} : CrewImgProps) => ({
  src: src,
  alt: alt
}))`
max-width: -moz-fit-content;
max-height: -moz-fit-content;
max-width: fit-content;
max-height: fit-content;
margin-left: 125px;
`