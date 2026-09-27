import React from 'react';
import { LookbookItem } from '../types/brand';
import { X, Wind, Check, Layers, Cpu, Compass } from 'lucide-react';

interface LookbookModalProps {
  item: LookbookItem | null;
  onClose: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#040D18]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#081526] border border-[#122844] rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#122844] bg-[#040D18]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#A3FF00] uppercase tracking-wider font-bold">
              {item.code}
            </span>
            <span aria-hidden="true" className="text-[#0052FF]">·</span>
            <span className="text-xs text-slate-300 font-mono">
              {item.series}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela detail purwarupa"
            className="p-1.5 text-slate-400 hover:text-[#A3FF00] rounded hover:bg-[#0C1E34] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Visual Column */}
          <div className="lg:col-span-6 bg-[#040D18] relative min-h-[280px] lg:min-h-[460px] flex items-center justify-center p-5 border-b lg:border-b-0 lg:border-r border-[#122844]">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-lg max-h-[440px] shadow-lg"
            />
            <div className="absolute bottom-6 left-6 right-6 p-3 bg-[#040D18]/90 backdrop-blur-md rounded-lg border border-[#122844] text-xs font-mono text-slate-200">
              <div className="text-[10px] text-[#A3FF00] font-bold uppercase tracking-wider">Status Riset</div>
              <div>{item.prototypeEdition}</div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[#081526]">
            <div>
              <div className="text-xs font-mono text-[#0052FF] uppercase tracking-wider mb-1 font-bold">
                {item.category}
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                {item.title}
              </h3>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-semibold">
                Filosofi Desain Siluet
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.conceptPhilosophy}
              </p>
            </div>

            {/* Aerodynamics & Testing */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-lg border border-[#122844] bg-[#040D18] font-mono text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                  Koefisien Hambatan Udara
                </span>
                <span className="text-[#A3FF00] font-bold text-sm">{item.aerodynamicDrag}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                  Protokol Uji Lapangan
                </span>
                <span className="text-white font-semibold">{item.testedWith}</span>
              </div>
            </div>

            {/* Ergonomic Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-semibold">
                Inovasi Ergonomis
              </div>
              <div className="space-y-2">
                {item.ergonomicHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#A3FF00] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Composition & Notes */}
            <div className="pt-2 border-t border-[#122844] space-y-3">
              <div>
                <span className="text-[11px] font-mono text-[#A3FF00] uppercase tracking-wider block font-semibold">
                  Komposisi Tekstil:
                </span>
                <span className="text-xs font-mono text-slate-200">
                  {item.textileComposition}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Catatan Pengujian Atlet:
                </span>
                <p className="text-xs text-slate-300 italic">
                  &ldquo;{item.designNotes}&rdquo;
                </p>
              </div>
            </div>

            {/* Non commercial footer reminder */}
            <div className="p-3 bg-[#040D18] rounded-lg border border-[#122844] text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Status Katalog: Hanya Arsip Studi Desain</span>
              <span className="text-[#A3FF00] font-bold">Tidak Dijual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
