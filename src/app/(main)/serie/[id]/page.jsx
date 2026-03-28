'use client';
import SerieDetails from '@/components/SerieDetails';
export default function Page({ params }) {
  return <SerieDetails id={params.id} />;
}
