'use client';
import MovieDetails from '@/components/MovieDetails';
export default function Page({ params }) {
  return <MovieDetails id={params.id} />;
}
