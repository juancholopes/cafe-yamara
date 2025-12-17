"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { authService } from "@/services/auth.service";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await authService.register({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      
      router.push("/login?registered=true");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && err.message
          ? err.message
          : "Error al registrarse. Inténtalo de nuevo.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-(--primary-color)">Crear Cuenta</h1>
          <p className="text-(--primary-color)/80">Únete a la comunidad de Café Yamara</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Nombre Completo"
            type="text"
            name="fullName"
            placeholder="Juan Pérez"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            label="Correo Electrónico"
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Contraseña"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            label="Confirmar Contraseña"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && (
            <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full flex justify-center"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-(--primary-color)">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="font-bold hover:underline decoration-2 underline-offset-2"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
