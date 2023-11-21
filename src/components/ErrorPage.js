// ErrorPage.js
import React from 'react';
import './styles/ErrorPage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ErrorPage = () => {
  
  const theme = useSelector(state => state.ui.dark)
  return (
    <div className="error-container" id={theme ? "" : "error-container-light"}>
      <div className="error-content">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
