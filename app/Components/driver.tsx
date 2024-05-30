"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

const DriverForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    licenseNumber: '',
    phoneNumber: '',
    email: '',
    status: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  };

  // Array de campos del formulario
  const formFields = [
    { name: 'firstName', label: 'Nombre', type: 'text' },
    { name: 'lastName', label: 'Apellido', type: 'text' },
    { name: 'licenseNumber', label: 'Número de Licencia', type: 'text' },
    { name: 'phoneNumber', label: 'Número de Teléfono', type: 'text' },
    { name: 'email', label: 'Correo Electrónico', type: 'email' },
    { name: 'status', label: 'Estado', type: 'select', options: ['Activo', 'Inactivo'] },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registro de Conductor</h2>
      {formFields.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              id={field.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Seleccione un estado</option>
              {field.options.map((option, index) => (
                <option key={index} value={option.toLowerCase()}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required={field.type !== 'select'}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Registrar Conductor
      </button>
    </form>
  );
};

export default DriverForm;
