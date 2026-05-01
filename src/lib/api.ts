const BASE_URL = process.env.HOSTED_API_URL || process.env.LOCAL_API_URL;

export const api = {
  login: async (data: any) => { 
    const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return res.json();
  },
  
  register: async (data: any) => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return res.json();
  },

  logout: async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  },

  me: async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/me`, {
      method: "GET",
      credentials: "include", 
    });
    return res.json();
  }
};