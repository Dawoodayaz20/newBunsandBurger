import { createContext, useContext, useState, useEffect } from "react";
import { ID } from "appwrite";
import { account } from "./config";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ loading, setLoading ] = useState(true)

  const checkUser = async () => {
    try {
      const userData = await account.get();
      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);


  const signUp = async (email, password) => {
    try {
      const userAccount = await account.create(ID.unique(), email, password);
      if (userAccount) {
        console.log("Account created successfully!");
        await account.createEmailPasswordSession(email, password);
        const session = await account.get();
        setUser(session)
      } else {
        console.log("Account creation failed!");
      }
      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An error occurred during signUp";
    }
  };

  const signIn = async (email, password) => {
    try {
      await account.deleteSession('current').catch(()=> {});

      await account.createEmailPasswordSession(email, password);
      
      const user = await account.get();
      console.log(user)
      setUser(user);

      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An error occurred during signIn process";
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current").catch(()=> {});
      setUser(null);
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used inside of the AuthProvider!");
  }
  return context;
}