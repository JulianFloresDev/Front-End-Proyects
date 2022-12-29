import styles from './layout.module.css';
import { Aside, Form } from 'Components';

const Layout = () => {
  return (
    <div className={styles.fullcontainer}>
      <main className={styles.mainContainer}>
        <Aside />
        <div className={styles.formContainer}>
          <Form />
        </div>
      </main>
    </div>
  );
};

export default Layout;
