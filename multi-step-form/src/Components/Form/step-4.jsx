import styles from './form.module.css';
import { Input } from 'Components';
const FormStep4 = ({ errors, register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
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

export default FormStep4;
