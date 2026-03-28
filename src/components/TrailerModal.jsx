'use client';
import React, { useEffect } from 'react';

export default function TrailerModal({ trailerKey, title, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: '900px',
          background: '#000', borderRadius: '8px', overflow: 'hidden',
          boxShadow: '0 8px 60px rgba(0,0,0,0.9)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.75rem 1rem', background: '#111',
        }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            {title} — Trailer
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', color: '#aaa',
              fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1, padding: '0 4px',
            }}
            aria-label="Close trailer"
          >
            ×
          </button>
        </div>

        {/* YouTube embed */}
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&rel=0`}
            title={`${title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
