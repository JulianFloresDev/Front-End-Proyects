import styles from './form.module.css';
import { Input } from 'Components';
const FormStep1 = ({ errors, register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <Input
        type={'text'}
        name={'name'}
        label={'Name'}
        placeholder={'e.g. Stephen King'}
        register={register}
        error={errors}
      />
      <Input
        type={'email'}
        name={'email'}
        label={'Email Adress'}
        placeholder={'e.g. stephenking@lorem.com'}
        register={register}
        error={errors}
      />
      <Input
        type={'tel'}
        name={'phone'}
        label={'Phone Number'}
        placeholder={'e.g. +1 234 567 890'}
        register={register}
        error={errors}
      />
    </>
  );
};

export default FormStep1;
