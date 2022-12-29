import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'Components';
import { setFormStep } from 'Redux/global/actions';

const Form = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((store) => store.global);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ node: 'onBlur' });

  const showData = (data) => {
    console.log(data);
    dispatch(setFormStep(step + 1));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(showData)}>
      <div className={styles.formContainer}>
        <div className={styles.info}>
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <Input
          type={'text'}
          name={'name'}
          label={'Name'}
          placeholder={'e.g. Stephen King'}
          register={register}
          error={errors}
        />
        <Input
          type={'email'}
          name={'email'}
          label={'Email Adress'}
          placeholder={'e.g. stephenking@lorem.com'}
          register={register}
          error={errors}
        />
        <Input
          type={'tel'}
          name={'phone'}
          label={'Phone Number'}
          placeholder={'e.g. +1 234 567 890'}
          register={register}
          error={errors}
        />
      </div>
      <div className={styles.buttonContainer}>
        {step !== 1 && <Button>Go Back</Button>}
        <Button type={'submit'} variant={'blue'}>
          {step !== 4 ? 'Next Step' : 'Confirm'}
        </Button>
      </div>
    </form>
  );
};

export default Form;
