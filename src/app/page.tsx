import Image from "next/image";

import Logo from "@/assets/logo.png"
import Builder from "@/assets/builder2.png";
import { BubbleLoading, PoweredByQuatrobus } from "@/components/svg";

export default function Home() {
  return (
    <>
      <header className="bg-white border-b w-full h-[10dvh] shadow-md">
        <div className="container h-[8dvh] md:h-[10dvh] text-center">
          <Image
            src={Logo}
            alt="bg"
            className="max-h-[10dvh] h-[8dvh] pt-[1dvh] w-auto mx-auto"
          />
        </div>
      </header>
      <main className="container overflow-hidden min-h-[80dvh]">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 justify-center items-center">
          <div className="md:scale-110 md:translate-x-10 mx-auto">
            <h2 className="text-4xl pl-5 font-semibold inline-flex pb-2">
              <span>Pr</span>
              <BubbleLoading className="text-2xl translate-y-2" />
              <span>ximamente</span>
              <span className="absolute pl-12 -translate-y-2">´</span>
            </h2>
            <h3 className="bg-orange-500 text-white px-5 py-1 rounded-full font-medium text-2xl w-fit">
              Venta de pasajes online
            </h3>
            <p className="text-2xl pl-5">en nuestra web</p>
          </div>
          <div className="max-sm:mt-16">
            <Image src={Builder} alt="bg" className="" />
          </div>
        </div>
      </main>
      <footer className="bg-red-500 w-full">
        <div className="container min-h-24 h-[10dvh] py-5 text-center mx-auto">
          <PoweredByQuatrobus className="text-white mx-auto" />
          <p className="text-white text-sm">
            QuatroBus © 2024. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
