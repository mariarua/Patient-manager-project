import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ patients, setPatients, patient, setPatient }) {
  const [name, setName] = useState("");
  const [proprietary, setProprietary] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setProprietary(patient.proprietary);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, proprietary, email, date, symptom].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const oPatient = {
      name,
      proprietary,
      email,
      date,
      symptom,
    };

    if (patient.id) {
      oPatient.id = patient.id;
      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? oPatient : patientState
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      oPatient.id = generarId();
      setPatients([...patients, oPatient]);
    }

    setName("");
    setProprietary("");
    setEmail("");
    setDate("");
    setSymptom("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-stone-600 text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-stone-600 text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-pink-500 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-stone-600 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-stone-600 uppercase font-bold"
          >
            Nombre Del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={proprietary}
            onChange={(e) => setProprietary(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-stone-600 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-stone-600 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-gray-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-stone-600 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-pink-500 w-full p-3 text-white uppercase font-bold hover:bg-pink-600 cursor-pointer transition-all"
          value={patient.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

export default Form;
