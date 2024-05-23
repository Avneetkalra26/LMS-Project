import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ element }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      navigate('/');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return isAuthenticated ? element : null;
}
