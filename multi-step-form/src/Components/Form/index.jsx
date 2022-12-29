import styles from './form.module.css';
import { Input, Button } from 'Components';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.info}>
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <Input type={'text'} name={'name'} label={'Name'} placeholder={'e.g. Stephen King'} />
        <Input
          type={'email'}
          name={'email'}
          label={'Email Adress'}
          placeholder={'e.g. stephenking@lorem.com'}
        />
        <Input
          type={'tel'}
          name={'phone'}
          label={'Phone Number'}
          placeholder={'e.g. +1 234 567 890'}
        />
      </form>
      <div className={styles.buttonContainer}>
        <Button type>Next Step</Button>
      </div>
    </div>
  );
};

export default Form;
