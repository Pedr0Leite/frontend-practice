import React from 'react';
import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import { CardTitleAndLogo } from '../../components/Card/Title/Title'; 


test('should have a title', () => {
  render(<CardTitleAndLogo title='country quiz' logo={""} showFinishCard={false}></CardTitleAndLogo>);
  const titleType = screen.queryAllByTestId('cardtitle')[0].textContent;

  expect(titleType).toBe('country quiz');
})