import { useState, useCallback } from 'react';
import tmdb from '@/lib/tmdb';

export default function useTrailer() {
  const [trailerKey, setTrailerKey] = useState(null);
  const [trailerTitle, setTrailerTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const openTrailer = useCallback(async (id, type, title) => {
    setLoading(true);
    setTrailerTitle(title);
    try {
      const res = await tmdb.get(`/${type}/${id}`, {
        params: { append_to_response: 'videos' },
      });
      const videos = res.data.videos?.results || [];
      const trailer =
        videos.find((v) => v.type === 'Trailer' && v.site === 'YouTube' && v.official) ||
        videos.find((v) => v.type === 'Trailer' && v.site === 'YouTube') ||
        videos.find((v) => v.site === 'YouTube');
      setTrailerKey(trailer?.key || null);
    } catch {
      setTrailerKey(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const closeTrailer = useCallback(() => {
    setTrailerKey(null);
    setTrailerTitle('');
  }, []);

  return { trailerKey, trailerTitle, loading, openTrailer, closeTrailer };
}
