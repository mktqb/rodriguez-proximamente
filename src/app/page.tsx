import Image from "next/image";

import Logo from "@/assets/logo.png"
import Builder from "@/assets/builder.png";
import { PoweredByQuatrobus } from "@/components/svg";

export default function Home() {
  return (
    <>
      <header className="bg-white border-b w-full h-[10dvh] shadow-md">
        <div className="container h-[8dvh] md:h-[10dvh]">
          <Image src={Logo} alt="bg" className="max-h-[10dvh] h-[8dvh] pt-[1dvh] w-auto" />
        </div>
      </header>
      <main className="container overflow-hidden min-h-[80dvh]">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 justify-center items-center">
          <div className="">
            <h2 className="text-4xl pl-5 font-semibold">Próximamente</h2>
            <h3 className="bg-red-600 text-white px-5 py-1 rounded-full font-medium text-xl w-fit">
              Venta de pasajes online
            </h3>
            <p className="text-xl pl-5">en nuestra web</p>
          </div>
          <div className="">
            <Image src={Builder} alt="bg" className="" />
          </div>
        </div>
      </main>
      <footer className="bg-red-500 w-full">
        <div className="container h-[10dvh] py-5">
          <PoweredByQuatrobus className="text-white"/>
        </div>
      </footer>
    </>
  );
}
