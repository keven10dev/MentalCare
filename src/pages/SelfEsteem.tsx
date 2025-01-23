import React from 'react';
import { Shield, Star, Heart, Trophy } from 'lucide-react';

const SelfEsteem = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mejora tu Autoestima</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Shield className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Afirmaciones Positivas</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Soy capaz y valioso/a</li>
            <li>• Merezco amor y respeto</li>
            <li>• Confío en mis decisiones</li>
            <li>• Aprendo de mis experiencias</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Star className="h-8 w-8 text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Ejercicios Diarios</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Escribe tres logros del día</li>
            <li>• Practica el autocuidado</li>
            <li>• Celebra tus pequeñas victorias</li>
            <li>• Establece límites saludables</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-rose-900 dark:to-teal-900 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recordatorio Importante</h2>
        <p className="text-lg">
          Tu valor no está determinado por tus logros o lo que otros piensen de ti.
          Eres valioso/a por ser quien eres.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Heart className="h-8 w-8 text-rose-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Autocuidado</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Dedica tiempo a tus hobbies</li>
            <li>• Practica la meditación</li>
            <li>• Mantén un diario personal</li>
            <li>• Cuida tu salud física</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Trophy className="h-8 w-8 text-amber-500 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Logros y Metas</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Establece metas alcanzables</li>
            <li>• Divide grandes objetivos</li>
            <li>• Celebra cada progreso</li>
            <li>• Mantén un registro de éxitos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfEsteem;