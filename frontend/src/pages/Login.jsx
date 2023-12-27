import { useFormik } from 'formik';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='login'>Login</label>
      <input
        id='login'
        name='login'
        type='login'
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};
