import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('It tests the component App.js', () => {
  it('Checks if the heading contains "Home", "About" and "Favorite Pokémons" links',
    () => {
      renderWithRouter(<App />);

      const home = screen.getByText(/home/i);
      const about = screen.getByText(/about/i);
      const favoritePokemons = screen.getByText(/favorite pokémon/i);

      expect(home).toBeInTheDocument();
      expect(about).toBeInTheDocument();
      expect(favoritePokemons).toBeInTheDocument();
    });

  it('Should redirect to the home page by clicking "Home"', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/qualquer');

    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('Should redirect to the about page by clicking "About"', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);

    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  it('Should redirect to the favorite pokémons page by clicking "Favorite Pokémons"',
    () => {
      const { history } = renderWithRouter(<App />);

      const favoritePokemons = screen.getByRole('link', { name: /favorite pokémons/i });
      userEvent.click(favoritePokemons);

      const { pathname } = history.location;

      expect(pathname).toBe('/favorites');
    });

  it('Should redirect to the not found page when the URL does not contain a page',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pagina/qualquer');

      const notFound = screen.getByText(/Page requested not found/i);

      expect(notFound).toBeInTheDocument();
    });
});
