import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#151515', color: '#fff' }}>
      <p className="m-0" style={{ fontSize: '8rem', fontWeight: '900' }}>404</p>
      <Link href="/" style={{ color: '#fff', background: '#FF2530', padding: '.75rem 2.25rem', borderRadius: '.3rem', textDecoration: 'none' }}>
        Back To Homepage
      </Link>
    </div>
  );
}
