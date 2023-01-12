import { HTMLAttributes, useState, useReducer, useEffect } from 'react';

import * as Styled from './LocationFilter.styled';

const ACTIONS = {
  UK: 'United Kingdom',
  DE: 'Germany',
  USA: 'United States',
  MEX: 'Mexico'
}

function reducer(specificLocation:any, action:any) {
  switch (action.type) {
    case ACTIONS.UK:
      specificLocation = ACTIONS.UK;
      break;
    case ACTIONS.DE:
      specificLocation = ACTIONS.DE;
      break;
    case ACTIONS.USA:
      specificLocation = ACTIONS.USA;
      break;
    case ACTIONS.MEX:
      specificLocation = ACTIONS.MEX;
      break;
    default:
      specificLocation ="";
      break;
  }

  return specificLocation;
}

interface LocationFilterProps extends HTMLAttributes<HTMLDivElement>{
    labelIcon: string;
    onClickSpecificLocation: (e:any) => void;
    onChangeLocationSearch: (e:any) => void;
}

export function LocationFilter({labelIcon, ...props}: LocationFilterProps){
  const [specificLocation, dispatch] = useReducer(reducer, '');
  
  const onChangeSearch = (e:any) => {
    e.preventDefault();
    props.onChangeLocationSearch(e)
  }

  useEffect(() => { 
    props.onClickSpecificLocation(specificLocation);
  }, [specificLocation]);

    return (
        <Styled.LeftSideFilters>
            <Styled.Checkbox>
        <input type="checkbox" id="checkbox" name="fulltime" value="fulltime" />
        <label htmlFor="fulltime">Full-Time</label>
            </Styled.Checkbox>

          <Styled.CountryInputForm>
            <label>Location</label>
            <Styled.CountryInputLabel svg={labelIcon}>
                <Styled.CountryInput onChange={(e) => {onChangeSearch(e)}} placeholder="City, state, zip code or country"></Styled.CountryInput>
            </Styled.CountryInputLabel>
          </Styled.CountryInputForm>
        <Styled.CountryRadioButtonForm>
          
      <input onClick={() => dispatch({type: ACTIONS.UK})} type="radio" id="uk" name="principal_locations" value="United Kingdom" />
        <label htmlFor="uk">United Kingdom</label><br />
      <input onClick={() => dispatch({type: ACTIONS.DE})} type="radio" id="germany" name="principal_locations" value="Germany" />
        <label htmlFor="germany">Germany</label><br />
      <input onClick={() => dispatch({type: ACTIONS.USA})} type="radio" id="usa" name="principal_locations" value="United States"/>
        <label htmlFor="usa">United States</label><br />
      <input onClick={() => dispatch({type: ACTIONS.MEX})} type="radio" id="mexico" name="principal_locations" value="Mexico"/>
        <label htmlFor="mexico">Mexico</label>
        </Styled.CountryRadioButtonForm>
      </Styled.LeftSideFilters>
    )
}
