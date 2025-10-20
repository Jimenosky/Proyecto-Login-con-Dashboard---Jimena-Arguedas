'use client';

import { useState } from "react";

// Estilos personalizados para el efecto tornasol
const styles = `
  .animate-gradient-text {
    background-size: 200% auto;
    animation: textGradient 3s linear infinite;
  }
  
  @keyframes textGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

  //CUANDO LA INFO ES ENVIADA SE EJECUTA ESTA FUNCION
  const handleSubmit = (e) => {
  e.preventDefault();

  //MOSTRAR LA INFORMACION DE INTERES AL USUARIO
  console.log("Email:", email);
  console.log("Password:", password);

  // Validar credenciales (ejemplo simple)
    if (email === "admin@gmail.com" && password === "password123") {
      // Guardar en localStorage y redirigir al dashboard
      localStorage.setItem("email", email);
      localStorage.setItem("isauthenticated", "true");
      // Opcional: mostrar un mensaje breve
      // alert("Credenciales correctas. Redirigiendo...");
      window.location.href = "/dashboard";
      return;
    }

  // Credenciales incorrectas
  alert("Credenciales incorrectas");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <style>{styles}</style>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-black tracking 
          bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 text-transparent bg-clip-text 
          animate-gradient-text hover:scale-105 transition-transform duration-300 cursor-default
          drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Ingresa tus credenciales para acceder
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-purple-500 placeholder-gray-400 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Ingresa tu email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-purple-500 placeholder-gray-400 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Ingresa tu contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-500 rounded bg-gray-800"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border-0 text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 animate-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              style={{
                backgroundSize: '200% auto'
              }}
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
                Regístrate aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
    
