import Image from "next/image";

export function Form() {
  return (
    <div className="px-3">
      <div className="py-4 px-3 rounded-lg shadow-light">
        <div className="flex gap-4">
          <Image
            src="/assets/comercial.png"
            alt="Comercial"
            width={50}
            height={50}
            className="rounded-full border-2 border-secondary"
          />

          <div>
            <p>Alberto Soler</p>
            <p className="text-secondary font-semibold">Comercial</p>
          </div>
        </div>

        <div className="my-5">
          <div>
            <label className="text-sm text-secondary">Nombre</label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
              />
            </div>
          </div>

          <div className="my-5">
            <div>
              <label className="text-sm text-secondary">Teléfono</label>
              <div className="mt-2">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
                />
              </div>
            </div>

            <div className="my-5">
              <div>
                <label className="text-sm text-secondary">Descripción</label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    rows={3}
                    className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4 my-4">
                <button className="bg-secondary px-4 py-2 rounded-lg text-white text-sm">
                  Enviar mensaje
                </button>
                <button className="border-secondary border-[1px] px-2 py-2 rounded-lg text-secondary text-sm">
                  Llamar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
