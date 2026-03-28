'use client';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSerieById, getSerieEpisodes } from '@/redux/actions';
import SeasonPageHero from './SeasonPageHero';
import EpisodeItem from './EpisodeItem';
import LoadWrapper from './LoadWrapper';
import scrollToTop from '@/helpers/scrollToTop';
import _ from 'lodash';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSerieById, getSerieEpisodes })(
  function SerieSeasonPage({ getSerieById, getSerieEpisodes, serie, episodes, id, number }) {
    const [ready, setReady] = useState('loading');
    const [season, setSeason] = useState(null);

    useEffect(() => {
      document.title = 'NETFLIX | Loading ...';
      scrollToTop();
      if (_.isEmpty(serie)) getSerieById(id);
    }, [id, number]);

    useEffect(() => {
      if (serie.success === false) { setReady('404'); document.title = 'NETFLIX | 404 NOT FOUND'; }
      else if (!serie.success && serie.name) {
        serie.seasons.forEach((el) => { if (el.season_number === +number) setSeason(el); });
      }
    }, [serie]);

    useEffect(() => {
      if (season === null) { setReady('loading'); document.title = 'NETFLIX | Loading ...'; }
      else if (season === undefined) { setReady('404'); document.title = 'NETFLIX | 404 NOT FOUND'; }
      else if (season) {
        document.title = `NETFLIX | ${serie.name} - Season ${season?.season_number}`;
        if (!season.episode_count) { setReady('404'); }
        else { for (let ep = 1; ep <= season.episode_count; ep++) getSerieEpisodes(id, number, ep); }
      }
    }, [season]);

    useEffect(() => { if (episodes.length) setReady('ready'); }, [episodes]);

    if (ready === '404') return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      </div>
    );
    if (ready === 'loading') return <LoadWrapper ready={ready} />;
    return (
      <>
        <SeasonPageHero serie={serie} name={serie.name} season={season} btns={false} />
        <div className="episodes-container bg-white text-dark">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <h5 className="episodes-count">Episodes <span>( {season?.episode_count} )</span></h5>
              </div>
            </div>
            <div className="row">
              {episodes
                ?.sort((curr, next) => curr.episode_number - next.episode_number)
                .map((ep) => (
                  <div key={ep.id} className="col-12 col-md-6 col-lg-4">
                    <EpisodeItem season={season?.season_number} episode={ep} id={id} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
);
