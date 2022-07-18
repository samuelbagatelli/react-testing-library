import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('It tests the About component', () => {
  it('checks if the page contains pokedéx info', () => {
    renderWithRouter(<About />);

    const info = screen.getByText(/this application simulates a pokédex/i);

    expect(info).toBeInTheDocument();
  });

  it('checks if the page contains a heading "About Pokédex"', () => {
    renderWithRouter(<About />);

    const about = screen.getByText(/about pokédex/i);

    expect(about).toBeInTheDocument();
  });

  it('checks if the page contains two paragraphs with info', () => {
    renderWithRouter(<About />);

    const info = screen.getByText(/this application simulates a pokédex/i);
    const info2 = screen.getByText(/one can filter pokémons by type/i);

    expect(info).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
  });

  it('checks if the page contains an specific image', () => {
    renderWithRouter(<About />);

    const img = screen.getByAltText(/pokédex/i);

    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
