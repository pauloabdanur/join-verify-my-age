import styles from './styles.module.css';

const SignInButton = () => {
  const alertSignIn = () => {
    alert('Sign In page is under development!');
  };

  return (
    <div>
      <button className={styles.signinBtn} onClick={alertSignIn} type="button">
        Got a VerifyMyAge Acconut? Sign in
      </button>
    </div>
  );
};

export default SignInButton;
