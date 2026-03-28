'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/styles/works_classification_btns.sass';

export default function WorksClassificationBtns({ btns, pathname }) {
  const location = usePathname();
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const path = location.split('/')[2];
    [...ref.current.children].forEach((el) => {
      el.classList.remove('current');
      if (!path && el === ref.current.children[0]) {
        el.classList.add('current');
      } else if (path && el.href && el.href.split('/')[4] === path) {
        el.classList.add('current');
      }
    });
  }, [location]);

  return (
    <div className="col">
      <div className="class-btns-group" ref={ref}>
        {btns.map((btn) => (
          <Link
            key={btn}
            href={`/${pathname}${btn === 'popular' ? '' : `/${btn.split(' ').join('_')}`}`}
          >
            {btn}
          </Link>
        ))}
      </div>
    </div>
  );
}
