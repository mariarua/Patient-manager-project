function Error({ message }) {
  return (
    <div className="text-red-800 text-center p-3 uppercase font-bold mb-3 ">
      <p>{message}</p>
    </div>
  );
}

export default Error;
