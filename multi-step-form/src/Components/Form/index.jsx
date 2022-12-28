import styles from './form.module.css';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.info}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className={styles.form}></div>
    </div>
  );
};

export default Form;
