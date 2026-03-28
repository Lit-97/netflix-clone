import { Suspense } from 'react';
import LoadWrapper from '@/components/LoadWrapper';
import MoviesPage from '@/components/MoviesPage';

export default function Page() {
  return (
    <Suspense fallback={<LoadWrapper ready="loading" />}>
      <MoviesPage />
    </Suspense>
  );
}