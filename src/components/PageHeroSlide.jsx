'use client';
import React from 'react';
import Link from 'next/link';

export default function PageHeroSlide({ data }) {
  return (
    <>
      <div className="fluid-overlay"></div>
      <img
        src={
          data?.backdrop_path
            ? `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${data.backdrop_path}`
            : '/images/work-bg.jpg'
        }
        alt="slider-bg"
        className="slide-bg-img"
      />
      <div className="slide-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-1 col-lg-5 col-xl-6 col-12 pt-4">
              <div className="work-category">
                <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                <span className="ms-2">{data.title ? 'MOVIES' : 'SERIES'}</span>
              </div>
              <div className="work-banner">
                <h2 className="m-0 work-title">{data.title || data.name}</h2>
              </div>
              <div className="work-info d-flex">
                <span className="work-info-tag age-class">
                  {data.release_date?.split('-')[0] || data.first_air_date?.split('-')[0]}
                </span>
              </div>
              <p className="work-description py-2">{data.overview}</p>
              <div className="work-actions-btns">
                <Link
                  href={`/watch/${data.title ? 'movie' : 'serie'}/${data.id}${data.name ? '/season/1/episode/1' : ''}`}
                  className="btn me-3"
                >
                  <i className="fal fa-play me-3"></i>play
                </Link>
                <Link
                  href={`/${data.title ? 'movie' : 'serie'}/${data.id}`}
                  className="btn me-3 info-link-btn"
                >
                  more information
                </Link>
              </div>
            </div>

            {/* Clean poster — no WorkScore overlay */}
            <div className="offset-lg-2 d-none d-lg-block col-xl-2 col-lg-3 p-0">
              <Link href={`/${data.title ? 'movie' : 'serie'}/${data.id}`}>
                <div style={{
                  borderRadius: '0.6rem',
                  overflow: 'hidden',
                  boxShadow: '1px 1px 20px #00000080',
                }}>
                  <img
                    src={
                      data.poster_path
                        ? `https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`
                        : `https://via.placeholder.com/220X330/FF2530/fff.png?text=NOT_AVAILABLE`
                    }
                    alt={data.title || data.name}
                    style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
