import styles from './button.module.css';

const Button = ({ type, variant, children }) => {
  return (
    <button type={type || 'button'} className={styles[variant] || styles.basic}>
      {children || 'Button'}
    </button>
  );
};

export default Button;
