import styles from './form.module.css';
import { BinarySelect, Checkbox } from 'Components';
const FormStep2 = ({ register, errors }) => {
  console.log(errors);
  return (
    <>
      <div className={styles.info}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <fieldset id="planInfo" className={styles.fieldset}>
        <Checkbox src={`assets/images/icon-arcade.svg`} name={'arcade'} register={register} />
        <Checkbox src={`assets/images/icon-advanced.svg`} name={'advanced'} register={register} />
        <Checkbox src={`assets/images/icon-pro.svg`} name={'pro'} register={register} />
      </fieldset>
      <BinarySelect />
    </>
  );
};

export default FormStep2;
