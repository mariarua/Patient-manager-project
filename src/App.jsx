import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { useState, useEffect } from "react";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(patients));
  }, [patients]);

  const sapo = "sapo";

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
