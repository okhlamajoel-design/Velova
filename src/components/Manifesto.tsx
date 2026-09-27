import React, { useState } from 'react';
import { BRAND_MANIFESTO_PILLARS } from '../data/brandData';
import { Sparkles, Activity, Layers, RefreshCw, CheckCircle2 } from 'lucide-react';

export const Manifesto: React.FC<Manifesto> = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section id="manifesto" className="py-20 lg:py-28 border-b border-[#122844] bg-[#040D18] relative">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#0052FF]/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#A3FF00]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#122844]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#A3FF00] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3FF00] animate-pulse" />
              <span>Filosofi & Nilai Inti</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Manifesto Gerak Murni
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Industri sportswear global dipenuhi siklus produksi cepat berorientasi konsumsi berlebih.
            <strong className="text-white"> VELOVA</strong> memilih jalur berbeda: memperlakukan pakaian sebagai instrumen fisiologis atletik.
          </p>
        </div>

        {/* 3 Editorial Pillars - Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {BRAND_MANIFESTO_PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.number}
                onClick={() => setActivePillar(idx)}
                className={`lg:col-span-4 p-8 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'border-[#A3FF00] bg-[#0C1E34] shadow-[0_0_35px_rgba(163,255,0,0.22)]'
                    : 'border-[#122844] bg-[#081526]/80 hover:border-[#0052FF] hover:bg-[#0C1E34]/80'
                }`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052FF] to-[#A3FF00]" />
                )}

                <div>
                  {/* Natural Editorial Numbering */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-sm font-mono tracking-wider font-bold ${
                      isSelected ? 'text-[#A3FF00]' : 'text-slate-400'
                    }`}>
                      {pillar.number}.
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Prinsip #{pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    {pillar.title}
                  </h3>

                  <p className={`text-xs font-medium mb-4 ${
                    isSelected ? 'text-[#A3FF00]' : 'text-slate-300'
                  }`}>
                    {pillar.shortDefinition}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {pillar.detailedArgument}
                  </p>
                </div>

                {/* Quantitative Metric with Volt highlighting */}
                <div className="pt-6 border-t border-[#122844] flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {pillar.metricLabel}
                  </span>
                  <span className="text-lg font-extrabold font-mono text-[#A3FF00] tabular-nums">
                    {pillar.metricValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Breakdown Card for Currently Selected Principle */}
        <div className="p-8 lg:p-10 rounded-xl border border-[#0052FF]/40 bg-[#081526] shadow-[0_15px_40px_rgba(0,82,255,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF00] uppercase tracking-wider font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Eksplorasi Mendalam · {BRAND_MANIFESTO_PILLARS[activePillar].title}</span>
              </div>

              <h4 className="text-2xl font-bold font-display text-white">
                Mengapa Kami Tidak Menjual Produk Secara Komersial?
              </h4>

              <p className="text-sm text-slate-200 leading-relaxed">
                Ketika sebuah brand sportswear berorientasi pada penjualan e-commerce massal, keputusan desain
                sering kali dikompromikan oleh biaya pemotongan bahan yang murah, pewarna cepat luntur, dan target volume pasar.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Dengan meniadakan transaksi jual-beli dan membatasi fokus pada riset laboratorium murni,
                kami bebas mengeksplorasi serat termahal di dunia, algoritma rajutan kompresi tanpa batasan margin ritel,
                dan menghadirkan inovasi sejati bagi dunia sains keolahragaan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                  <span>Nol stok gudang yang berakhir di tempat pembuangan sampah</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                  <span>Keterbukaan data aerodinamis bagi universitas dan atlet</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                  <span>Setiap purwarupa memiliki log uji lapangan 1,000+ kilometer</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                  <span>Pameran fisik berkala di ruang arsitektur kontemporer</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-lg border border-[#122844] border-l-2 border-l-[#A3FF00] bg-[#040D18] space-y-4">
              <div className="text-xs font-mono text-[#A3FF00] uppercase tracking-wider pb-2 border-b border-[#122844] font-semibold">
                Catatan Kuratorial Brand
              </div>

              <blockquote className="text-sm italic text-slate-200 leading-relaxed font-sans">
                &ldquo;Pakaian olahraga masa depan tidak diukur dari berapa banyak unit yang terjual di rak toko,
                melainkan seberapa mulus ia menyatu dengan desah napas dan irama kayuhan kaki manusia.&rdquo;
              </blockquote>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-white font-medium">Tim Desain VELOVA</span>
                <span className="text-[#0052FF]">Bandung & Zurich Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
type Manifesto = {};
