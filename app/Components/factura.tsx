// components/InvoiceForm.js
import React, { ChangeEvent, useState } from 'react';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    truckNumber: '',
    driverName: '',
    tripDate: '',
    amount: '',
    description: '',
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registro de Factura de Viaje</h2>
      <div className="mb-4">
        <label htmlFor="truckNumber" className="block text-sm font-medium text-gray-700">
          Número de Camión
        </label>
        <input
          type="text"
          name="truckNumber"
          id="truckNumber"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">
          Nombre del Conductor
        </label>
        <input
          type="text"
          name="driverName"
          id="driverName"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tripDate" className="block text-sm font-medium text-gray-700">
          Fecha del Viaje
        </label>
        <input
          type="date"
          name="tripDate"
          id="tripDate"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Monto
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Registrar Factura
      </button>
    </form>
  );
};

export default InvoiceForm;
