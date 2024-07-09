import { ArrowRightIcon, CalendarIcon, MapPinIcon, Settings2Icon, UserRoundPlusIcon } from "lucide-react";
import { useState } from "react";
import { PlannerLogo } from "./components/svg/logo";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);

  const openGuestInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestInput = () => {
    setIsGuestsInputOpen(false);
  };


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <PlannerLogo className="h-10 w-auto" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua proxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPinIcon className="size-5 text-zinc-400" />
              <input type="text" disabled={isGuestsInputOpen} placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:text-zinc-400" />
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-5 text-zinc-400" />
              <input type="text" disabled={isGuestsInputOpen} placeholder="Quando você vai?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none disabled:text-zinc-400" />
            </div>

            <div className="w-px bg-zinc-800 h-6" />

            {isGuestsInputOpen ? (
              <button onClick={closeGuestInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-zinc-700">
                Alterar local/data
                <Settings2Icon className="size-5" />
              </button>
            ) : (
              <button onClick={openGuestInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400">
                Continuar
                <ArrowRightIcon className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen ? (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlusIcon className="size-5 text-zinc-400" />
                <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

              <div className="w-px bg-zinc-800 h-6" />

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400">
                Confirmar viagem
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          ) : null}
        </div>


        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">política de privacidade</a>.
        </p>
      </div>
    </div>
  )
}
