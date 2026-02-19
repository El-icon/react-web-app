import { render, screen } from '@testing-library/react';
import { Greet } from './greet';    

test('Greet Renders Correctly', () => {
  render(<Greet />);
  const greetElement = screen.getByText(/Hello/i);
  expect(greetElement).toBeInTheDocument();
});