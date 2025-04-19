import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          SMART Pump
        </Link>
        <div>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="mr-4 hover:text-gray-300">
                Dashboard
              </Link>
              <Link to="/profile" className="mr-4 hover:text-gray-300">
                Perfil
              </Link>
              <Button onClick={handleLogout} variant="secondary" size="sm">
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
