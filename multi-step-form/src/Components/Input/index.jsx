import styles from './input.module.css';

const Input = ({ type, name, label, placeholder, register, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        {error && <p className={styles.error}>{error[name]?.message}</p>}
      </div>
      <input
        {...register(name)}
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
