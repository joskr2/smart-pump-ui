import { useQuery } from "@tanstack/react-query";
import { fetchUserBalance } from "../api/endpoints";
import { useAuth } from "../contexts/AuthContext";

export const useUserBalance = () => {
  const { userId } = useAuth();
  return useQuery({
    queryKey: ["userBalance", userId],
    queryFn: () => fetchUserBalance(userId!),
    enabled: !!userId,
  });
};
