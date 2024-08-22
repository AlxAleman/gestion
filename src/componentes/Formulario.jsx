import React, { useState } from 'react';

function Formulario({ onAddPatient }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [sintomas, setSintomas] = useState([]);
  const [nuevoSintoma, setNuevoSintoma] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !edad || !fechaIngreso) return;

    const paciente = {
      nombre,
      apellido,
      edad,
      fechaIngreso,
      sintomas
    };

    onAddPatient(paciente);

    // Limpiar formulario
    setNombre('');
    setApellido('');
    setEdad('');
    setFechaIngreso('');
    setSintomas([]);
    setNuevoSintoma('');
  };

  const handleAddSintoma = () => {
    if (nuevoSintoma) {
      setSintomas([...sintomas, nuevoSintoma]);
      setNuevoSintoma('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Formulario de Paciente</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
            <input
              id="edad"
              name="edad"
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="fechaIngreso" className="block text-sm font-medium text-gray-700">Fecha de Ingreso</label>
            <input
              id="fechaIngreso"
              name="fechaIngreso"
              type="date"
              value={fechaIngreso}
              onChange={(e) => setFechaIngreso(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sintomas" className="block text-sm font-medium text-gray-700">Síntomas</label>
            <div className="flex items-center">
              <input
                id="sintomas"
                name="sintomas"
                type="text"
                value={nuevoSintoma}
                onChange={(e) => setNuevoSintoma(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={handleAddSintoma}
                className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Agregar
              </button>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {sintomas.map((sintoma, index) => (
                <li key={index}>{sintoma}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => {
              setNombre('');
              setApellido('');
              setEdad('');
              setFechaIngreso('');
              setSintomas([]);
              setNuevoSintoma('');
            }}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
