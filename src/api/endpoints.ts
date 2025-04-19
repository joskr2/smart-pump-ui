import type { User } from "@/types";
import apiClient from "./client";

interface LoginResponse {
  message: string;
  user: User;
}
interface BalanceResponse {
  balance: string;
}
interface UpdateUserResponse {
  message: string;
  user: User;
}

export const postLogin = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const { data } = await apiClient.post<LoginResponse>(
    "/auth/login",
    credentials
  );
  return data;
};

export const fetchUserDetails = async (userId: string): Promise<User> => {
  if (!userId) throw new Error("User ID is required for fetching details");
  const { data } = await apiClient.get<User>(`/user/${userId}/details`);
  return data;
};

export const fetchUserBalance = async (
  userId: string
): Promise<BalanceResponse> => {
  if (!userId) throw new Error("User ID is required for fetching balance");
  const { data } = await apiClient.get<BalanceResponse>(
    `/user/${userId}/balance`
  );
  return data;
};

export const putUserDetails = async ({
  userId,
  updates,
}: {
  userId: string;
  updates: Partial<User>;
}): Promise<UpdateUserResponse> => {
  if (!userId) throw new Error("User ID is required for updating details");
  const { data } = await apiClient.put<UpdateUserResponse>(
    `/user/${userId}/details`,
    updates
  );
  return data;
};
