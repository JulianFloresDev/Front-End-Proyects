import styles from './checkbox.module.css';
import { useSelector } from 'react-redux';

const Checkbox = ({ src, name, register, registerName }) => {
  const { planInfo } = useSelector((store) => store.global);
  const { yearly, arcade, advanced, pro } = planInfo;
  return (
    <label htmlFor={name} className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/${src}`} alt="Arcade icon" />
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
      <input id={name} type={'radio'} className={styles.inputRadio} {...register(registerName)} />
    </label>
  );
};

export default Checkbox;
