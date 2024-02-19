'use client';
import styles from './styles.module.css';
import Image from 'next/image';

import bgImage from '../../assets/Bg_Gray_Tones.png';
import logo from '../../assets/Logo_small.png';
import steps from '../../assets/Steps.png';
import back from '../../assets/Back.png';

import Link from 'next/link';

import SignupForm from '@/components/SignupForm';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Image src={bgImage} alt="" className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.topBar}>
            <Image src={logo} alt="" className={styles.logo} />
            <Image src={steps} alt="" className={styles.steps} />
          </div>
          <div className={styles.header}>
            <Link href="/">
              <Image src={back} alt="" className={styles.backBtn} />
            </Link>
            <h2>Join VerifyMyAge</h2>
            <p>{`Let's`} start by setting up your login details</p>
          </div>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
