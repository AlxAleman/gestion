import React from 'react';

function TarjetaPaciente({ paciente }) {
  const { nombre, apellido, edad, fechaIngreso, sintomas } = paciente;

  return (
    <div className="flex items-center max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{nombre} {apellido}</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Edad:</span> {edad}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Fecha de Ingreso:</span> {fechaIngreso}
        </p>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Síntomas:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {sintomas.length > 0 ? (
              sintomas.map((sintoma, index) => (
                <li key={index}>{sintoma}</li>
              ))
            ) : (
              <li>No se han ingresado síntomas.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TarjetaPaciente;
