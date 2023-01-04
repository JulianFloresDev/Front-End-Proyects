import styles from './inputCheckbox.module.css';
import { useDispatch } from 'react-redux';
import { setAddInfo } from 'Redux/global/actions';

const InputCheckbox = ({ name, children }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor={name} className={styles.container}>
      <input
        id={name}
        type="checkbox"
        onChange={(e) => {
          dispatch(setAddInfo({ name: name, state: e.target.checked }));
        }}
      />
      {children}
    </label>
  );
};

export default InputCheckbox;
