import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-6xl font-bold text-gray-800">
            404
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-2xl font-semibold text-gray-600">
            Página No Encontrada
          </p>
          <p className="text-gray-500">
            Lo sentimos, la página que buscas no existe o fue movida.
          </p>
          <Button asChild>
            <Link to="/dashboard">Volver al Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
