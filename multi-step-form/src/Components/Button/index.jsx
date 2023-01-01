import styles from './button.module.css';

const Button = ({ type, variant, action, children }) => {
  return (
    <button
      type={type || 'button'}
      className={styles[variant] || styles.basic}
      onClick={() => {
        action && action();
      }}
    >
      {children || 'Button'}
    </button>
  );
};

export default Button;
