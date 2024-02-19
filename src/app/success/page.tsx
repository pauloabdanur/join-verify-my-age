import Image from 'next/image';
import styles from './styles.module.css';
import logo from '../../assets/Logo_small.png';
import successCheck from '../../assets/success_check.png';
import bgImage from '../../assets/Bg_Gray_Tones.png';
import Link from 'next/link';

const Success = () => {
  return (
    <div className={styles.container}>
      <Image src={bgImage} alt="" className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.successText}>
          <h2>Congrats</h2>
          <p>{`You'll`} be automatically verified for all future orders.</p>
          <p>Your orders will be dispatched without delay.</p>
        </div>
        <div className={styles.successFlag}>
          <Image src={successCheck} alt="" />
          <div className={styles.flagText}>
            <p>{`You've`} been</p>
            <p>successfully</p>
            <p>verified!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
