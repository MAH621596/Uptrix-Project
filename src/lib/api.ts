const BASE_URL = "http://localhost:5000/api/v1"; // current backend URL

export const api = {
  login: async (data: any) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return res.json();
  },
  
  register: async (data: any) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return res.json();
  },

  logout: async () => {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  },

  me: async () => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      method: "GET",
      credentials: "include", 
    });
    return res.json();
  }
};