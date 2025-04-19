import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../api/endpoints";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      login(data.user._id);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("Error en el login:", error);
      alert(error.message || "Error al iniciar sesión");
    },
  });
};
