
'use client';

import { useEffect, useState } from 'react';
import { FaCog, FaUserCircle, FaSlidersH, FaHistory } from 'react-icons/fa';

export default function Dashboard() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('email');
    const isauth = localStorage.getItem('isauthenticated');
    if (!stored || isauth !== 'true') {
      // No autenticado: redirigir al login
      window.location.href = '/';
      return;
    }
    setEmail(stored);
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('email');
      localStorage.removeItem('isauthenticated');
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-white">Bienvenido al Dashboard</h1>
        {email ? (
          <p className="text-lg text-gray-300">Has iniciado sesión como <span className="font-medium text-purple-300">{email}</span></p>
        ) : (
          <p className="text-lg text-gray-400">No estás autenticado. Serás redirigido al inicio.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-xl bg-gray-800 border border-purple-500 p-6 shadow-lg flex flex-col items-center">
            <FaCog className="text-3xl text-purple-400 mb-2" />
            <span className="text-xl font-bold text-purple-400 mb-2">Ajustes</span>
            <p className="text-gray-300 text-sm mb-4">Configura tus preferencias y opciones generales.</p>
            <button className="py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition">Ir a Ajustes</button>
          </div>
          <div className="rounded-xl bg-gray-800 border border-purple-500 p-6 shadow-lg flex flex-col items-center">
            <FaUserCircle className="text-3xl text-purple-400 mb-2" />
            <span className="text-xl font-bold text-purple-400 mb-2">Perfil</span>
            <p className="text-gray-300 text-sm mb-4">Edita tu información personal y foto de perfil.</p>
            <button className="py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition">Ver Perfil</button>
          </div>
          <div className="rounded-xl bg-gray-800 border border-purple-500 p-6 shadow-lg flex flex-col items-center">
            <FaSlidersH className="text-3xl text-purple-400 mb-2" />
            <span className="text-xl font-bold text-purple-400 mb-2">Configuración</span>
            <p className="text-gray-300 text-sm mb-4">Ajusta la seguridad y notificaciones de tu cuenta.</p>
            <button className="py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition">Configurar Cuenta</button>
          </div>
          <div className="rounded-xl bg-gray-800 border border-purple-500 p-6 shadow-lg flex flex-col items-center">
            <FaHistory className="text-3xl text-purple-400 mb-2" />
            <span className="text-xl font-bold text-purple-400 mb-2">Actividad Reciente</span>
            <p className="text-gray-300 text-sm mb-4">Consulta tus últimos movimientos y acciones.</p>
            <button className="py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition">Ver Actividad</button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handleLogout}
            className="py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition"
          >
            Cerrar sesión
          </button>
          <a href="#" onClick={() => window.location.reload()} className="py-2 px-4 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium transition">Refrescar</a>
        </div>
      </div>
    </div>
  );
}
