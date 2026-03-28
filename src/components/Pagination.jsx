'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import '@/styles/pagination.sass';

export default function Pagination({ page }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    if (searchParams.toString()) setHasSearch(true);
  }, [searchParams]);

  useEffect(() => {
    if (hasSearch) {
      const query = searchParams.get('query');
      if (query) setSearch(`?query=${query}`);
    }
  }, [hasSearch, searchParams]);

  return (
    <div className="pagination-container">
      {+page - 1 !== 0 && (
        <Link href={search ? `${search}&page=${+page - 1}` : `?page=${+page - 1}`}>
          <i className="fa-2x fal fa-angle-double-left"></i>
          <span>page {+page - 1}</span>
        </Link>
      )}
      {+page < 500 && (
        <Link href={search ? `${search}&page=${+page + 1}` : `?page=${+page + 1}`}>
          <span>page {+page + 1}</span>
          <i className="fa-2x fal fa-angle-double-right"></i>
        </Link>
      )}
    </div>
  );
}
