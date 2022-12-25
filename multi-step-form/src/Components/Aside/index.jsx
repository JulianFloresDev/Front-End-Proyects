import styles from './aside.module.css';

const Aside = () => {
  return (
    <div className={styles.aside}>
      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-mobile.svg`}
          media="(max-width: 1440px)"
        />
        <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} />
      </picture>
      <div className={styles.stepNumbersContainer}>
        <div className={styles.pageInfo}>
          <div className={styles.activePage}>1</div>
          <div className={styles.column}>
            <p>step 1</p>
            <h6>your info</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <div className={styles.number}>2</div>
          <div className={styles.column}>
            <p>step 2</p>
            <h6>select plan</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <div className={styles.number}>3</div>
          <div className={styles.column}>
            <p>step 3</p>
            <h6>add-ons</h6>
          </div>
        </div>
        <div className={styles.pageInfo}>
          <div className={styles.number}>4</div>
          <div className={styles.column}>
            <p>step 4</p>
            <h6>summary</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
