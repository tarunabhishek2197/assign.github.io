import { useState } from 'react';
import TabsN from './TabsN';
import './TabsN.css'
import './LoginForm.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Successfull");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    setForgotPassword(false);
  };

  if (forgotPassword) {
    return (
      <form className="login-form" onSubmit={handleResetPassword}>
        <h2>Reset Password</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Reset Password</button>
        <button type="button" onClick={() => setForgotPassword(false)}>Back to Login</button>
      </form>
    );
  }

  return (
    <div>
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
    </form>
    <TabsN/>
    </div>
  );
}
export default SignUp;
