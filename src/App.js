// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './style/App.scss'

const App = () => {
  const [users, setUsers] = useState([{username:'admin',password:'admin'}]);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [isRegistered, setIsRegistered] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = () => {
    if (username && password) {
      if (users.find((user) => user.username === username)) {
        alert('Пользователь с таким именем уже существует');
        return;
      }
      setUsers([...users, { username, password }]);
      alert('Регистрация успешна, теперь войдите в систему');
      setIsRegistered(true);
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(user);
      alert(`Добро пожаловать, ${user.username}!`);
    } else {
      alert('Неправильное имя пользователя или пароль');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setUsername('');
    setPassword('');
  };

  return (
    <Router>
      <AppRoutes
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        isRegistered={isRegistered}
        setIsRegistered={setIsRegistered}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </Router>
  );
};

export default App;
