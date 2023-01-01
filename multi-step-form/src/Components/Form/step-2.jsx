import styles from './form.module.css';
import { Input } from 'Components';
const FormStep2 = ({ errors, register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
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

export default FormStep2;
