'use client';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSerieById } from '@/redux/actions';
import SeriePageHero from './SeriePageHero';
import '@/styles/movie_details_page.sass';
import LoadWrapper from './LoadWrapper';
import TrailerModal from './TrailerModal';
import useTrailer from '@/hooks/useTrailer';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSerieById })(
  function WatchSerie({ serie, getSerieById, id, season, ep }) {
    const [ready, setReady] = useState('loading');
    const { trailerKey, trailerTitle, openTrailer, closeTrailer } = useTrailer();

    useEffect(() => { getSerieById(id); }, [id, season, ep]);

    useEffect(() => {
      if (serie.status_code === 34) {
        setReady('404');
        document.title = 'NETFLIX | 404 NOT FOUND';
      } else if (serie.name) {
        document.title = `NETFLIX | Watch ${serie?.name}`;
        setReady('ready');
        // Auto-open the trailer as soon as the serie data loads
        openTrailer(id, 'tv', serie.name);
      }
    }, [serie]);

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
        <SeriePageHero btns={false} serie={serie} />
        {/* Trailer button if modal was closed */}
        {!trailerKey && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
            <button
              className="btn"
              style={{ background: '#FF2530', color: '#fff', padding: '0.75rem 2.5rem', borderRadius: '1000px', fontSize: '1rem', fontWeight: 700 }}
              onClick={() => openTrailer(id, 'tv', serie.name)}
            >
              <i className="fal fa-play me-3"></i>Watch Trailer
            </button>
          </div>
        )}
      </>
    );
  }
);
