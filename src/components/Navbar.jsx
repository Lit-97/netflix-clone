'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { connect } from 'react-redux';
import { changeIsLoggedIn } from '@/redux/actions';
import '@/styles/navbar.sass';
import '@/styles/mob-nav-menu.sass';
import { useSession, signOut } from 'next-auth/react';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { changeIsLoggedIn })(
  function MainNavbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const menu = useRef();
    const [navFixed, setNavFixed] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handler = () => setScrollY(window.scrollY);
      document.addEventListener('scroll', handler);
      return () => document.removeEventListener('scroll', handler);
    }, []);

    useEffect(() => {
      setNavFixed(scrollY > 120);
    }, [scrollY]);

    const closeModal = () => menu.current?.classList.remove('show');
    const currentPage = pathname.split('/')[1];

    return (
      <>
        {/* Mobile slide-out menu */}
        <div className="mob-nav-menu d-lg-none" ref={menu}>
          <header>
            <div className="row align-items-center">
              <div className="col">
                <Link href="/" className="brand-link me-4" onClick={closeModal}>
                  <img width={120} src="/images/logo.svg" alt="netflix logo" title="NETFLIX" />
                </Link>
              </div>
              <div className="col text-end">
                <button className="p-0 nav-menu-btn" onClick={closeModal}>
                  <i className="fal fa-2x fa-times text-white"></i>
                </button>
              </div>
            </div>
          </header>
          <ul>
            {[['/', 'home'], ['/movies', 'movies'], ['/series', 'series'], ['/people', 'people']].map(([href, label]) => (
              <li key={href} className={pathname === href ? 'active' : ''}>
                <Link href={href} onClick={closeModal}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile bottom navbar */}
        <div className="mob-navbar d-lg-none">
          <Link href="/" className="home-btn navbar-btn"><i className="fal fa-home"></i></Link>
          <Link href="/search" className="search-btn navbar-btn"><i className="fal fa-search"></i></Link>
          {!session ? (
  <Link href="/login" className="navbar-btn">
    <i className="fal fa-user"></i>
  </Link>
) : (
  <>
    <img
      className="avatar-img"
      src={session.user?.image}
      alt="avatar"
      style={{ width: '30px', borderRadius: '50%' }}
    />
    <button className="navbar-btn" onClick={() => signOut({ callbackUrl: '/' })}>
      <i className="fal fa-power-off"></i>
    </button>
  </>
)}
        </div>

        {/* Desktop navbar */}
        <nav className={navFixed ? 'invert nav-top-fixed' : undefined}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col navbar-left-area">
                <Link href="/" className="brand-link me-4">
                  <img width={120} src="/images/logo.svg" alt="netflix logo" title="NETFLIX" />
                </Link>
                <ul className="navbar-short-links d-none d-lg-flex">
                  {[['/', 'home'], ['/movies', 'movies'], ['/series', 'series'], ['/people', 'people']].map(([href, label]) => (
                    <li key={href} className="nav-item">
                      <Link href={href} className={`nav-link${pathname === href || (href !== '/' && pathname.startsWith(href)) ? ' active' : ''}`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col navbar-right-area">
                <div className="d-none d-lg-flex">
                  <Link href="/search" title="Search" className="search-btn navbar-btn">
                    <i className="fal fa-search"></i>
                  </Link>
                  {!session ? (
  <Link href="/login" className="login_signup-link ms-4">login</Link>
) : (
  <>
    <img
      className="avatar-img ms-4"
      src={session.user?.image}
      alt="avatar"
      title="Account"
      style={{ width: '35px', borderRadius: '50%' }}
    />
    <button
      title="Logout"
      className="ms-4 navbar-btn"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <i className="fal fa-power-off"></i>
    </button>
  </>
)}
                </div>
                <div className="d-lg-none">
                  <button className="p-0 nav-menu-btn" onClick={() => menu.current?.classList.add('show')}>
                    <i className="fal fa-2x fa-bars text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
);
