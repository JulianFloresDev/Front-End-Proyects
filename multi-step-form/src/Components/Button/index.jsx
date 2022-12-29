import styles from './button.module.css';

const Button = ({ type, variant, action, children }) => {
  return (
    <button
      type={type}
      className={styles[variant]}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
