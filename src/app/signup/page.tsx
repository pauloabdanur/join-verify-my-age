'use client';

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import Image from 'next/image';

import bgImage from '../../assets/Bg_Gray_Tones.png';
import logo from '../../assets/Logo_small.png';
import steps from '../../assets/Steps.png';
import back from '../../assets/Back.png';

export default function Home() {
  const router = useRouter();

  const handleGoBack = () => {
    router.replace('/');
  };

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
            <Image
              src={back}
              alt=""
              className={styles.backBtn}
              onClick={handleGoBack}
            />
            <h2>Join VerifyMyAge</h2>
            <p>{`Let's`} start by setting up your login details</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Please Type in..." />
            <span>Full Name</span>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Please Type in..." />
            <span>Email</span>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Please Type in..." />
            <span>Mobile</span>
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Please Type in..." />
            <span>Password</span>
          </div>
        </div>
        <div className={styles.terms}>
          <input type="checkbox" />
          <p>
            Tick this box to confirm {`you’ve`} read and agreed to our{' '}
            <span>Terms</span> and <span> Privacy Policy</span>.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.signinBtn}>
            Got a VerifyMyAge Acconut? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
