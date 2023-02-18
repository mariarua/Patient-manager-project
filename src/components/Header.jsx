import Form from "./Form";
import PatientList from "./PatientList";
function Header() {
  return (
    <>
      <h1 className="text-stone-600 text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento de Pacientes{" "}
        <span className="text-pink-500">Veterinaria</span>
      </h1>
    </>
  );
}

export default Header;
