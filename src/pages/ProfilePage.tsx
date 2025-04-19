import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useUserProfile } from "../hooks/useUserProfile";
import { useUpdateUser } from "../hooks/useUpdateUser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Skeleton } from "@/components/ui/skeleton";

const profileSchema = z.object({
  name: z.object({
    first: z.string().min(1, "Nombre requerido"),
    last: z.string().min(1, "Apellido requerido"),
  }),
  age: z.coerce.number().int().positive().min(18).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  company: z.string().optional(),
  picture: z.string().url().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfilePage: React.FC = () => {
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: userError,
  } = useUserProfile();
  const { mutate: updateUser, isPending: isUpdatingUser } = useUpdateUser();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: { first: "", last: "" },
      age: undefined,
      phone: "",
      address: "",
      company: "",
      picture: "",
    },
  });

  useEffect(() => {
    if (userData) {
      form.reset({
        name: userData.name,
        age: userData.age,
        phone: userData.phone,
        address: userData.address,
        company: userData.company,
        picture: userData.picture,
      });
    }
  }, [userData, form.reset, form]);

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Actualizando perfil con:", data);
    const updatesToSend = { ...data };
    if (updatesToSend.age === undefined) delete updatesToSend.age;
    if (updatesToSend.phone === undefined) delete updatesToSend.phone;
    if (updatesToSend.address === undefined) delete updatesToSend.address;
    if (updatesToSend.company === undefined) delete updatesToSend.company;
    if (updatesToSend.picture === undefined) delete updatesToSend.picture;

    updateUser(updatesToSend);
  };

  if (isLoadingUser) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Perfil</h1>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isErrorUser) {
    return (
      <p className="text-red-600">
        Error al cargar el perfil: {userError?.message}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            {userData?.name?.first} {userData?.name?.last}
          </CardTitle>
          <CardDescription>Actualiza tu información personal.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-2">
            <p>
              <strong>Email:</strong> {userData?.email}
            </p>
            <p>
              <strong>Balance:</strong> {userData?.balance}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name.first"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name.last"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Edad (Opcional)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono (Opcional)</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección (Opcional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isUpdatingUser || !form.formState.isDirty}
              >
                {isUpdatingUser ? "Actualizando..." : "Guardar Cambios"}
              </Button>
              {!form.formState.isDirty && (
                <p className="text-sm text-gray-500 mt-2">
                  No hay cambios para guardar.
                </p>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
