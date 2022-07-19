import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('It tests the NotFound component', () => {
  it('Should contains the text "Page requested not found"', () => {
    renderWithRouter(<NotFound />);

    const heading = screen.getByText(/Page requested not found/i);

    expect(heading).toBeInTheDocument();
  });

  it('Should contains the pikachu crying gif', () => {
    renderWithRouter(<NotFound />);

    const img = screen
      .getByAltText(/pikachu crying because the page requested was not found/i);

    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
