'use client';
import styles from './styles.module.css';
import Image from 'next/image';

import bgImage from '../../assets/Bg_Gray_Tones.png';
import logo from '../../assets/Logo_small.png';
import steps from '../../assets/Steps.png';
import back from '../../assets/Back.png';
import MyPhoneInput from '@/components/MyPhoneInput';

import { userSchema } from '@/schemas/UserSchema';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface IFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  checkbox: boolean;
}

const SignUp = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(userSchema) });

  const submit = (data: IFormData) => {
    router.push('/success');
  };

  const alertSignIn = () => {
    alert('Sign In page is under development!');
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
            <Link href="/">
              <Image src={back} alt="" className={styles.backBtn} />
            </Link>
            <h2>Join VerifyMyAge</h2>
            <p>{`Let's`} start by setting up your login details</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.formContainer}>
            <div
              className={
                errors.name
                  ? `${styles.inputBoxError} ${styles.inputBox}`
                  : styles.inputBox
              }
            >
              <input
                type="text"
                placeholder="Please Type in..."
                {...register('name', { required: true })}
              />
              <span>Full Name</span>
            </div>
            <div
              className={
                errors.email
                  ? `${styles.inputBoxError} ${styles.inputBox}`
                  : styles.inputBox
              }
            >
              <input
                type="text"
                placeholder="Please Type in..."
                {...register('email', { required: true })}
              />
              <span>Email</span>
            </div>
            <div
              className={
                errors.phone
                  ? `${styles.inputBoxError} ${styles.inputBox}`
                  : styles.inputBox
              }
            >
              <span>Mobile</span>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <MyPhoneInput
                    onChangeController={field.onChange}
                    error={errors.phone ? true : false}
                  />
                )}
              />
            </div>
            <div
              className={
                errors.password
                  ? `${styles.inputBoxError} ${styles.inputBox}`
                  : styles.inputBox
              }
            >
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Please Type in..."
                {...register('password', { required: true })}
              />
              <span>Password</span>
              <div
                className={styles.eyeButton}
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div
            className={
              errors.checkbox
                ? `${styles.termsError} ${styles.terms}`
                : styles.terms
            }
          >
            <input
              type="checkbox"
              {...register('checkbox', { required: true })}
            />
            <p>
              Tick this box to confirm {`you’ve`} read and agreed to our{' '}
              <span>Terms</span> and <span> Privacy Policy</span>.
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.saveBtn} type="submit" name="saveBtn">
              Save
            </button>
            <button className={styles.signinBtn} onClick={alertSignIn}>
              Got a VerifyMyAge Acconut? Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
