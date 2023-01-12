import styled from 'styled-components';

export const LeftSideFilters = styled.div`
width: 35%;
  height: 300px;
  margin-left: 10px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

`

export const Checkbox = styled.div`

`

export const CountryInputForm = styled.form`
& label {
  padding-left: 10px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
text-transform: uppercase;

color: #B9BDCF;
}
`

export const CountryInput = styled.input`
padding: 10px 35px;
  width: 30vw;

  @media only screen and (max-width: 600px){
    width: 70vw;
  }

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
  background-repeat: no-repeat;
  background-position-y: center;
}
`


export const CountryRadioButtonForm = styled.form`
& label {
    padding-left: 10px;
}

@media only screen and (max-width: 600px) {
  width: 50vw;
}
`
