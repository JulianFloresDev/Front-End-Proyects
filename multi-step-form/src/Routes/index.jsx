import styles from './layout.module.css';
import Aside from 'Components/Aside';
import Form from 'Components/Form';

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
