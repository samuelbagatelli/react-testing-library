import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('It tests the Favorite Pokémons page', () => {
  it('The messsage "No favorite pokemon found" when no pokémon is favorited', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavorite = screen.getByText(/no favorite pokemon found/i);

    expect(noFavorite).toBeInTheDocument();
  });

  it('Shows all the favorited pokémons', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const check = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(check);

    const favorite = screen.getByText(/favorite pokémons/i);
    userEvent.click(favorite);

    const favorited = screen.getByText(/pikachu/i);
    expect(favorited).toBeInTheDocument();
  });
});
