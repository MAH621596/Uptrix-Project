"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.me();

        console.log("ME RESPONSE:", res);

        if (res?.data) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("ME ERROR:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const login = async (values: any) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data);

      if (data?.success) {
        setUser(data.data);
        return data;
      }

      return data;
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      return { success: false };

    } finally {
      setLoading(false);
    }

  };

  const register = async (data: any) => {
    return await api.register(data);
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);