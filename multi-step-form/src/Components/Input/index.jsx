import styles from './input.module.css';

const Input = ({ type, name, label, placeholder }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Input;
