export default function TrafficLightLogo() {
  return (
    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-700">
      <div className="flex flex-col gap-1 py-1">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
      </div>
    </div>
  );
}
