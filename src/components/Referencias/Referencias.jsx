import imagenReferencias from "../../assets/imagenReferencias.png";

function Referencias() {
  return (
    <section
      className={`flex bg-[url(./imagenReferencias.png)] bg-no-repeat bg-center bg-cover flex-col items-center justify-center p-4 rounded-lg w-[80%] py-30`}
    >
      <article className="flex flex-col items-center justify-center text-white text-2xl cursor-pointer hover:text-red-200">
        <h2>REFER A FRIENDS</h2>
        <p>And get $30!</p>
      </article>
      <article>
        <button>Refer Here</button>
      </article>
    </section>
  );
}

export default Referencias;
