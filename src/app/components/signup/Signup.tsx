'use client';

import React from 'react';
import './signup.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form, { form } from '@/app/type/type';

const Signup: React.FC<SignupModalProps> = ({ openSignup, onCloseSignup }) => {
  if (!openSignup) return null;

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
      <form className='signupform' onSubmit={handleSubmit(onSubmit)}>
        <button className='signupform__closebutton' onClick={onCloseSignup}>
          &#10006;
        </button>
        <h1 className='signupform__title'>Signup form</h1>
        <label className='signupform__label'>Username</label>
        <input
          className='signupform__input'
          type='text'
          {...register('username')}
        />
        {<span className='loginform__error'>{errors.username?.message}</span>}
        <label className='signupform__label'>Password</label>
        <input
          className='signupform__input'
          type='password'
          {...register('password')}
        />
        {<span className='loginform__error'>{errors.password?.message}</span>}
        <button className='signupform__submitbutton' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
