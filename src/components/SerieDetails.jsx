'use client';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSerieById } from '@/redux/actions';
import '@/styles/movie_details_page.sass';
import CastSlider from './CastSlider';
import SeasonItem from './SeasonItem';
import ReviewItem from './ReviewItem';
import SeriePageHero from './SeriePageHero';
import LoadWrapper from './LoadWrapper';
import scrollToTop from '@/helpers/scrollToTop';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSerieById })(
  function SerieDetails({ serie, getSerieById, id }) {
    const [ready, setReady] = useState('loading');

    useEffect(() => {
      document.title = 'NETFLIX | Loading ...';
      scrollToTop();
    }, []);

    useEffect(() => { getSerieById(id); }, [id]);

    useEffect(() => {
      if (serie.success === false) { document.title = 'NETFLIX | 404 NOT FOUND'; setReady('404'); }
      else if (!serie.success && serie.name) { document.title = `NETFLIX | ${serie.name}`; setReady('ready'); }
      else setReady('loading');
    }, [serie]);

    if (ready === '404') return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      </div>
    );
    if (ready === 'loading') return <LoadWrapper ready={ready} />;
    return (
      <div className="movie-details-page">
        <SeriePageHero serie={serie} btns={true} />
        <div className="work-details-area pt-5">
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="work-main-data">
                  <div className="movie-trailer">
                    <h5 className="mb-4">Serie Trailer</h5>
                    <div className="trailer-area mb-5">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${serie?.videos?.results[0]?.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <CastSlider title={serie?.name} cast={serie?.credits?.cast?.filter((el) => el.profile_path)} />
                </div>
              </div>
              <div className="col-12 col-lg-3 pt-5">
                <div className="work-facts">
                  <div className="work-social-links mb-4 d-flex">
                    <a title="Visit IMDB" className="me-5" target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${serie?.external_ids?.imdb_id}`}><i className="fab fa-imdb"></i></a>
                    {serie?.external_ids?.facebook_id && <a title="Visit Facebook" className="me-5" href={`http://facebook.com/${serie?.external_ids?.facebook_id}`} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>}
                    {serie?.external_ids?.twitter_id && <a title="Visit Twitter" className="me-5" href={`http://twitter.com/${serie?.external_ids?.twitter_id}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>}
                    {serie?.external_ids?.instagram_id && <a title="Visit Instagram" className="me-5" href={`http://instagram.com/${serie?.external_ids?.instagram_id}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                  </div>
                  <div className="work-info-item py-2"><p className="title">Status</p><p className="value">{serie.status || 'N/A'}</p></div>
                  <div className="work-info-item py-2"><p className="title">Original Language</p><p className="value">{serie.original_language}</p></div>
                  <div className="work-info-item py-2"><p className="title">Type</p><p className="value">{serie.type}</p></div>
                  {serie?.keywords?.results?.length > 0 && (
                    <div className="work-info-item py-4">
                      <p className="title">Keywords</p>
                      <ul className="works-keywords">
                        {serie?.keywords?.results.map((el) => <li key={el.id} className="badge bg-secondary">{el.name}</li>)}
                      </ul>
                    </div>
                  )}
                  {serie?.networks?.length > 0 && (
                    <div className="work-info-item py-4">
                      <p className="title">Networks</p>
                      <ul className="works-keywords">
                        {serie?.networks?.map((el) => <li className="my-2 me-4" key={el.id}><img className="network-img" src={`https://www.themoviedb.org/t/p/h30/${el.logo_path}`} alt={el.name} /></li>)}
                      </ul>
                    </div>
                  )}
                  {serie?.languages?.length > 0 && (
                    <div className="work-info-item">
                      <p className="title">Languages</p>
                      <ul className="works-keywords">
                        {serie?.languages?.map((el) => <li key={el} className="badge uppercase bg-danger">{el}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="serie-seasons-area py-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h5 className="mb-4">Tv Show Seasons</h5>
                  <div className="container p-0">
                    <div className="row">
                      {serie?.seasons?.map((season) => season.season_number > 0 && (
                        <SeasonItem key={season.name} season={season} serieID={serie?.id} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="work-info-item">
                    <p className="title mb-4">{`Reviews (${serie?.reviews?.results?.length || 0})`}</p>
                    <ul className="works-keywords tv-show-reviews-container">
                      {serie?.reviews?.results.length ? (
                        serie.reviews.results.map((rev) => (
                          <ReviewItem avatarCol={3} body={9} key={rev.id} review={rev} invert={true}>{rev.content}</ReviewItem>
                        ))
                      ) : (
                        <li className="my-2 pe-1">We don&apos;t have any reviews for {serie.name}.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
