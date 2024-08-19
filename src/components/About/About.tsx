import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className="grid gap-4 px-4 my-8 md:py-44 md:px-36 md:grid-cols-2">
      <div
        className="flex flex-col items-center justify-center max-w-xl mb-7"
        id="about"
      >
        <h4 className="text-secondary">Sobre nosotros</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Más de 1.000 viviendas para vender y comprar en España
        </h2>
        <p className="mb-10 mt-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, sit? Distinctio dicta nulla in, accusantium dolor
          maxime fugiat odio unde cupiditate, placeat aut. Laboriosam, iste
          minima obcaecati fugit id sapiente?
        </p>
        <button className="px-4 py-3 bg-secondary text-white transition-all duration-200 rounded-lg hover:bg-black">
          Cargar más
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/house.jpeg"
          width={350}
          height={450}
          alt="about"
          className="w-auto h-auto"
          priority
        ></Image>
      </div>
    </Transition>
  );
}
