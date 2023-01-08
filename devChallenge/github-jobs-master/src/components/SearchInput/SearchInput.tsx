import React from 'react';
import styled from 'styled-components';
import '@fortawesome/react-fontawesome';

import * as Styled from './SearchInput.styled';

function SearchForm() {
  return (
      <Styled.SearchForm>
      <Styled.SearchInput type="text" placeholder="&#128188; Title, companies, expertise or benefits" />
      <Styled.SearchButton type="submit">Search</Styled.SearchButton>
    </Styled.SearchForm>
  );
}

export default SearchForm;