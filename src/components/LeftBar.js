export default function LeftBar() {
  return (
    <div className="w-1/5 h-screen bg-slate-200">
      <div className="flex items-center justify-center h-16 bg-blue-500">
        <span className="text-2xl font-bold text-white">
          @WaxArsatia
        </span>
      </div>
      <label className="flex items-center w-4/5 h-10 mx-auto my-4 bg-white rounded-full hover:cursor-text">
        <input className="w-full h-full px-4 bg-transparent border-none outline-none" type="text" placeholder="Search Here" />
      </label>
      <div className="grid h-20 grid-cols-3 gap-2 px-6 py-4 border-t-2 bg-slate-100 border-t-blue-500">
        <div className="col-span-3">
          <span className="font-semibold text-slate-800">
            @DenisArsyatya
          </span>
        </div>
        <div className="col-span-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-slate-700">
            <span className="font-semibold text-blue-700">{">"}{">"}</span> Halo Ini Pesan Baru Banget
          </span>
        </div>
        <div className="text-end text-slate-700">
          <span>
            8:00 AM
          </span>
        </div>
      </div>
      <div className="grid h-20 grid-cols-3 gap-2 px-6 py-4 border-t-2 bg-slate-100 border-t-blue-500">
        <div className="col-span-3">
          <span className="font-semibold text-slate-800">
            @IniBudi
          </span>
        </div>
        <div className="col-span-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-slate-700">
            <span className="font-semibold text-blue-700">{"<"}{"<"}</span> Test Kirim Pesan
          </span>
        </div>
        <div className="text-end text-slate-700">
          <span>
            7:43 AM
          </span>
        </div>
      </div>
    </div>
  )
};
