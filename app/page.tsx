import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">Bienvenido al Sistema de Seguimiento de Camiones</h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Este sistema te permite rastrear en tiempo real la ubicación y el estado de tus camiones. ¡Mantente informado y controla tu flota de manera eficiente!
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-600">Visualiza estadísticas, gráficos e información en tiempo real sobre tus camiones y rutas.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Mapa en Tiempo Real</h2>
          <p className="text-gray-600">Sigue la ubicación exacta de cada camión en un mapa interactivo en tiempo real.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Alertas y Notificaciones</h2>
          <p className="text-gray-600">Recibe alertas y notificaciones sobre eventos importantes relacionados con tu flota de camiones.</p>
        </div>
      </div>
    </main>
  );
}
