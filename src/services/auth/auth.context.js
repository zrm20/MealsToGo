import { createContext, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const authInstance = getAuth();

  onAuthStateChanged(authInstance, (userResult) => {
    setUser(userResult);
  })

  async function signup(email, password) {
    setIsLoading(true);
    setError(null);

    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
    } catch (err) {
      setError(err.message);
      console.error(err);
      setIsLoading(false);
    };

    if (userCredential) {
      setUser(userCredential);
    };
    setIsLoading(false);
  };

  async function login(email, password) {
    setIsLoading(true);
    setError(null);

    let userCredential;
    try {
      userCredential = await signInWithEmailAndPassword(authInstance, email, password);
    } catch (err) {
      setError(err.message);
      console.error(err);
      setIsLoading(false);
    };

    if (userCredential) {
      setUser(userCredential);
    };
    setIsLoading(false);
  };

  async function logout() {
    setIsLoading(true);
    setError(null);

    try {
      await signOut(authInstance);
      setUser(null);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used inside an AuthProvider');
  };

  return authContext;
}