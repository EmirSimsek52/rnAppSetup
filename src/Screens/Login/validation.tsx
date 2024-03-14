import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  username: yup.string().trim().required('Username is required.'),
  password: yup.string().min(6, 'Please enter 6 min character.').required('Password is required.'),
});

