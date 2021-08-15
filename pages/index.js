// import Head from 'next/head';
// import App from '../components/main';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{ textAlign: 'center', fontSize: '40px' }}
    >
      <h1>Simple template navigation</h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/first">
          <a>first</a>
        </Link>
        <Link href="/content-only">
          <a>content-only</a>
        </Link>
        <Link href="/full">
          <a>full</a>
        </Link>
        <Link href="/vouchful">
          <a>vouchful</a>
        </Link>
        <Link href="/mdx-test">
          <a>Here test mdx</a>
        </Link>
        <Link href="/mdx-components">
          <a>MDX with components inside</a>
        </Link>
      </ul>
    </div>
  );
}
