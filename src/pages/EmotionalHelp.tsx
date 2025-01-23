import React from 'react';
import { Brain, Smile, Cloud, Sun } from 'lucide-react';

const EmotionalHelp = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Autoayuda Emocional</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Cómo te sientes hoy?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Feliz', 'Triste', 'Ansioso/a', 'Tranquilo/a'].map((emotion) => (
            <button
              key={emotion}
              className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Brain className="h-8 w-8 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Gestión Emocional</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Identifica tus emociones</li>
            <li>• Acepta lo que sientes</li>
            <li>• Explora el origen</li>
            <li>• Busca soluciones constructivas</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Smile className="h-8 w-8 text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Ejercicios Prácticos</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Respiración consciente</li>
            <li>• Escritura expresiva</li>
            <li>• Visualización positiva</li>
            <li>• Práctica de gratitud</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Cloud className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Manejo del Estrés</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Identifica los desencadenantes</li>
            <li>• Establece límites saludables</li>
            <li>• Practica el autocuidado</li>
            <li>• Busca apoyo cuando lo necesites</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Sun className="h-8 w-8 text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Hábitos Positivos</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Mantén una rutina diaria</li>
            <li>• Practica ejercicio regular</li>
            <li>• Cultiva relaciones positivas</li>
            <li>• Dedica tiempo al descanso</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmotionalHelp;