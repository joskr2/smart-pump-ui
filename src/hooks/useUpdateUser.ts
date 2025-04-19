import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putUserDetails } from "../api/endpoints";
import { useAuth } from "../contexts/AuthContext";
import type { User } from "@/types";


export const useUpdateUser = () => {
  const { userId } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updates: Partial<User>) =>
      putUserDetails({ userId: userId!, updates }),
    onSuccess: (data) => {
      console.log("Usuario actualizado:", data);
      queryClient.invalidateQueries({ queryKey: ["userProfile", userId] });
      alert("Perfil actualizado con éxito!");
    },
    onError: (error) => {
      console.error("Error actualizando usuario:", error);
      alert(error.message || "Error al actualizar el perfil");
    },
  });
};
