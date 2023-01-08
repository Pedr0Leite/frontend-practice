import { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './LocationFilter.styled';

interface LocationFilterProps extends HTMLAttributes<HTMLDivElement>{
    labelIcon: string;
}

export function LocationFilter({labelIcon, ...props}: LocationFilterProps){
    return (
        <Styled.LeftSideFilters>
            <Styled.Checkbox>
        <input type="checkbox" id="checkbox" name="fulltime" value="fulltime" />
        <label htmlFor="fulltime">Full-Time</label>
            </Styled.Checkbox>
        <label>Location</label>

        <form>
            <Styled.CountryInputLabel svg={labelIcon}>
                <Styled.CountryInput placeholder="City, state, zip code or country"></Styled.CountryInput>
            </Styled.CountryInputLabel>
      </form>
        <Styled.CountryRadioButtonForm>
      <input type="radio" id="london" name="principal_locations" value="London" />
        <label htmlFor="london">London</label><br />
      <input type="radio" id="amsterdam" name="principal_locations" value="Amsterdam" />
        <label htmlFor="amsterdam">Amsterdam</label><br />
      <input type="radio" id="newyork" name="principal_locations" value="New York"/>
        <label htmlFor="newyork">New York</label><br />
      <input type="radio" id="berlim" name="principal_locations" value="Berlim"/>
        <label htmlFor="berlim">Berim</label>
        </Styled.CountryRadioButtonForm>
      </Styled.LeftSideFilters>
    )
}