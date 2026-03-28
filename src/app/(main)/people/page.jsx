import { Suspense } from 'react';
import LoadWrapper from '@/components/LoadWrapper';
import PeoplePage from '@/components/PeoplePage';

export default function Page() {
  return (
    <Suspense fallback={<LoadWrapper ready="loading" />}>
      <PeoplePage />
    </Suspense>
  );
}