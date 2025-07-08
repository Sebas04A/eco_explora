// src/app/components/modals/LoginModal.tsx
'use client';
import { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginModal({ onClose, onSwitchToRegister }: LoginModalProps) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Reemplaza la URL con la de tu API de backend
      const res = await fetch('http://localhost:3001/api/usuarios/login', { // Ruta de login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Correo: correo, Contrasena: contrasena }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al iniciar sesión.');
      }
      
      // Aquí guardarías el token, por ejemplo en localStorage
      localStorage.setItem('authToken', data.token);
      
      // Cierra el modal y podrías recargar la página o actualizar el estado de la UI
      onClose();
      window.location.reload(); // Simple forma de actualizar el estado de login

     } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('Ocurrió un error inesperado.');
    }
}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="correo-login">Correo Electrónico</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" type="email" id="correo-login" value={correo} onChange={e => setCorreo(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="contrasena-login">Contraseña</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" type="password" id="contrasena-login" value={contrasena} onChange={e => setContrasena(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">Entrar</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          ¿No tienes una cuenta?{' '}
          <button onClick={onSwitchToRegister} className="text-green-600 hover:underline">Regístrate</button>
        </p>
      </div>
    </div>
  );
}
