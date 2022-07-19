import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('It tests the Pokemon component', () => {
  it('Should contain a card with a pokémon info', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType.innerHTML).toBe('Electric');

    const averageWeight = screen.getByText(/average weight: 6.0 kg/i);
    expect(averageWeight).toBeInTheDocument();

    const pokemonImg = screen.getByAltText(/pikachu sprite/i);
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Should show a pokémon card with a "more details" link', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    expect(details).toBeInTheDocument();

    userEvent.click(details);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Should show a star icon in the favorited pokémon', () => {
    renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const check = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(check);

    const star = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(star).toBeInTheDocument();
    expect(star.src).toBe('http://localhost/star-icon.svg');
  });
});
