import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = async (credentials) => {
      // Simulating API validation (Replace with actual API call)
      if (credentials.username === "test" && credentials.password === "password") {
        setUser({ username: credentials.username });
        return true; // Successful login
      } else {
        alert("Invalid Credentials");
        return false; // Failed login
      }
    };
  
    const logout = () => {
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export default AuthContext;
