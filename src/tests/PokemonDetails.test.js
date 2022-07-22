import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('It tests the component Pokemon Details', () => {
  it('Should show the detailed info on the screen', () => {
    renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const title = screen.getByText(/pikachu details/i);
    expect(title).toBeInTheDocument();
    expect(details).not.toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /summary/i });
    expect(heading).toBeInTheDocument();

    const paragraph = screen
      .getByText(/this intelligent pokémon roasts hard berries with electricity/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('Should have a section with maps with location of the pokémon', () => {
    renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const locations = screen.getByRole('heading', { name: /game locations of/i });
    expect(locations).toBeInTheDocument();

    const img = screen.getAllByAltText(/pikachu location/i);
    expect(img[0]).toBeInTheDocument();
    expect(img[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });

  it('Should be able to favorite the pokemon', () => {
    renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const check = screen.getByLabelText(/pokémon favoritado/i);
    expect(check).toBeInTheDocument();
  });
});
