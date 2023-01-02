import styles from './form.module.css';
import { BinarySelect, Checkbox } from 'Components';
const FormStep2 = ({ register }) => {
  return (
    <>
      <div className={styles.info}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <fieldset id="plan" className={styles.fieldset}>
        <Checkbox
          src={`assets/images/icon-arcade.svg`}
          name={'arcade'}
          register={register}
          registerName={'planInfo'}
        />
        <Checkbox
          src={`assets/images/icon-advanced.svg`}
          name={'advanced'}
          register={register}
          registerName={'planInfo'}
        />
        <Checkbox
          src={`assets/images/icon-pro.svg`}
          name={'pro'}
          register={register}
          registerName={'planInfo'}
        />
      </fieldset>
      <BinarySelect />
    </>
  );
};

export default FormStep2;
