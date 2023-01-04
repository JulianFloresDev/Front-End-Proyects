import styles from './form.module.css';
import inputStyles from '../InputCheckbox/inputCheckbox.module.css';
import { InputCheckbox } from 'Components';
import { useSelector } from 'react-redux';

const FormStep3 = () => {
  const { addInfo, planInfo } = useSelector((store) => store.global);
  const { yearly } = planInfo;
  return (
    <>
      <div className={styles.info}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <InputCheckbox name={'online'} checked={addInfo.online.active}>
        <div className={inputStyles.info}>
          <h4>{addInfo.online.service}</h4>
          <p>{addInfo.online.description}</p>
        </div>
        <span>{`+$${yearly ? addInfo.online.yearly : addInfo.online.monthly}/${
          yearly ? 'yr' : 'mo'
        }`}</span>
      </InputCheckbox>
      <InputCheckbox name={'storage'} checked={addInfo.storage.active}>
        <div className={inputStyles.info}>
          <h4>{addInfo.storage.service}</h4>
          <p>{addInfo.storage.description}</p>
        </div>
        <span>{`+$${yearly ? addInfo.storage.yearly : addInfo.storage.monthly}/${
          yearly ? 'yr' : 'mo'
        }`}</span>
      </InputCheckbox>
      <InputCheckbox name={'profile'} checked={addInfo.profile.active}>
        <div className={inputStyles.info}>
          <h4>{addInfo.profile.service}</h4>
          <p>{addInfo.profile.description}</p>
        </div>
        <span>{`+$${yearly ? addInfo.profile.yearly : addInfo.profile.monthly}/${
          yearly ? 'yr' : 'mo'
        }`}</span>
      </InputCheckbox>
    </>
  );
};

export default FormStep3;
