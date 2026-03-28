'use client';
import React from 'react';
import Link from 'next/link';
import '@/styles/movie_slider_view.sass';

export default function MovieOnSliderView({ trend }) {
  return (
    <Link
      href={`/${trend.title ? 'movie' : 'serie'}/${trend.id}`}
      className="trend_slider_view"
    >
      <img
        className="trend_backdrop_img"
        src={
          trend.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${trend.backdrop_path}`
            : '/images/work-bg.jpg'
        }
        alt={trend.title || trend.name || 'trend_backdrop'}
      />
      <div className="work-category">
        <img width={25} height={20} src="/images/icon.png" alt="netflix" />
        <span className="ms-1">
          {trend.media_type !== 'movie' ? 'series' : 'movies'}
        </span>
      </div>
      <div className="work-title">{trend.title || trend.name}</div>
      <span className="work-language">{trend.original_language}</span>
    </Link>
  );
}
