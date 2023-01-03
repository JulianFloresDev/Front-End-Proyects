import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Step1Schema from 'validations/step-1';
import { useSelector, useDispatch } from 'react-redux';
import { FormStep1, FormStep2, FormStep3, FormStep4 } from './steps';
import { Button } from 'Components';
import {
  setFormStep,
  setPersonalInfo
  // setPlanInfo,
  // setAddInfo
} from 'Redux/global/actions';

const Form = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((store) => store.global);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ node: 'onBlur', resolver: joiResolver(Step1Schema) });

  const showData = (data) => {
    step === 1 && dispatch(setPersonalInfo(data));
    console.log(data);
    dispatch(setFormStep(step + 1));
  };

  const goBack = () => {
    dispatch(setFormStep(step - 1));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(showData)}>
      <div className={styles.formContainer}>
        {step === 1 && <FormStep1 errors={errors} register={register} reset={reset} />}
        {step === 2 && <FormStep2 register={register} errors={errors} />}
        {step === 3 && <FormStep3 errors={errors} register={register} />}
        {step === 4 && <FormStep4 errors={errors} register={register} />}
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
