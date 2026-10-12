import React, { useEffect, useState } from 'react';
import { RESUME_URL } from '../data/profile';

const items = [
  ['#top', 'Home'],
  ['#about', 'About'],
  ['#highlights', 'Engineering Highlights'],
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#education', 'Education'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark" aria-hidden="true">SJ</span>
          <span>Sahil Jasuja</span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__bars" aria-hidden="true" />
        </button>
        <nav
          id="nav-menu"
          aria-label="Primary"
          className={`nav__menu${open ? ' is-open' : ''}`}
        >
          <ul>
            {items.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={close}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                className="nav__resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
