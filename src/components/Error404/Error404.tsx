import Image from "next/image";
import Link from "next/link";

export function Error404() {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 text-center">
      <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
      <h2 className="text-3xl mb-5">
        ¡Ups! No se ha encontrado la vivienda que buscas
      </h2>
      <Image
        src="/assets/404-not-found.jpg"
        width={600}
        height={450}
        alt="Not found"
        className="rounded-lg shadow-light"
      />
      <div className="text-center mt-5">
        <Link
          href={"/"}
          className="px-3 py2 text-white rounded-lg bg-secondary"
        >
          Volver a la home
        </Link>
      </div>
    </div>
  );
}
