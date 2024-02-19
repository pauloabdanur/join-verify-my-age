'use client';
import { IFormData } from '@/interfaces/FormInterface';
import { userSchema } from '@/schemas/UserSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './styles.module.css';
import MyPhoneInput from '../MyPhoneInput';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SaveButton from '../SaveButton';
import SignInButton from '../SignInButton';

const SignupForm = () => {
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

  return (
    <div>
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
            <span className={styles.inputLabel}>Full Name</span>
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
            <span className={styles.inputLabel}>Email</span>
          </div>
          <div
            className={
              errors.phone
                ? `${styles.inputBoxError} ${styles.inputBox}`
                : styles.inputBox
            }
          >
            <span className={styles.inputLabel}>Mobile</span>
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
            <span className={styles.inputLabel}>Password</span>
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
          <SaveButton />
          <SignInButton />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
