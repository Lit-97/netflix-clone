'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/hero-slider.sass';
import TrailerModal from './TrailerModal';
import useTrailer from '@/hooks/useTrailer';

export default function HeroSlider() {
  const { trailerKey, trailerTitle, loading, openTrailer, closeTrailer } = useTrailer();

  return (
    <>
      {trailerKey && (
        <TrailerModal trailerKey={trailerKey} title={trailerTitle} onClose={closeTrailer} />
      )}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        className="hero-slider"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        speed={1000}
      >

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/bridgerton-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">SERIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 bridgerton-banner" width={400} src="/images/hero-banners/bridgerton.webp" alt="bridgerton_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2020</span>
                    <span className="work-info-tag age-class">TV-MA</span>
                    <span className="work-info-tag">4 seasons</span>
                    <span className="work-info-tag">Drama</span>
                    <span className="work-info-tag">1h 3m</span>
                  </div>
                  <p className="work-description py-2">
                    Despite his elder and younger brothers both being happily married, Benedict is loath to settle down — until he meets a captivating Lady in Silver at his mother's masquerade ball.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(91239, 'tv', 'Bridgerton')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/serie/91239" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/peaky-blinders-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">MOVIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 peaky-banner" width={270} src="/images/hero-banners/peaky-blinders.webp" alt="peaky_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2026</span>
                    <span className="work-info-tag age-class">TV-MA</span>
                    <span className="work-info-tag">Crime</span>
                    <span className="work-info-tag">Drama</span>
                    <span className="work-info-tag">1h 52m</span>
                  </div>
                  <p className="work-description py-2">
                    After his estranged son gets embroiled in a Nazi plot, self-exiled gangster Tommy Shelby must return to Birmingham to save his family — and his nation.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(875828, 'movie', 'Peaky Blinders')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/movie/875828" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/jjk-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">SERIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 jujutsu-kaisen-banner" width={400} src="/images/hero-banners/jjk.webp" alt="jujutsu_kaisen_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2020</span>
                    <span className="work-info-tag age-class">PG-13</span>
                    <span className="work-info-tag">3 seasons</span>
                    <span className="work-info-tag">Anime</span>
                    <span className="work-info-tag">Action</span>
                    <span className="work-info-tag">24m</span>
                  </div>
                  <p className="work-description py-2">
                    Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(95479, 'tv', 'Jujutsu Kaisen')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/serie/95479" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/squid-game-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">SERIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 squid-game-banner" width={270} src="/images/hero-banners/squid-game-banner.webp" alt="squid_game_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2021</span>
                    <span className="work-info-tag age-class">TV-MA</span>
                    <span className="work-info-tag">Action</span>
                    <span className="work-info-tag">Adventure</span>
                    <span className="work-info-tag">3 seasons</span>
                    <span className="work-info-tag">54m</span>
                  </div>
                  <p className="work-description py-2">
                    Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(93405, 'tv', 'Squid Game')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/serie/93405" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/zootopia-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">MOVIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 zootopia-banner" width={270} src="/images/hero-banners/zootopia.webp" alt="zootopia_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2025</span>
                    <span className="work-info-tag age-class">PG-13</span>
                    <span className="work-info-tag">Comedy</span>
                    <span className="work-info-tag">Adventure</span>
                    <span className="work-info-tag">1h 48m</span>
                  </div>
                  <p className="work-description py-2">
                    After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives and turns the animal metropolis upside down. To crack the case, Judy and Nick must go undercover to unexpected new parts of town, where their growing partnership is tested like never before.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(1084242, 'movie', 'Zootopia 2')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/movie/1084242" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/interstellar-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">MOVIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 interstellar" width={430} src="/images/hero-banners/interstellar.webp" alt="interstellar_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2014</span>
                    <span className="work-info-tag age-class">PG-13</span>
                    <span className="work-info-tag"> Science Fiction</span>
                    <span className="work-info-tag">Fiction</span>
                    <span className="work-info-tag">2h 49m</span>
                  </div>
                  <p className="work-description py-2">
                    The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(157336, 'movie', 'Interstellar')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/movie/157336" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/spider-man-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">MOVIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 spider-man-banner" width={400} src="/images/hero-banners/spider-man.webp" alt="spider_man_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2017</span>
                    <span className="work-info-tag age-class">PG-13</span>
                    <span className="work-info-tag">Action</span>
                    <span className="work-info-tag">Science Fiction</span>
                    <span className="work-info-tag">2h 13m</span>
                  </div>
                  <p className="work-description py-2">
                    Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(315635, 'movie', 'Spider-Man: Homecoming')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/movie/315635" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="fluid-overlay"></div>
          <img src="/images/hero-slider/the-boys-bg.webp" alt="slider-bg" className="slide-bg-img" />
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="work-category">
                    <img width={25} height={20} src="/images/icon.png" alt="netflix" />
                    <span className="ms-2">SERIES</span>
                  </div>
                  <div className="work-banner">
                    <img className="py-4 the-boys-banner" width={230} src="/images/hero-banners/the-boys.webp" alt="the_boys_banner" />
                  </div>
                  <div className="work-info">
                    <span className="work-info-tag">2019</span>
                    <span className="work-info-tag age-class">TV-MA</span>
                    <span className="work-info-tag">Sci-Fi & Fantasy </span>
                    <span className="work-info-tag">Action</span>
                    <span className="work-info-tag">5 seasons</span>
                    <span className="work-info-tag">1h 6m</span>
                  </div>
                  <p className="work-description py-2">
                    A group of vigilantes known informally as "The Boys" set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.
                  </p>
                  <div className="work-actions-btns">
                    <button className="btn me-3" onClick={() => openTrailer(76479, 'tv', 'The Boys')} disabled={loading}>
                      <i className="fal fa-play me-3"></i>watch trailer
                    </button>
                    <Link href="/serie/76479" className="btn me-3 info-link-btn">more information</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
