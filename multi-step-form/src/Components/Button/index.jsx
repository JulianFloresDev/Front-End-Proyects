import styles from './button.module.css';

const Button = ({ type, variant, action, children }) => {
  return (
    <button
      type={type || 'button'}
      className={styles[variant] || styles.basic}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
    >
      {children || 'Button'}
    </button>
  );
};

export default Button;
