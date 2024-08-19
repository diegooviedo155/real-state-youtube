import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";

export function JoinCommunity() {
  return (
    <Transition className="grid items-center px-4 py-8 md:p-44 md:px-36 md:grid-cols-2 bg-secondary">
      <h3 className="text-white max-w-lg text-4xl font-semibold">
        Únete a nuestra comunidad
      </h3>
      <div className="mx-auto mt-5 md:mx-auto">
        <button className="flex items-center justify-between px-7 w-fit py-5 bg-black text-white transition-all duration-100 rounded-lg hover:bg-black/70">
          <FaRegPaperPlane />
          <span className="ml-3">Únete a la comunidad</span>
        </button>
      </div>
    </Transition>
  );
}
