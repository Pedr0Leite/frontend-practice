import styled from 'styled-components';


export const SearchForm = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px 0 0 4px;
  background-color: #f5f5f5;
  width: 60vw;

  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
position: absolute;
  right: 1px; 
  top: 1px;
  bottom: 1px;
  border: 0;
  background: #1E86FF;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 30px;
  border-radius: 4px;
  z-index: 2;

  &:hover {
    background-color: darkblue;
   }
`;