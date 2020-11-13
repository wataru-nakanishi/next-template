import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';

type signUpParam = {
  name: string;
  password: string;
  password_confirmation: string;
}

const Signup: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = async (data: signUpParam) => {
    await axios.post('http://localhost:3000/users', data).then(() => {
      router.push('/login');
    })
    .catch(error => {
      alert(error);
    });
  };

  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" ref={register({ required: true })} />
      </div>
      <div>
        <label htmlFor="password_confirmation">password</label>
        <input id="password_confirmation" name="password_confirmation" type="password" ref={register({ required: true })} />
      </div>
      <button type="submit">register</button>
    </form>
    </>
  );
};

export default Signup;