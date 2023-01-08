import styled from 'styled-components';

export const LeftSideFilters = styled.div`
width: 35%;
  height: 300px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

`

export const Checkbox = styled.div`

& label {
    padding-left: 10px;
}
`

export const CountryInput = styled.input`
padding: 10px 35px;
  width: 30vw;

`

interface CountryInputLabelProps {
    svg: string;
  }

export const CountryInputLabel = styled.label<CountryInputLabelProps>`
position: relative;

&::before{
    content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url(${props => props.svg});
}
`


export const CountryRadioButtonForm = styled.form`
& label {
    padding-left: 10px;
}
`
