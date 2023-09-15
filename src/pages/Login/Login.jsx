import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="login_page">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form method="POST">
            <h3>Login Here</h3>

            <label for="username">E-mail</label>
            <input type="email" placeholder="Email" id="username" name="email" required />

              <label for="password">Password</label>
              <input type="password" placeholder="Password" id="password" name="password" required />

                <input type="submit" name="submit" className="login_btn" value="Login" />
                <Link to="/signup" id="singup_link" >create new account</Link>
              </form>
            </div>
        </div>
      </div>
      )
}

      export default Login