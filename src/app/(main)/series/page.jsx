import { Suspense } from 'react';
import LoadWrapper from '@/components/LoadWrapper';
import TVShowsPage from '@/components/TvShowsPage';

export default function Page() {
  return (
    <Suspense fallback={<LoadWrapper ready="loading" />}>
      <TVShowsPage />
    </Suspense>
  );
}