import styles from './layout.module.css';
import Aside from 'Components/Aside';

const Layout = () => {
  return (
    <div className={styles.fullcontainer}>
      <main className={styles.mainContainer}>
        <Aside />
      </main>
    </div>
  );
};

export default Layout;
