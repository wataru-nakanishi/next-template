import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/router';

type reqData = {
  name: string;
  password: string;
}

const Login: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = async (data: reqData) => {
    await axios.post('http://localhost:3000/login/login', data).then(res => {
      res.data && localStorage.setItem('token', res.data);
      router.push('/');
    })
    .catch(error => {
      alert(error);
    });
  };

  return (
    <>
    <h1>Log in{process.env.DB_USER}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="text" ref={register({ required: true })} />
      </div>
      <button type="submit">login</button>
    </form>
    </>
  );
};

export default Login;