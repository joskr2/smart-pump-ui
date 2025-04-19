import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string | null;
  login: (id: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string | null>(() =>
    localStorage.getItem("userId")
  );

  const login = useCallback((id: string) => {
    setUserId(id);
    localStorage.setItem("userId", id);
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    localStorage.removeItem("userId");
  }, []);

  const isAuthenticated = !!userId;

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
