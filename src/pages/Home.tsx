import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, Coffee, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a MentalCare</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tu espacio seguro para el bienestar emocional y mental
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/self-esteem"
          className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart className="h-12 w-12 text-rose-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Autoestima</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descubre herramientas para fortalecer tu amor propio
          </p>
        </Link>

        <Link
          to="/emotional-help"
          className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Brain className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Autoayuda Emocional</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Recursos para gestionar tus emociones
          </p>
        </Link>

        <Link
          to="/relaxation"
          className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Sparkles className="h-12 w-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Relajación</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Técnicas y ejercicios para encontrar la calma
          </p>
        </Link>

        <Link
          to="/anti-stress"
          className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Coffee className="h-12 w-12 text-amber-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Antiestrés</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Estrategias para manejar el estrés y la ansiedad
          </p>
        </Link>

        <Link
          to="/ai-chat"
          className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <MessageCircle className="h-12 w-12 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Chat con IA</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Conversa con nuestra IA para recibir apoyo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;