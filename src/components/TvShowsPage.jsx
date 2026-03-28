'use client';
import React, { useEffect, useState } from 'react';
import ResultsContainer from './ResultsContainer';
import SideBarFilter from './SideBarFilter';
import Pagination from './Pagination';
import { usePathname, useSearchParams } from 'next/navigation';
import scrollToTop from '@/helpers/scrollToTop';
import LoadWrapper from './LoadWrapper';
import _ from 'lodash';
import { getPopularTv, getTopTv, getNowPlayingTv, getOnTheAirTv } from '@/redux/actions';
import '@/styles/movies-page.sass';
import { connect } from 'react-redux';
import PageHeroSlider from './PageHeroSlider';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getPopularTv, getTopTv, getNowPlayingTv, getOnTheAirTv })(
  function TvShowsPage(props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [page, setPage] = useState(1);
    const [ready, setReady] = useState('loading');
    const [category, setCategory] = useState('');

    useEffect(() => {
      const cat = pathname.split('/')[2];
      const p = +searchParams.get('page') || 1;
      setCategory(cat);
      setPage(p);
      scrollToTop();
    }, [pathname, searchParams]);

    useEffect(() => {
      setReady('loading');
      switch (category) {
        case undefined:
          document.title = 'NETFLIX | Popular Series';
          props.getPopularTv(page);
          break;
        case 'airing_today':
          document.title = 'NETFLIX | Airing Today Series';
          props.getNowPlayingTv(page);
          break;
        case 'on_tv':
          document.title = 'NETFLIX | On Tv Series';
          props.getOnTheAirTv(page);
          break;
        case 'top_rated':
          document.title = 'NETFLIX | Top Rated Series';
          props.getTopTv(page);
          break;
      }
    }, [category, page]);

    useEffect(() => {
      if (!_.isEmpty(props.series)) setReady('ready');
    }, [props.series]);

    if (ready === 'loading') return <LoadWrapper ready={ready} />;
    return (
      <>
        <div className="page-hero-slider">
          <PageHeroSlider results={props.series.slice(0, 3)} />
        </div>
        <div className="page-main">
          <div className="container">
            <div className="row">
              <SideBarFilter label={`${category || 'Popular'} series`} list={props.series} />
              <ResultsContainer
                pathname="series"
                categories={['popular', 'airing today', 'top rated', 'on tv']}
                results={props.series}
              >
                <Pagination page={page} />
              </ResultsContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
);
