import React, { FC } from 'react'
import { useForm } from "react-hook-form";
const axios = require('axios')

const onSubmit = async (data) => {
  await axios.post('http://localhost:3000/login/login', data).then(res => {
    console.log(res.data)
  })
}

const login: FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <>
    <h1>Log in</h1>
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
  )
}

export default login