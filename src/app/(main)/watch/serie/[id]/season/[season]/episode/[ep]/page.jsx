'use client';
import WatchSerie from '@/components/WatchSerie';
export default function Page({ params }) {
  return <WatchSerie id={params.id} season={params.season} ep={params.ep} />;
}
