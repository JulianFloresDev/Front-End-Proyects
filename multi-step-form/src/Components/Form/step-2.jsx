import styles from './form.module.css';
import { Checkbox } from 'Components';
const FormStep2 = ({ register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <Checkbox
        src={`assets/images/icon-arcade.svg`}
        name={'arcade'}
        label={'Phone Number'}
        register={register}
      />
      <Checkbox
        src={`assets/images/icon-advanced.svg`}
        name={'advanced'}
        label={'Phone Number'}
        register={register}
      />
      <Checkbox
        src={`assets/images/icon-pro.svg`}
        name={'pro'}
        label={'Phone Number'}
        register={register}
      />
    </>
  );
};

export default FormStep2;
