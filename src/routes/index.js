// src/routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Guide from '../Pages/Guide';
import DataEntry from '../Pages/DataEntry';

const AppRoutes = ({ loggedInUser, handleLogout, handleLogin, handleRegister, isRegistered, setIsRegistered, username, setUsername, password, setPassword }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedInUser ? (
            <Navigate to="/home" />
          ) : (
            <Login
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          )
        }
      />
      <Route
        path="/home"
        element={
          loggedInUser ? (
            <div>
              <Home loggedInUser={loggedInUser} handleLogout={handleLogout} />
            </div>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
      path="/guide"
      element={
        loggedInUser ? (
          <Guide loggedInUser={loggedInUser} handleLogout={handleLogout} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
    <Route path="/data-entry" element={loggedInUser ? <DataEntry loggedInUser={loggedInUser} handleLogout={handleLogout} /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
