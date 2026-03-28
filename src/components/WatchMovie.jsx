'use client';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovieById } from '@/redux/actions';
import MoviePageHero from './MoviePageHero';
import '@/styles/movie_details_page.sass';
import LoadWrapper from './LoadWrapper';
import TrailerModal from './TrailerModal';
import useTrailer from '@/hooks/useTrailer';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getMovieById })(
  function WatchMovie({ movie, getMovieById, id }) {
    const [ready, setReady] = useState('loading');
    const { trailerKey, trailerTitle, openTrailer, closeTrailer } = useTrailer();

    useEffect(() => { getMovieById(id); }, [id]);

    useEffect(() => {
      if (movie.status_code === 34) {
        setReady('404');
        document.title = 'NETFLIX | 404 NOT FOUND';
      } else if (movie.title) {
        document.title = `NETFLIX | Watch ${movie?.title}`;
        setReady('ready');
        // Auto-open the trailer as soon as the movie data loads
        openTrailer(id, 'movie', movie.title);
      }
    }, [movie]);

    if (ready === 'loading') {
      document.title = 'NETFLIX | Loading ...';
      return <LoadWrapper ready={ready} />;
    }
    if (ready === '404') return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      </div>
    );

    return (
      <>
        {trailerKey && (
          <TrailerModal trailerKey={trailerKey} title={trailerTitle} onClose={closeTrailer} />
        )}
        <MoviePageHero btns={false} movie={movie} />
        {/* Trailer button if modal was closed */}
        {!trailerKey && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
            <button
              className="btn"
              style={{ background: '#FF2530', color: '#fff', padding: '0.75rem 2.5rem', borderRadius: '1000px', fontSize: '1rem', fontWeight: 700 }}
              onClick={() => openTrailer(id, 'movie', movie.title)}
            >
              <i className="fal fa-play me-3"></i>Watch Trailer
            </button>
          </div>
        )}
      </>
    );
  }
);
