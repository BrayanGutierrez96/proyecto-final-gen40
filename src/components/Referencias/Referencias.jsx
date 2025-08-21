function Referencias() {
  return (
    <section
      className={`left-1/2 transform -translate-x-1/2 absolute top-[-150px]  lg:top-[-170px] z-10 flex bg-[url(./imagenReferencias.png)] bg-no-repeat bg-center bg-cover flex-col lg:flex-row sm:justify-evenly lg:justify-between  justify-center items-center px-4 lg:px-20 rounded-3xl py-15 lg:py-30 gap-8 text-white w-[90%] mx-auto`}
    >
      <article className="flex flex-col items-center justify-center lg:justify-start lg:items-start select-none gap-6 sm:gap-8">
        <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-center ">
          REFER A FRIENDS
        </h2>
        <p className="text-md md:text-2xl font-semibold">
          And get <span className="text-yellow-500 ">$30!</span>
        </p>
      </article>
      <article>
        <button className="text-sm font-bold bg-[#17AF26] border border-transparent sm:text-md xl:text-xl py-3 px-10 border rounded-3xl cursor-pointer hover:bg-[#0E7B0F] hover:text-[#F5F5F5] duration-200 ease-in-out ">
          Refer Here
        </button>
      </article>
    </section>
  );
}

export default Referencias;
