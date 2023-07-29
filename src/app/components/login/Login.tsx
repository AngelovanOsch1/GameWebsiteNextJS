'use client';

import React from 'react';
import './login.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form, { form } from '@/app/type/type';

const Login: React.FC<LoginModalProps> = ({ openLogin, onCloseLogin }) => {
  if (!openLogin) return null;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(form),
  });

  const onSubmit = (formData: Form) => {
    console.log(formData);
  };

  return (
    <div className='super-center'>
      <form className='loginform' onSubmit={handleSubmit(onSubmit)}>
        <button className='loginform__closebutton' onClick={onCloseLogin}>
          &#10006;
        </button>
        <h1 className='loginform__title'>Login form</h1>
        <label className='loginform__label'>Username</label>
        <input
          className='loginform__input'
          type='text'
          {...register('username')}
        />
        {<span className='loginform__error'>{errors.username?.message}</span>}
        <label className='loginform__label'>Password</label>
        <input
          className='loginform__input'
          type='password'
          {...register('password')}
        />
        {<span className='loginform__error'>{errors.password?.message}</span>}
        <button className='loginform__submitbutton' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
