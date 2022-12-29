import styles from './layout.module.css';
import { Aside, Form } from 'Components';

const Layout = () => {
  return (
    <div className={styles.fullcontainer}>
      <main className={styles.mainContainer}>
        <Aside />
        <Form />
      </main>
    </div>
  );
};

export default Layout;
