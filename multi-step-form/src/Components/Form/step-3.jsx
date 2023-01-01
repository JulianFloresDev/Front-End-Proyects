import styles from './form.module.css';
import { Input } from 'Components';
const FormStep3 = ({ errors, register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
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

export default FormStep3;
