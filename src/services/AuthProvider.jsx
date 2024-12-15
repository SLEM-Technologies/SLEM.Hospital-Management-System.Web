import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Token is kept in memory
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const loginAction = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/accounts/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
  
      // Check if the response indicates success
      if (res.status && res.statusCode === "00") {
        // Use the id from the response data as the token
        const token = res.data.id; // Use the ID as the token
        const user = { email: data.email }; // Adjust according to your actual user structure
  
        setUser(user);
        setToken(token); // Set the token in memory
        navigate("account/dashboard");
        return;
      }
  
      throw new Error(res.message || "Login failed");
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/accounts/Create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      
      // Check if the response indicates success
      if (res.status && res.statusCode === "00") {
        // Use the id from the response data as the token
        const token = res.data.id; // Use the ID as the token
        const user = { email: data.email }; // Adjust according to your actual user structure
  
        setUser(user);
        setToken(token); // Set the token in memory
        // navigate("auth/login");
        return;
      }
  
      throw new Error(res.message || "Registration failed");
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = () => {
    // setUser(null);
    setToken(null); // Clear token from memory
    navigate("auth/login");
  };

  return (
    <AuthContext.Provider value={{ token,user, loginAction,signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };

