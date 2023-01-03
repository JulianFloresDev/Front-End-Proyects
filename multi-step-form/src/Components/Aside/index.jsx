import styles from './aside.module.css';
import { useSelector } from 'react-redux';

const Aside = () => {
  const { step } = useSelector((state) => state.global);

  return (
    <aside className={styles.aside}>
      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-mobile.svg`}
          media="(max-width: 768px)"
        />
        <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} />
      </picture>
      <nav className={styles.stepNumbersContainer}>
        <div className={styles.pageInfo}>
          <span className={step === 1 ? styles.activePage : styles.number}>1</span>
          <div className={styles.column}>
            <p>step 1</p>
            <h6>your info</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <span className={step === 2 ? styles.activePage : styles.number}>2</span>
          <div className={styles.column}>
            <p>step 2</p>
            <h6>select plan</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <span className={step === 3 ? styles.activePage : styles.number}>3</span>
          <div className={styles.column}>
            <p>step 3</p>
            <h6>add-ons</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <span className={step === 4 ? styles.activePage : styles.number}>4</span>
          <div className={styles.column}>
            <p>step 4</p>
            <h6>summary</h6>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
