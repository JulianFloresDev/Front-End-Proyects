import styles from './form.module.css';
import inputStyles from '../InputCheckbox/inputCheckbox.module.css';
import { InputCheckbox } from 'Components';

const FormStep3 = () => {
  return (
    <>
      <div className={styles.info}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <InputCheckbox>
        <div className={inputStyles.info}>
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
        </div>
        <span>+$9/yr</span>
      </InputCheckbox>
      <InputCheckbox>
        <div className={inputStyles.info}>
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
        </div>
        <span>+$9/yr</span>
      </InputCheckbox>
      <InputCheckbox>
        <div className={inputStyles.info}>
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
        </div>
        <span>+$9/yr</span>
      </InputCheckbox>
    </>
  );
};

export default FormStep3;
