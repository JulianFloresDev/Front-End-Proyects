import styles from './form.module.css';
import { BinarySelect, InputRadio } from 'Components';
const FormStep2 = () => {
  return (
    <>
      <div className={styles.info}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <fieldset id="planInfo" className={styles.fieldset}>
        <InputRadio src={`assets/images/icon-arcade.svg`} name={'arcade'} />
        <InputRadio src={`assets/images/icon-advanced.svg`} name={'advanced'} />
        <InputRadio src={`assets/images/icon-pro.svg`} name={'pro'} />
      </fieldset>
      <BinarySelect />
    </>
  );
};

export default FormStep2;
