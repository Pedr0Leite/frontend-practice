import React from 'react';
import styled from 'styled-components';
import '@fortawesome/react-fontawesome';

import * as Styled from './SearchInput.styled';

function SearchForm(props:any) {

  //Use reducer here
  const handleChangeText = (e:any) => {
    props.onChangeTitleText(e)
  }

  const onClickSearch = (e:any) =>{
    e.preventDefault();
    props.onClickSearch(e)
  }

  return (
      <Styled.SearchForm>
      <Styled.SearchInput type="text" onChange={(e) => handleChangeText(e)} placeholder="&#128188; Title, companies, expertise or benefits" value={props.inputValue}/>
      <Styled.SearchButton type="submit" onClick={(e) => {onClickSearch(e)}}>Search</Styled.SearchButton>
    </Styled.SearchForm>
  );
}

export default SearchForm;