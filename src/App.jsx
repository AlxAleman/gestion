import { useState } from 'react';
import Formulario from './componentes/Formulario';
import TarjetaPaciente from './componentes/TarjetaPaciente';

function App() {
  const [pacientes, setPacientes] = useState([]);

  const handleAddPatient = (paciente) => {
    setPacientes([...pacientes, paciente]);
  };

  return (
    <div className="p-6">
      <Formulario onAddPatient={handleAddPatient} />
      <div className="mt-6 space-y-4">
        {pacientes.map((paciente, index) => (
          <TarjetaPaciente key={index} paciente={paciente} />
        ))}
      </div>
    </div>
  );
}

export default App;
