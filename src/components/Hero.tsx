import React, { useState } from 'react';
import { ArrowDownRight, Compass, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/brandData';

interface HeroProps {
  onExploreLab: () => void;
  onExploreLookbook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreLab, onExploreLookbook }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-[#122844] overflow-hidden bg-[#040D18]">
      {/* Background athletic speed flares and ambient lighting */}
      <div className="absolute top-1/6 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#0052FF]/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#A3FF00]/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - High-vis Volt & Blue text metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-slate-300 mb-6 font-mono">
          <span className="text-[#A3FF00] font-bold">● LIVE LAB</span>
          <span aria-hidden="true" className="text-[#0052FF]">·</span>
          <span>Laboratorium Riset Kinetik</span>
          <span aria-hidden="true" className="text-[#0052FF]">·</span>
          <span>Bukan Etalase Komersial</span>
          <span aria-hidden="true" className="text-[#0052FF]">·</span>
          <span className="text-slate-400">Arsip Gerak 2026</span>
        </div>

        {/* Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05] [text-wrap:balance]">
              Rekayasa Tekstil untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3FF00] via-[#85EA00] to-[#0052FF] drop-shadow-[0_0_35px_rgba(163,255,0,0.3)]">
                Batas Gerak Manusia.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">VELOVA</strong> berdiri bukan sebagai jenama ritel dengan siklus belanja cepat,
              melainkan laboratorium independen yang mempelajari batas fisiologi manusia dan
              merajut kain kinetik dengan presisi aerodinamika.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreLab}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#040D18] bg-[#A3FF00] hover:bg-[#B8FF1A] transition-all rounded shadow-[0_0_25px_rgba(163,255,0,0.4)] hover:shadow-[0_0_35px_rgba(163,255,0,0.65)] hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <span>Eksplorasi Lab Material</span>
                <ArrowDownRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={onExploreLookbook}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#A3FF00] border border-[#0052FF] hover:border-[#A3FF00] bg-[#0052FF]/15 hover:bg-[#0052FF]/30 transition-all rounded cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(0,82,255,0.2)]"
              >
                <span>Lihat Purwarupa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Marquee Hero Visual Asset Container */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#122844] hover:border-[#0052FF] transition-colors duration-300 bg-[#081526] shadow-[0_20px_50px_rgba(0,82,255,0.15)] group">
          {/* Fallback container if image loading or error */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 bg-[#081526] flex items-center justify-center animate-pulse">
              <span className="text-xs font-mono text-[#A3FF00] uppercase tracking-widest">
                Memuat Citra Kinetik...
              </span>
            </div>
          )}

          {imgError && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#081526] via-[#040D18] to-[#081526] flex flex-col items-center justify-center p-8 text-center">
              <Compass className="w-12 h-12 text-[#0052FF] mb-3 animate-spin" />
              <h3 className="text-lg font-display font-semibold text-white">Laboratorium Gerak VELOVA</h3>
              <p className="text-xs text-slate-300 max-w-md mt-1">
                Eksplorasi aerodinamika pelari medan pegunungan dan tekstil bio-kompresi.
              </p>
            </div>
          )}

          <img
            src={HERO_IMAGE}
            alt="Atlet pelari melintasi punggung gunung saat fajar dengan setelan teknik VELOVA"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-700 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Measured Scrim for media overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D18] via-[#040D18]/40 to-transparent pointer-events-none" />

          {/* Athletic Speed Accent Line on top of image */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052FF] via-[#A3FF00] to-[#0052FF]" />

          {/* Quiet Image Overlay Bar */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            <div className="space-y-1">
              <div className="text-[11px] font-mono tracking-wider uppercase text-[#A3FF00] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A3FF00] animate-ping" />
                <span>Dokumentasi Riset Lapangan #084</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-white font-display">
                Pengujian Lapisan Strato-Vent pada Suhu 6°C & Kecepatan Angin 35 km/jam
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-200 font-mono">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#081526]/85 border border-[#122844] rounded text-[#A3FF00]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Fast-Fashion</span>
              </span>
              <span aria-hidden="true" className="text-[#0052FF]">·</span>
              <span className="px-2.5 py-1 bg-[#0052FF]/20 border border-[#0052FF]/60 rounded text-sky-200">100% Non-Komersial</span>
            </div>
          </div>
        </div>

        {/* 3-Column Key Anchor Highlights in Deep Midnight Navy with Volt & Blue touches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10">
          <div className="p-5 rounded-lg border border-[#122844] bg-[#081526]/70 hover:border-[#0052FF] transition-all group space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#A3FF00] uppercase tracking-wider font-semibold">
                01. Identitas & Visi
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0052FF] group-hover:bg-[#A3FF00] transition-colors" />
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-[#A3FF00] transition-colors">Laboratorium Tekstil Terbuka</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Menerbitkan dokumentasi pengujian aerodinamis dan komposisi rajutan untuk memajukan sains pakaian olahraga dunia.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[#122844] bg-[#081526]/70 hover:border-[#0052FF] transition-all group space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#A3FF00] uppercase tracking-wider font-semibold">
                02. Metodologi Riset
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0052FF] group-hover:bg-[#A3FF00] transition-colors" />
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-[#A3FF00] transition-colors">Sensor Biomekanika Otot</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Memetakan titik panas (thermal mapping) dan getaran fasia pelari marathon untuk mendistribusikan elastisitas serat secara presisi.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[#122844] bg-[#081526]/70 hover:border-[#0052FF] transition-all group space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#A3FF00] uppercase tracking-wider font-semibold">
                03. Kurasi Pameran
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0052FF] group-hover:bg-[#A3FF00] transition-colors" />
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-[#A3FF00] transition-colors">Arsip Purwarupa Fisik</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setiap seri hanya diproduksi 12 purwarupa bernomor seri untuk atlet terpilih dan koleksi pameran desain kontemporer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
