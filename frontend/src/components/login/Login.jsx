import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './Login.module.scss';

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Required e-mail')
    .email('Invalid e-mail address'),
  password: yup.string().required('Password'),
});

export const Login = () => {
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => console.log(values),
  });
  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h2>Войти</h2>
        <div className={styles.form__item}>
          <input
            id='email'
            name='email'
            type='email'
            className={`${styles.form__input} ${
              formik.values.email !== '' ? styles.not_empty : ''
            }`}
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label htmlFor='email' className={styles.form__label}>
            Ваш ник
          </label>
        </div>
        <div className={styles.form__item}>
          <input
            id='password'
            name='password'
            type='password'
            className={`${styles.form__input} ${
              formik.values.password !== '' ? styles.not_empty : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <label htmlFor='password' className={styles.form__label}>
            Пароль
          </label>
        </div>
        <button type='submit' className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
};
