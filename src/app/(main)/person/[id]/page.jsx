'use client';
import PersonPage from '@/components/PersonPage';
export default function Page({ params }) {
  return <PersonPage id={params.id} />;
}
