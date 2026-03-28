'use client';
import React, { useEffect, useState } from 'react';
import LoadWrapper from './LoadWrapper';
import { connect } from 'react-redux';
import { getPersonById } from '@/redux/actions';
import MovieSerieView from './MovieSerieView';
import scrollToTop from '@/helpers/scrollToTop';
import '@/styles/person-page.sass';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getPersonById })(
  function PersonPage({ getPersonById, person, id }) {
    const [ready, setReady] = useState('loading');

    useEffect(() => { getPersonById(id); scrollToTop(); }, [id]);

    useEffect(() => {
      if (person.status_code === 34) setReady('404');
      if (person.name) { setReady('ready'); document.title = `NETFLIX | ${person.name}`; }
    }, [person]);

    if (ready === 'loading') { document.title = 'NETFLIX | Loading ...'; return <LoadWrapper />; }
    if (ready === '404') return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      </div>
    );
    return (
      <div className="person-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-3">
              <div className="left-sidebar">
                <div className="person-profile mb-4">
                  <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt={person.name} />
                </div>
                <ul className="person-socials">
                  <li><a href={`https://imdb.com/name/${person.external_ids.imdb_id}`} target="_blank" rel="noreferrer"><i className="fab fa-imdb"></i></a></li>
                  {person.external_ids.facebook_id && <li><a href={`https://facebook.com/${person.external_ids.facebook_id}`} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>}
                  {person.external_ids.instagram_id && <li><a href={`https://instagram.com/${person.external_ids.instagram_id}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>}
                  {person.external_ids.twitter_id && <li><a href={`https://twitter.com/${person.external_ids.twitter_id}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>}
                </ul>
                {person.also_known_as?.length > 0 && (
                  <div className="person-fact">
                    <label>Also Known As</label>
                    {person.also_known_as.map((el) => <span key={el}>{`${el} , `}</span>)}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="person-works">
                <h3 className="person-name">{person.name}</h3>
                <div className="person-fact"><label>Biography</label><p className="person-biography">{person.biography || 'N/A'}</p></div>
                <div className="person-facts-container">
                  <div className="person-fact"><label>Known For</label><p>{person.known_for_department || 'N/A'}</p></div>
                  <div className="person-fact"><label>Known Credits</label><p>{person.combined_credits?.cast?.length}</p></div>
                  <div className="person-fact"><label>Gender</label><p>{person.gender === 1 ? 'Female' : person.gender === 2 ? 'Male' : 'N/A'}</p></div>
                  <div className="person-fact"><label>Birthday</label><p>{person.birthday || 'N/A'}</p></div>
                  {person.deathday && <div className="person-fact"><label>Day of Death</label><p>{person.deathday}</p></div>}
                  <div className="person-fact"><label>Place of Birth</label><p>{person.place_of_birth || 'N/A'}</p></div>
                </div>
                <div className="person-fact">
                  <label className="d-block">Known For</label>
                  <div className="works-container">
                    {person.combined_credits?.cast?.map((el) => el.poster_path && <MovieSerieView key={el.id} work={el} />)}
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
