'use client';
import React from 'react';
import Link from 'next/link';
import '@/styles/main-menu.sass';

export default function MainMenu() {
  return (
    <div className="main-menu pt-4">
      <div className="container">
        <div className="row">
          <div className="my-4 col-sm-6 col-md-3 col-12">
            <Link href="/" className="brand-link mb-3">
              <img width={120} src="/images/logo.svg" alt="netflix logo" title="NETFLIX" />
            </Link>
          </div>
          <div className="my-4 col-sm-6 col-md-3 col-12">
            <Link className="head-link" href="/movies">movies</Link>
            <ul className="nav-list">
              <li><Link href="/movies">Popular Movies</Link></li>
              <li><Link href="/movies/now_playing">Now Playing Movies</Link></li>
              <li><Link href="/movies/top_rated">Top Rated Movies</Link></li>
              <li><Link href="/movies/upcoming">Upcoming Movies</Link></li>
            </ul>
          </div>
          <div className="my-4 col-sm-6 col-md-3 col-12">
            <Link className="head-link" href="/series">series</Link>
            <ul className="nav-list">
              <li><Link href="/series">Popular Series</Link></li>
              <li><Link href="/series/airing_today">Airing Today Series</Link></li>
              <li><Link href="/series/top_rated">Top Rated Series</Link></li>
              <li><Link href="/series/on_tv">On Tv Series</Link></li>
            </ul>
          </div>
          <div className="my-4 col-sm-6 col-md-3 col-12">
           <ul className="social-links">

  <li>
    <a href="mailto:litneyhintonwordk@example.com">
      <i className="fas fa-envelope"></i>
    </a>
  </li>

  <li>
  <a href="https://lit-97.github.io/portfolio/" target="_blank" rel="noreferrer">
    <img src="/images/portfolio.png" alt="portfolio-jc-icon" className="social-icon-img" />
  </a>
</li>

  <li>
    <a href="https://github.com/Lit-97" target="_blank" rel="noreferrer">
      <i className="fab fa-github"></i>
    </a>
  </li>

</ul>
            <p>All rights reserved by<span className="rights">Lit97</span> © 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
