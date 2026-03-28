'use client';
import SerieSeasonPage from '@/components/SerieSeasonPage';
export default function Page({ params }) {
  return <SerieSeasonPage id={params.id} number={params.number} />;
}
