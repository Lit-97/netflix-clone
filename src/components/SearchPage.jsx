'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import LoadWrapper from './LoadWrapper';
import '@/styles/search-area.sass';
import Pagination from './Pagination';
import { searchTMDB } from '@/redux/actions';
import { connect } from 'react-redux';
import SideBarFilter from './SideBarFilter';
import ResultsContainer from './ResultsContainer';
import scrollToTop from '@/helpers/scrollToTop';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { searchTMDB })(
  function SearchPage({ search_list, searchTMDB }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [term, setTerm] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [ready, setReady] = useState('ready');

    useEffect(() => { document.title = 'NETFLIX | Search'; }, []);

    useEffect(() => {
      setReady('loading');
      scrollToTop();
      const q = searchParams.get('query');
      const p = +searchParams.get('page') || 1;
      setQuery(q || '');
      setPage(p);
    }, [searchParams]);

    useEffect(() => {
      if (query) {
        (async () => {
          await searchTMDB(query, page);
          document.title = `NETFLIX | Search ${query}`;
          setReady('ready');
        })();
      } else {
        setReady('ready');
      }
    }, [page, query]);

    if (ready === 'loading') return <LoadWrapper />;
    return (
      <div className="search-area">
        <div className="search-form">
          <form onSubmit={(e) => { e.preventDefault(); router.push(`/search?query=${term || ''}`); }}>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              type="text"
              name="query"
              placeholder="Search for a movie, tv show or person"
              onFocus={(e) => { e.target.placeholder = ''; }}
              onBlur={(e) => { e.target.placeholder = 'Search for a movie, tv show or person'; }}
            />
            <button type="submit" style={{ background: '#FF2530', color: '#fff', fontSize: '22px', padding: '.5rem 3rem', border: 0 }}>
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
        <div className="search-results py-5">
          <div className="container">
            <div className="row">
              <SideBarFilter cats={true} list={search_list} />
              <ResultsContainer searchQuery={query}>
                {search_list.length ? <Pagination page={page} /> : null}
              </ResultsContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
