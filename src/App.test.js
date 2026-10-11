import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import App from './App';

describe('portfolio', () => {
  beforeEach(() => render(<App />));

  test('renders hero headline and primary actions', () => {
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Building Reliable, High-Performance Systems in\s*C\+\+/,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View Resume' })).toHaveAttribute(
      'href',
      '/Sahil_Jasuja_Resume.pdf'
    );
    expect(
      screen.getByRole('link', { name: 'Explore Engineering Work' })
    ).toHaveAttribute('href', '#highlights');
  });

  test('navigation contains every section and a resume link', () => {
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    [
      'Home',
      'Experience',
      'Engineering Highlights',
      'Projects',
      'Skills',
      'Education',
      'Resume',
      'Contact',
    ].forEach((name) =>
      expect(within(nav).getByRole('link', { name })).toBeInTheDocument()
    );
  });

  test('every in-page anchor resolves to an element', () => {
    const { container } = { container: document.body };
    container.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute('href').slice(1);
      expect(document.getElementById(id)).not.toBeNull();
    });
  });

  test('mobile menu toggle reflects state', () => {
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('contains no photos, speech assistant, or phone number', () => {
    expect(document.querySelector('img')).toBeNull();
    expect(document.querySelector('iframe')).toBeNull();
    expect(screen.queryByText(/assistant - click/i)).toBeNull();
    expect(document.body.textContent).not.toMatch(/9782356004/);
  });

  test('external links open safely', () => {
    document.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute('rel')).toMatch(/noopener/);
    });
  });
});
