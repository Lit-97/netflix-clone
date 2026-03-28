'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/load-wrapper.sass';

export default function LoadWrapper({ ready }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const content = (
    <div className={`load-wrapper ${ready === 'ready' ? 'd-none' : ''}`}>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (!mounted) return content;
  const el = document.getElementById('wrapper');
  return el ? ReactDOM.createPortal(content, el) : content;
}
