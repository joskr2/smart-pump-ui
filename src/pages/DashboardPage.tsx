import React from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import { useUserBalance } from "../hooks/useUserBalance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardPage: React.FC = () => {
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: userError,
  } = useUserProfile();
  const {
    data: balanceData,
    isLoading: isLoadingBalance,
    isError: isErrorBalance,
    error: balanceError,
  } = useUserBalance();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bienvenido</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingUser && <Skeleton className="h-6 w-40" />}
          {isErrorUser && (
            <p className="text-red-600">
              Error al cargar datos del usuario: {userError?.message}
            </p>
          )}
          {userData && <p className="text-xl">¡Hola, {userData?.name?.first}!</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Balance de Cuenta</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingBalance && <Skeleton className="h-8 w-32" />}
          {isErrorBalance && (
            <p className="text-red-600">
              Error al cargar el balance: {balanceError?.message}
            </p>
          )}
          {balanceData && (
            <p className="text-3xl font-semibold">{balanceData?.balance}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
