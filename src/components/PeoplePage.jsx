'use client';
import React, { useState, useEffect } from 'react';
import MovieSerieView from './MovieSerieView';
import LoadWrapper from './LoadWrapper';
import { getPeople } from '@/redux/actions';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { useSearchParams } from 'next/navigation';
import _ from 'lodash';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getPeople })(
  function PeoplePage({ people, getPeople }) {
    const searchParams = useSearchParams();
    const [ready, setReady] = useState('loading');
    const [page, setPage] = useState(null);

    useEffect(() => { setPage(+searchParams.get('page') || 1); }, [searchParams]);
    useEffect(() => { getPeople(1); }, []);
    useEffect(() => { setReady('loading'); if (page) getPeople(page); }, [page]);

    useEffect(() => {
      if (people.length) {
        if (people[0] === 'page must be less than or equal to 500') {
          setReady('404'); document.title = 'NETFLIX | 404 NOT FOUND';
        } else {
          setReady('ready'); document.title = 'NETFLIX | Popular People';
        }
      }
    }, [people]);

    if (ready === 'loading') { document.title = 'NETFLIX | Loading ...'; return <LoadWrapper ready={ready} />; }
    if (ready === '404') return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      </div>
    );
    return (
      <div className="people-container" style={{ backgroundImage: `linear-gradient(#000000AA,#000),url(/images/work-bg.jpg)`, backgroundPosition: 'top', paddingTop: '113px' }}>
        <div className="container pb-5">
          <div className="row">
            {people.map((el) => el.profile_path && (
              <div key={el.id} className="my-3 col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="position-relative">
                  <MovieSerieView work={el} />
                </div>
              </div>
            ))}
          </div>
          <div className="row align-items-center">
            <Pagination page={page} />
          </div>
        </div>
      </div>
    );
  }
);
