import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login_page'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form method="POST">
        <h3>Sign Up</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username" name="username" required />

        <label for="email">E-mail</label>
        <input type="email" placeholder="Email" id="email" name="email" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" required />

        <input type="submit" name="submit" className="login_btn" value="Sing Up" />
        <Link to="/login" id="singup_link" >login</Link>
      </form>
    </div>
  )
}

export default Signup