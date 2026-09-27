import React, { useState } from 'react';
import { MATERIAL_INNOVATIONS, FABRIC_IMAGE } from '../data/brandData';
import { Microscope, Wind, ShieldAlert, Cpu, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export const MaterialLab: React.FC = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(MATERIAL_INNOVATIONS[0].id);
  const [zoomActive, setZoomActive] = useState<boolean>(false);
  const [fabricImgLoaded, setFabricImgLoaded] = useState<boolean>(false);
  const [fabricImgError, setFabricImgError] = useState<boolean>(false);

  const currentMaterial = MATERIAL_INNOVATIONS.find((m) => m.id === selectedMaterialId) || MATERIAL_INNOVATIONS[0];

  return (
    <section id="material-lab" className="py-20 lg:py-28 border-b border-[#122844] bg-[#040D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#122844]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#A3FF00] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
              <span>Riset Material & Fisika Tekstil</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Laboratorium Serat Kinetik
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Menelusuri struktur mikroskopis benang teknis yang kami kembangkan bersama insinyur polimer.
            Pilih formula material di bawah ini untuk menginspeksi metrik mekanisnya.
          </p>
        </div>

        {/* Interactive Filter / Material Switcher (Permitted functional button control) */}
        <div className="flex flex-wrap items-center gap-2.5 p-2 bg-[#081526] border border-[#122844] rounded-xl mb-10 overflow-x-auto shadow-inner">
          {MATERIAL_INNOVATIONS.map((mat) => {
            const isActive = mat.id === selectedMaterialId;
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`px-4 py-2.5 text-xs rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#A3FF00] text-[#040D18] font-extrabold shadow-[0_0_20px_rgba(163,255,0,0.35)] scale-[1.02]'
                    : 'bg-[#0C1E34]/50 text-slate-300 hover:text-white hover:bg-[#0C1E34] border border-[#122844]'
                }`}
              >
                <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-[#040D18] text-[#A3FF00]' : 'bg-[#081526] text-[#0052FF]'
                }`}>
                  {mat.code}
                </span>
                <span>{mat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Inspector Grid: 2 Columns (Image + Interactive Specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Macro Photography Showcase & Micro-weave Simulator */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-[#122844] bg-[#081526]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF00] uppercase tracking-wider font-semibold">
                  <Microscope className="w-4 h-4 text-[#0052FF]" />
                  <span>Inspeksi Makro Serat 500x</span>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomActive(!zoomActive)}
                  className="px-3 py-1.5 text-[11px] font-mono border border-[#0052FF] bg-[#0052FF]/20 hover:bg-[#0052FF]/40 rounded text-[#A3FF00] font-semibold transition-all cursor-pointer shadow-[0_0_12px_rgba(0,82,255,0.3)]"
                >
                  {zoomActive ? 'Mode Standar' : 'Perbesar Kisi Porositas'}
                </button>
              </div>

              {/* Macro Image Viewport */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#122844] bg-[#040D18] mb-6 group">
                {!fabricImgLoaded && !fabricImgError && (
                  <div className="absolute inset-0 bg-[#040D18] flex items-center justify-center animate-pulse">
                    <span className="text-xs font-mono text-[#A3FF00]">Memuat Visual Mikroskopik...</span>
                  </div>
                )}

                {fabricImgError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#040D18]">
                    <Wind className="w-10 h-10 text-[#0052FF] mb-2 animate-bounce" />
                    <span className="text-xs font-mono text-slate-300">Kisi Serat Aeroweave Mikro-Perforasi</span>
                  </div>
                )}

                <img
                  src={FABRIC_IMAGE}
                  alt="Tekstur makro kain olahraga berteknologi tinggi dengan pori-pori heksagonal"
                  referrerPolicy="no-referrer"
                  onLoad={() => setFabricImgLoaded(true)}
                  onError={() => setFabricImgError(true)}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    zoomActive ? 'scale-135 filter contrast-125' : 'scale-100'
                  } ${fabricImgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Reticle Target Lines for scientific athletic feel */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#A3FF00] pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#A3FF00] pointer-events-none" />
                <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-[#0052FF] pointer-events-none" />
                <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-[#0052FF] pointer-events-none" />

                {/* Overlaid Micro-data badge in corner */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#040D18]/90 backdrop-blur-md rounded-md border border-[#122844] text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                    <span className="text-[#A3FF00] font-bold">Struktur: {currentMaterial.code}</span>
                    <span className="text-slate-300">Density: {currentMaterial.specs.weightGsm} g/m²</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    {currentMaterial.microStructureDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Scientific Formula Note */}
            <div className="p-4 rounded-lg border border-[#122844] bg-[#040D18] font-mono text-xs text-slate-300 space-y-1">
              <div className="text-[10px] uppercase tracking-wider text-[#A3FF00] font-semibold">
                Formula Polimer Riset
              </div>
              <div className="text-white font-medium">{currentMaterial.scientificFormula}</div>
            </div>
          </div>

          {/* Column 2: Material Properties & Technical Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-[#122844] bg-[#081526]">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-[#A3FF00] uppercase tracking-wider mb-2 font-bold">
                  Spesifikasi Formula {currentMaterial.code}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {currentMaterial.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {currentMaterial.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentMaterial.description}
              </p>

              {/* Primary Quantified Benefit */}
              <div className="p-4 rounded-lg border border-[#122844] bg-[#040D18] border-l-4 border-l-[#A3FF00] shadow-sm">
                <div className="text-[11px] font-mono text-[#A3FF00] uppercase tracking-wider mb-1 font-semibold">
                  Manfaat Fisiologis Utama
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {currentMaterial.primaryBenefit}
                </div>
              </div>

              {/* 4 Quantitative Gauge Bars */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0052FF] font-bold">
                  Uji Verifikasi Laboratorium
                </div>

                {/* Breathability */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-200">Permeabilitas Udara (Breathability)</span>
                    <span className="text-[#A3FF00] font-bold tabular-nums text-sm">{currentMaterial.specs.breathability}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#040D18] border border-[#122844] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0052FF] to-[#A3FF00] transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(163,255,0,0.5)]"
                      style={{ width: `${currentMaterial.specs.breathability}%` }}
                    />
                  </div>
                </div>

                {/* Elasticity */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-200">Daya Lenting 4-Arah (Elastic Recovery)</span>
                    <span className="text-[#A3FF00] font-bold tabular-nums text-sm">{currentMaterial.specs.elasticity}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#040D18] border border-[#122844] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0052FF] via-[#38bdf8] to-[#A3FF00] transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(0,82,255,0.5)]"
                      style={{ width: `${currentMaterial.specs.elasticity}%` }}
                    />
                  </div>
                </div>

                {/* Weight GSM */}
                <div className="flex items-center justify-between py-2 border-t border-b border-[#122844] text-xs font-mono">
                  <span className="text-slate-300">Bobot Gramatur (GSM)</span>
                  <span className="text-[#A3FF00] font-bold tabular-nums">{currentMaterial.specs.weightGsm} g/m² (Ultra-Light)</span>
                </div>

                {/* Thermal Regulation */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Regulasi Termal</span>
                  <span className="text-white font-medium">{currentMaterial.specs.thermalRegulation}</span>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-semibold">
                  Karakteristik Mekanis Serat
                </div>
                <div className="space-y-1.5">
                  {currentMaterial.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage Scenario */}
            <div className="mt-8 pt-4 border-t border-[#122844] flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-slate-400">Skenario Penggunaan:</span>
              <span className="text-[#A3FF00] font-semibold text-right">{currentMaterial.usageScenario}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
