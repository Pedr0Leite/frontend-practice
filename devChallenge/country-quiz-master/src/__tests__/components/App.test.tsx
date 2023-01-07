import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

test('renders app and show title', () => {
    render(<App />);
    const countryTitle = screen.getByText(/country quiz/i);
    expect(countryTitle).toBeInTheDocument();
  });
  
  test('check if 4 li are shown', () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
})

test('should show a next button', () => {
  render(<App />);
  const nextButton = screen.getByTestId('cardnextbutton');
  expect(nextButton).toBeEnabled();
})