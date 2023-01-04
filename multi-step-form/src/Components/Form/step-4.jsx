/* eslint-disable indent */
import styles from './form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFormStep } from 'Redux/global/actions';

const FormStep4 = () => {
  const dispatch = useDispatch();
  const { planInfo, addInfo } = useSelector((store) => store.global);
  const { arcade, advanced, pro, yearly } = planInfo;
  const { online, storage, profile } = addInfo;

  const finalPlanPrice =
    (arcade.active && (yearly ? arcade.yearly : arcade.monthly)) ||
    (advanced.active && (yearly ? advanced.yearly : advanced.monthly)) ||
    (pro.active && (yearly ? pro.yearly : pro.monthly));

  let totalPrice = 0;
  switch (true) {
    case arcade.active:
      yearly ? (totalPrice += arcade.yearly) : (totalPrice += arcade.monthly);
      break;
    case advanced.active:
      yearly ? (totalPrice += advanced.yearly) : (totalPrice += advanced.monthly);
      break;
    case pro.active:
      yearly ? (totalPrice += pro.yearly) : (totalPrice += pro.monthly);
      break;
    default:
      return;
  }
  online.active && (yearly ? (totalPrice += online.yearly) : (totalPrice += online.monthly));
  storage.active && (yearly ? (totalPrice += storage.yearly) : (totalPrice += storage.monthly));
  profile.active && (yearly ? (totalPrice += profile.yearly) : (totalPrice += profile.monthly));

  return (
    <>
      <div className={styles.info}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.finalInfoContainer}>
        <div className={styles.finalPlanColumn}>
          <div className={styles.finalInfoPlan}>
            <h4>
              {arcade.active && 'Arcade'}
              {advanced.active && 'Advanced'}
              {pro.active && 'Pro'}
              {yearly ? ' (Yearly)' : ' (Monthly)'}
            </h4>
            <p onClick={() => dispatch(setFormStep(2))}>Change</p>
          </div>
          <span>{`$${finalPlanPrice}/${yearly ? 'yr' : 'mo'}`}</span>
        </div>
        <ul className={styles.addInfoContainer}>
          {online.active && (
            <li>
              <p>{online.service}</p>
              <span>+${yearly ? `${online.yearly}/yr` : `${online.monthly}/mo`}</span>
            </li>
          )}
          {storage.active && (
            <li>
              <p>{storage.service}</p>
              <span>+${yearly ? `${storage.yearly}/yr` : `${storage.monthly}/mo`}</span>
            </li>
          )}
          {profile.active && (
            <li>
              <p>{profile.service}</p>
              <span>+${yearly ? `${profile.yearly}/yr` : `${profile.monthly}/mo`}</span>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.totalPriceContainer}>
        <p>{`Total (per ${yearly ? 'year' : 'month'})`}</p>
        <span>{`+$${totalPrice}/${yearly ? 'yr' : 'mo'}`}</span>
      </div>
    </>
  );
};

export default FormStep4;
