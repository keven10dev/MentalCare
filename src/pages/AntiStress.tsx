import React from 'react';
import { Coffee, Book, Music, Leaf } from 'lucide-react';

const AntiStress = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Técnicas Antiestrés</h1>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tip del Día</h2>
        <p className="text-lg">
          Toma pequeños descansos durante el día. Incluso 5 minutos de pausa
          pueden ayudarte a recargar energía y reducir el estrés.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Coffee className="h-8 w-8 text-amber-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Pausas Activas</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Estiramiento suave</li>
            <li>• Caminar 5 minutos</li>
            <li>• Ejercicios de respiración</li>
            <li>• Hidratación consciente</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Book className="h-8 w-8 text-indigo-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Actividades Relajantes</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Lectura tranquila</li>
            <li>• Dibujo o pintura</li>
            <li>• Escritura creativa</li>
            <li>• Jardinería</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Music className="h-8 w-8 text-rose-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Musicoterapia</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Escucha música relajante</li>
            <li>• Crea playlists temáticas</li>
            <li>• Practica la percusión suave</li>
            <li>• Canta tus canciones favoritas</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Leaf className="h-8 w-8 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Conexión con la Naturaleza</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Paseos al aire libre</li>
            <li>• Observación de plantas</li>
            <li>• Respiración al aire libre</li>
            <li>• Contacto con la tierra</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AntiStress;