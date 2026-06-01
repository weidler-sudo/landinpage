import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyCTAProps {
  onOpenModal: () => void;
}

export function StickyCTA({ onOpenModal }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-900/95 to-transparent pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-lg bg-slate-800/80 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)] flex items-center justify-between gap-4 animate-in slide-in-from-bottom-10 duration-700">
        <div className="hidden sm:flex flex-col">
          <span className="font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            24/7 Lead-Generierung
          </span>
          <span className="text-sm text-slate-400">Transformieren Sie Ihren Vertrieb</span>
        </div>
        
        <button
          onClick={onOpenModal}
          className="group flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          Kostenlose Analyse
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
