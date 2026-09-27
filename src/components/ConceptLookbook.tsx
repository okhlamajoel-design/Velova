import React, { useState } from 'react';
import { CONCEPT_LOOKBOOK_ITEMS } from '../data/brandData';
import { LookbookItem } from '../types/brand';
import { Info, Sparkles, SlidersHorizontal, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ConceptLookbookProps {
  onSelectItem: (item: LookbookItem) => void;
}

export const ConceptLookbook: React.FC<ConceptLookbookProps> = ({ onSelectItem }) => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');

  const seriesOptions = [
    { id: 'all', label: 'Semua Seri Purwarupa' },
    { id: 'Series 01: Dawn Strides', label: 'Series 01: Dawn Strides' },
    { id: 'Series 02: Alpine Ascent', label: 'Series 02: Alpine Ascent' },
    { id: 'Series 03: Urban Velocity', label: 'Series 03: Urban Velocity' }
  ];

  const filteredItems =
    selectedSeries === 'all'
      ? CONCEPT_LOOKBOOK_ITEMS
      : CONCEPT_LOOKBOOK_ITEMS.filter((item) => item.series === selectedSeries);

  return (
    <section id="lookbook" className="py-20 lg:py-28 border-b border-[#122844] bg-[#040D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#122844]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#A3FF00] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3FF00] animate-pulse" />
              <span>Koleksi Konseptual & Arsip Desain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Eksplorasi Siluet Kinetik
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Karya eksplorasi bentuk dan fungsi pakaian olahraga. Dibuat dalam jumlah terbatas
            untuk pengujian atlet ketahanan, bukan untuk komersialisasi retail.
          </p>
        </div>

        {/* Clear Anti-Commerce Disclaimer Banner with Electric Blue & Volt accent */}
        <div className="mb-10 p-4 sm:p-5 rounded-xl border border-[#0052FF]/50 bg-[#081526] shadow-[0_10px_30px_rgba(0,82,255,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-5 h-5 text-[#A3FF00] shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white">Catatan Desain & Transparansi Brand: </span>
              Koleksi di bawah ini adalah purwarupa studi antropometri gerak dan rekayasa aerodinamika.
              <strong className="text-[#A3FF00]"> VELOVA</strong> tidak menyediakan tombol beli, keranjang belanja, maupun lisensi retail massal.
            </div>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3FF00] font-bold shrink-0 self-start sm:self-auto px-3 py-1 bg-[#040D18] border border-[#A3FF00]/50 rounded-md shadow-[0_0_10px_rgba(163,255,0,0.2)]">
            Non-Commercial Archive
          </span>
        </div>

        {/* Interactive Filter Tabs (Permitted functional buttons) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {seriesOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedSeries(opt.id)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                selectedSeries === opt.id
                  ? 'bg-[#A3FF00] text-[#040D18] font-bold shadow-[0_0_15px_rgba(163,255,0,0.35)] scale-[1.02]'
                  : 'bg-[#081526] text-slate-300 hover:text-white hover:bg-[#0C1E34] border border-[#122844] hover:border-[#0052FF]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Lookbook Grid (Asymmetric & Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer rounded-xl border border-[#122844] bg-[#081526] hover:bg-[#0C1E34] hover:border-[#A3FF00] hover:shadow-[0_0_30px_rgba(163,255,0,0.18)] transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with Proper Aspect Ratio and Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#040D18] border-b border-[#122844]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D18] via-transparent to-transparent pointer-events-none" />

                {/* Quiet Floating Metadata on Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-200 pointer-events-none">
                  <span className="px-2.5 py-1 bg-[#040D18]/90 backdrop-blur-md rounded border border-[#0052FF] text-[#A3FF00] font-bold">
                    {item.code}
                  </span>
                  <span className="px-2.5 py-1 bg-[#0052FF]/60 backdrop-blur-md rounded border border-[#0052FF] text-sky-100 font-semibold">
                    {item.aerodynamicDrag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white pointer-events-none">
                  <span className="font-mono text-[11px] text-slate-300">
                    {item.prototypeEdition}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 group-hover:text-[#A3FF00] transition-colors font-semibold">
                    Detail Purwarupa <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-[#0052FF] font-mono font-semibold">
                    <span className="text-slate-300">{item.series}</span>
                    <span aria-hidden="true" className="text-[#A3FF00]">·</span>
                    <span className="text-[#A3FF00]">{item.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-[#A3FF00] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {item.conceptPhilosophy}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-[#122844] flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="truncate max-w-[200px]">{item.testedWith}</span>
                  <span className="text-[#A3FF00] font-semibold shrink-0">Arsip Riset</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
