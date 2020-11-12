import React, { FC } from 'react'

const Signup: FC = () => {
  return (
    <>
    <h1>sign up</h1>
    <div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="text" />
      </div>
      <div>
        <label htmlFor="password-confirmation">confirm password</label>
        <input id="password-confirmation" name="password-confirmation" type="text" />
      </div>
      <button type="submit">登録</button>
    </div>
    </>
  )
}

export default Signup