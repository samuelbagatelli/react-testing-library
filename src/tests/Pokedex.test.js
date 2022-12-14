import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('It tests the Pokedex component', () => {
  it('Should have a "Encountered pokémons" heading', () => {
    renderWithRouter(<App />);

    const heading = screen.getByText(/encountered pokémons/i);

    expect(heading).toBeInTheDocument();
  });

  it('Should exhibit the next pokémon when the button is clicked', () => {
    renderWithRouter(<App />);

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const button = screen.getByText(/próximo pokémon/i);
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });

  it('Should have the filter buttons', () => {
    renderWithRouter(<App />);

    const electric = screen.getByRole('button', { name: /electric/i });
    expect(electric).toBeInTheDocument();

    const anyFilterButton = screen.getAllByTestId(/pokemon-type-button/i);
    anyFilterButton.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  it('Should have a reset filter button', () => {
    renderWithRouter(<App />);

    const all = screen.getByText(/all/i);
    expect(all).toBeInTheDocument();

    const next = screen.getByText(/próximo pokémon/i);
    userEvent.click(all);

    expect(next.disabled).toBe(false);
  });
});
