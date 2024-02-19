import Link from 'next/link';
import styles from './page.module.css';
import bgImage from '../assets/Bg_Gray_Tones.png';
import logo from '../assets/Logo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="" />
      </div>
      <div className={styles.homeText}>
        <h1>Welcome!</h1>
        <p>Create an account at Verify My Age now.</p>
        <p>And be in touch with our Age Assurance Specialists.</p>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href={'/signup'}>
          <button className={styles.signupBtn}>
            <p>Sign Up now!</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
