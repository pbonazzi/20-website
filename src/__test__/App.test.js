import {render, screen} from '@testing-library/react';
import HomeC from "../components/HomeC";

test('Bottega forense', () => {
  render(<HomeC/>);
  const linkElement = screen.getByText("Bottega forense dal 1948.");
  expect(linkElement).toBeInTheDocument();
});
