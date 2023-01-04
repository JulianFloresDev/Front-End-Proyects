import styles from './form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { setFormStep, setPersonalInfo } from 'Redux/global/actions';
import { Button } from 'Components';
import { FormStep1, FormStep2, FormStep3, FormStep4 } from './steps';
import formSchema from 'validations/formSchema';

const Form = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((store) => store.global);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ node: 'onBlur', resolver: joiResolver(formSchema) });

  const showData = (data) => {
    step === 1 && dispatch(setPersonalInfo(data));
    step !== 4 && dispatch(setFormStep(step + 1));
  };

  const goBack = () => {
    dispatch(setFormStep(step - 1));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(showData)}>
      <div className={styles.formContainer}>
        {step === 1 && <FormStep1 errors={errors} register={register} reset={reset} />}
        {step === 2 && <FormStep2 />}
        {step === 3 && <FormStep3 />}
        {step === 4 && <FormStep4 />}
      </div>
      <div className={styles.buttonContainer}>
        {step !== 1 && (
          <Button type={'button'} variant={'basic'} action={goBack}>
            Go Back
          </Button>
        )}
        <Button type={'submit'} variant={'blue'}>
          {step !== 4 ? 'Next Step' : 'Confirm'}
        </Button>
      </div>
    </form>
  );
};

export default Form;
