import styles from './inputCheckbox.module.css';

const InputCheckbox = ({ name, children }) => {
  return (
    <label htmlFor={name} className={styles.container}>
      <input type="checkbox" />
      {children}
    </label>
  );
};

export default InputCheckbox;
