import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

test('renders home link', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
