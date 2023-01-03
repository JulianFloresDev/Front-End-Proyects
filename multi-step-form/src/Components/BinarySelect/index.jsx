import styles from './select.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanType } from 'Redux/global/actions';

const BinarySelect = () => {
  const dispatch = useDispatch();
  const { planInfo } = useSelector((store) => store.global);
  const { yearly } = planInfo;

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
          checked={yearly}
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
