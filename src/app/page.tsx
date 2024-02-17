'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.replace('/signup');
  };

  return (
    <main className={styles.main}>
      <div onClick={handleStart} className={styles.text}>
        START HERE
      </div>
    </main>
  );
}
