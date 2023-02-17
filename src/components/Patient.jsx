function Patient({ patient, setPatient, deletePatient }) {
  const handleDelete = () => {
    const answer = confirm("Deseas eliminar este paciente?");
    if (answer) {
      deletePatient(patient.id);
    }
  };
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{patient.proprietary}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">{patient.date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{patient.symptom}</span>
      </p>
      <div className="flex justify-between m-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 border-solid border-2 border-red-500 text-red-500 font-bold uppercase rounded-lg"
          type="button"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient;
