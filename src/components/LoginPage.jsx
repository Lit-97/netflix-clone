'use client';

import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return null;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at center, #b20710 0%, #7a0000 35%, #000 85%)
        `,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '450px',
          background: 'rgba(0, 0, 0, 0.75)',
          padding: '3rem',
          color: '#fff',
          borderRadius: '4px',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
          }}
        >
          Sign In
        </h1>

        <button
          onClick={() => signIn('github', { callbackUrl: '/' })}
          style={{
            width: '100%',
            background: '#e50914',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '0.9rem 1rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '1rem',
          }}
        >
          Continue with GitHub
        </button>

        <div
          style={{
            textAlign: 'center',
            color: '#b3b3b3',
            marginBottom: '1rem',
            fontSize: '0.95rem',
          }}
        >
          Portfolio login
        </div>

        <p
          style={{
            color: '#b3b3b3',
            fontSize: '0.95rem',
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          This Netflix clone uses GitHub sign-in for demo access.
        </p>
      </div>
    </div>
  );
}