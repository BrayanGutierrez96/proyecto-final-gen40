import Referencias from "../Referencias/Referencias";

import { data } from "./howToOrderWeed.data";

function HowToOrderWeed() {
  const infoCards = data;

  return (
    <section
      className="bg-[#01100B] relative pb-50 flex flex-col gap-20 lg:gap-30"
      aria-labelledby="how-to-order-heading"
      role="main"
    >
      <Referencias />
      <article className="flex flex-col items-center justify-center text-white items-center justify-center mt-50 lg:mt-70 w-[50%] mx-auto gap-8">
        <h3
          id="how-to-order-heading"
          className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-center"
        >
          HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
        </h3>
        <p className="text-center text-[.5em] sm:text-[.7em] xl:text-[1em] text-neutral-200">
          Ordering weed online from Top Shelf BC is easy. We are proud to have
          made the process accessible across multiple platforms and simple to
          understand, meaning that more people can come to us to buy their
          cannabis products online.
        </p>
      </article>

      <article
        className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center w-[60%] gap-x-15 gap-y-30 lg:gap-y-50"
        aria-label="Step-by-step ordering process"
        role="region"
      >
        {/* Cards */}
        {infoCards.map((elemento) => {
          return (
            <article
              className="flex flex-col gap-10 min-h-[200px] max-h-[300px]"
              key={elemento.id}
              aria-labelledby={`step-${elemento.id}-title`}
              aria-describedby={`step-${elemento.id}-description`}
              role="article"
              tabIndex="0"
            >
              <div className="relative flex flex-col justify-center items-center">
                <img
                  src={elemento.icon}
                  alt={`Icon representing step ${elemento.id}: ${elemento.title}`}
                  className="w-30 md:w-40"
                  aria-hidden="true"
                />
                <span
                  className="absolute z-10 top-[-20px] left-4 xl:left-30"
                  aria-label={`Step ${elemento.id}`}
                >
                  <p className="bg-[#F2BC1B] rounded-full py-0 px-2 md:px-3 text-[1em] md:text-[1.5em] text-[#01100B]">
                    {elemento.id}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-7">
                <h2
                  id={`step-${elemento.id}-title`}
                  className="text-white text-xl font-bold text-center"
                >
                  {elemento.title}
                </h2>
                <p
                  id={`step-${elemento.id}-description`}
                  className="text-[#9D9EA2] text-[.6em] sm:text-[.7em] xl:text-[1em] text-center"
                >
                  {elemento.description}
                </p>
              </div>
            </article>
          );
        })}
      </article>

      <button
        className="mt-20 text-white font-semibold w-[50%] truncate sm:w-[25%] lg:w-[20%] mx-auto py-5 md:py-6 text-sm md:text-md font-bold bg-[#17AF26] border border-transparent sm:text-md xl:text-xl py-3 px-10 border rounded-3xl cursor-pointer hover:bg-[#0E7B0F] hover:text-[#F5F5F5] duration-200 ease-in-out"
        aria-label="Start ordering your cannabis products"
      >
        Choose your Weed
      </button>
    </section>
  );
}

export default HowToOrderWeed;
