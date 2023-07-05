import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../stores/firebase/config';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        localStorage.setItem('email', user.email);
        setUser(user);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        localStorage.setItem('email', user.email);
        setUser(user);
      })
      .catch((error) => {
        console.error('Error registering:', error);
      });
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      {email ? (
        <Link to="/login" />
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
}
