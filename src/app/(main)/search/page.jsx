import { Suspense } from 'react';
import LoadWrapper from '@/components/LoadWrapper';
import SearchPage from '@/components/SearchPage';

export default function Page() {
  return (
    <Suspense fallback={<LoadWrapper />}>
      <SearchPage />
    </Suspense>
  );
}