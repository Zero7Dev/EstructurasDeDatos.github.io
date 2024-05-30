// components/TripForm.js
"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

const TripForm = () => {
  const [formData, setFormData] = useState({
    truckId: '',
    driverId: '',
    routeId: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Agregar lógica para enviar los datos al servidor
  };

  // Array de campos del formulario
  const formFields = [
    { name: 'truckId', label: 'ID de Camión', type: 'text' },
    { name: 'driverId', label: 'ID de Conductor', type: 'text' },
    { name: 'routeId', label: 'ID de Ruta', type: 'text' },
    { name: 'startTime', label: 'Hora de Inicio', type: 'datetime-local' },
    { name: 'endTime', label: 'Hora de Fin', type: 'datetime-local' },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registro de Viaje</h2>
      {formFields.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Registrar Viaje
      </button>
    </form>
  );
};

export default TripForm;
