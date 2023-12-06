import { MdSend } from "react-icons/md";

export default function MessageSection() {
  return (
    <div className="relative w-full bg-slate-300">
      <div className="absolute flex items-center justify-center w-full py-5 mx-auto">
        <div className="px-4 py-2 text-center rounded-full bg-slate-50">
          <span className="text-xl font-semibold text-slate-800">
            @DenisArsyatya
          </span>
        </div>
      </div>
      <div className="w-full px-4 py-4">
        <div className="flex max-w-md gap-2 py-1 mr-auto w-fit">
          <div>
            <span className="font-semibold text-blue-700">
              {">"}{">"}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between px-4 py-2 rounded-xl bg-slate-50">
            <div>
              <span>
                Ini adalah contoh pesan yang akan ditampilkan di sini. Dan ini adalah kalimat kedua.
              </span>
            </div>
            <div className="pl-4 ml-auto text-sm text-slate-400">
              <span>
                7:20 AM
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-w-md gap-2 py-1 ml-auto w-fit">
          <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-blue-500 rounded-xl">
            <div>
              <span className="text-white">
                Coba kirim pesan ke saya.
              </span>
            </div>
            <div className="pl-4 ml-auto text-sm text-slate-200">
              <span>
                7:45 AM
              </span>
            </div>
          </div>
          <div>
            <span className="font-semibold text-blue-700">
              {"<"}{"<"}
            </span>
          </div>
        </div>
                <div className="flex max-w-md gap-2 py-1 mr-auto w-fit">
          <div>
            <span className="font-semibold text-blue-700">
              {">"}{">"}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between px-4 py-2 rounded-xl bg-slate-50">
            <div>
              <span>
                Halo Ini Pesan Baru Banget
              </span>
            </div>
            <div className="pl-4 ml-auto text-sm text-slate-400">
              <span>
                8:00 AM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full px-8 py-4">
        <label className="flex items-center justify-center w-full px-4 py-4 mx-auto rounded-full bg-slate-50 hover:cursor-text">
          <div className="w-full h-full">
            <input className="w-full h-full px-4 bg-transparent border-none outline-none" type="text" placeholder="Type your message here" />
          </div>
          <div className="h-full">
            <button>
              <MdSend className="text-blue-500" size={35} />
            </button>
          </div>
        </label>
      </div>
    </div>
  )
};
