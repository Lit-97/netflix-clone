'use client';
import WatchMovie from '@/components/WatchMovie';
export default function Page({ params }) {
  return <WatchMovie id={params.id} />;
}
