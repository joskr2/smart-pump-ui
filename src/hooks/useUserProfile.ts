import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../api/endpoints";
import { useAuth } from "../contexts/AuthContext";

export const useUserProfile = () => {
  const { userId } = useAuth();

  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserDetails(userId!),
    enabled: !!userId,
  });
};
