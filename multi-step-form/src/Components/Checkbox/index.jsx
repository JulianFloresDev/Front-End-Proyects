import styles from './checkbox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanInfo } from 'Redux/global/actions';

const Checkbox = ({ src, name }) => {
  const dispatch = useDispatch();
  const { planInfo } = useSelector((store) => store.global);
  const { yearly, arcade, advanced, pro } = planInfo;

  return (
    <label htmlFor={name} className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/${src}`} alt={name + ' icon.'} />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>
          {name === 'arcade' &&
            `$${yearly ? arcade.yearly : arcade.monthly}/${yearly ? 'yr' : 'mo'}`}
          {name === 'advanced' &&
            `$${yearly ? advanced.yearly : advanced.monthly}/${yearly ? 'yr' : 'mo'}`}
          {name === 'pro' && `$${yearly ? pro.yearly : pro.monthly}/${yearly ? 'yr' : 'mo'}`}
        </p>
        {yearly ? <p className={styles.promotion}>2 months free</p> : null}
      </div>
      <input
        id={name}
        type={'radio'}
        name={'planInfo'}
        className={styles.inputRadio}
        defaultChecked={planInfo[name].active ? true : false}
        onChange={(e) => {
          dispatch(
            setPlanInfo({ arcade: false, advanced: false, pro: false, [name]: e.target.checked })
          );
        }}
      />
    </label>
  );
};

export default Checkbox;
