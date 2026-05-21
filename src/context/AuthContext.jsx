import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const API_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "https://my-backend-1-avpd.onrender.com";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const syncAxiosToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };

  const saveAuth = (token, userData) => {
    localStorage.setItem("br30_token", token);
    localStorage.setItem("br30_user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("username", userData?.name || "User");
    localStorage.setItem("role", userData?.role || "user");
    syncAxiosToken(token);
    setUser(userData);
  };

  const clearAuth = () => {
    localStorage.removeItem("br30_token");
    localStorage.removeItem("br30_user");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    syncAxiosToken(null);
    setUser(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("br30_token") || localStorage.getItem("token");

    const storedUser = localStorage.getItem("br30_user") || localStorage.getItem("userData");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        syncAxiosToken(storedToken);

        if (!localStorage.getItem("br30_token")) {
          localStorage.setItem("br30_token", storedToken);
        }

        if (!localStorage.getItem("br30_user")) {
          localStorage.setItem("br30_user", JSON.stringify(parsedUser));
        }
      } catch (err) {
        clearAuth();
      }
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      const data = response.data;
      const token = data.token;
      const userData = data.user || data.data?.user;

      if (token && userData) {
        saveAuth(token, userData);

        return {
          success: true,
          role: userData.role || "user",
          user: userData,
        };
      }

      return {
        success: false,
        message: data.msg || data.message || "Login failed!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.msg || error.response?.data?.message || "Invalid Credentials!",
      };
    }
  };

  const logout = () => {
    clearAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
        saveAuth,
        clearAuth,
        API_URL,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
