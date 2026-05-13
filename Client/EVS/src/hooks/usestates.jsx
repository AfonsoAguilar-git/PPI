import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hook useEffect para persistência: verifica se o utilizador já estava logado ao carregar a página
  useEffect(() => {
    const savedUser = localStorage.getItem('evs_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('evs_user', JSON.stringify(userData)); // Guarda no navegador
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.detail };
      }
    } catch (error) {
      return { success: false, message: "Erro de ligação ao servidor" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('evs_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso nos componentes
export const useAuth = () => useContext(AuthContext);