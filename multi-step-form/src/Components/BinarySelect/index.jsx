import styles from './select.module.css';
import { useDispatch } from 'react-redux';
import { setPlanType } from 'Redux/global/actions';

const BinarySelect = () => {
  const dispatch = useDispatch();

  const changePaymentFrecuency = (data) => {
    dispatch(setPlanType(data));
  };

  return (
    <div className={styles.container}>
      <p className={styles.month}>Monthly</p>
      <label htmlFor="binarySelect" className={styles.select}>
        <input
          id="binarySelect"
          type="checkbox"
          onChange={(e) => {
            changePaymentFrecuency(e.target.checked);
          }}
        />
      </label>
      <p className={styles.year}>Yearly</p>
    </div>
  );
};

export default BinarySelect;
