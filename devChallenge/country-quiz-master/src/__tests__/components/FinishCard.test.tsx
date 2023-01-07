import React from 'react';
import { fireEvent, getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import { FinishCard } from '../../components/Finish Card/Card/FinishCard';


test('Should have a Try Again button in the end', () => {
  const handleClick = jest.fn();
  render(<FinishCard finishLogo={''} correctAnswers={3} onclickforbutton={handleClick} ></FinishCard>);
  const titleType = screen.queryAllByTestId('cardbuttontryagain')[0].textContent;

  expect(titleType).toBe('Try Again');
})

test('Should have a Try Again button that can be clicked', () => {
    const handleClick = jest.fn();
    render(<FinishCard finishLogo={''} correctAnswers={3} onclickforbutton={handleClick} ></FinishCard>);
  
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  })

  test('Should display the number of correct answers', () => {
    const handleClick = jest.fn();
    render(<FinishCard finishLogo={''} correctAnswers={3} onclickforbutton={handleClick} ></FinishCard>);
  
    const bElement = screen.getAllByTestId('correctanswers')[0];
    
    expect(bElement.innerHTML).toBe("3");
  })