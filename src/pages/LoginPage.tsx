import { Button, Container, Typography, TextField } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useGetToken } from '../functions/AuthProvider';

type FormFields = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Email format is not valid')
    .required('email is required'),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'Password should be 8 characters minimum'),
});

const LoginPage = () => {
  const { mutate } = useGetToken();
  const { register, handleSubmit, formState } = useForm<FormFields>({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    mutate(data);
  };

  return (
    <Container sx={{ width: '480px' }}>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          {...register('email')}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Typography color={'red'}>{errors.email?.message}</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          {...register('password')}
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Typography color={'red'}>{errors.password?.message}</Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ my: 2 }}
        >
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
