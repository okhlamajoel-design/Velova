import React, { useState } from 'react';
import { ATHLETE_PARTNERS, ATHLETE_PORTRAIT_IMAGE } from '../data/brandData';
import { Compass, Footprints, Wind, Quote, ArrowRight, ShieldCheck } from 'lucide-react';

export const AthleteResearch: React.FC = () => {
  const [activeAthleteId, setActiveAthleteId] = useState<string>(ATHLETE_PARTNERS[0].id);

  const activeAthlete = ATHLETE_PARTNERS.find((a) => a.id === activeAthleteId) || ATHLETE_PARTNERS[0];

  return (
    <section id="atlet-riset" className="py-20 lg:py-28 border-b border-[#122844] bg-[#040D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#122844]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#A3FF00] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
              <span>Pengujian Lapangan Ekstrem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Mitra Riset Atlet Ketahanan
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pakaian kami tidak diuji di atas catwalk atau studio berpendingin udara.
            Atlet ketahanan membawa setiap purwarupa ke medan terjal dan lintasan kecepatan tinggi.
          </p>
        </div>

        {/* 2-Column Split: Editorial Visual + Interactive Field Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Editorial Athlete Photography */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-[#122844] bg-[#081526] min-h-[420px] lg:min-h-[540px] flex flex-col justify-end p-6 sm:p-8 group shadow-[0_15px_40px_rgba(0,82,255,0.15)]">
            <img
              src={ATHLETE_PORTRAIT_IMAGE}
              alt="Potret editorial atlet lari VELOVA di paviliun latihan brutalist"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040D18] via-[#040D18]/50 to-transparent pointer-events-none" />

            {/* Kinetic top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052FF] to-[#A3FF00]" />

            <div className="relative z-10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF00] font-bold flex items-center gap-2">
                <span>Dokumentasi Atletik #03</span>
                <span className="text-[#0052FF]">·</span>
                <span className="text-slate-300">Live Feedback</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Fokus Kinetik Tanpa Distraksi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Setiap detail ritsleting tersembunyi, potongan bahu raglan, dan elastisitas kompresi
                bertujuan menghapus kesadaran atlet akan pakaian yang mereka kenakan.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Pusat Pelatihan Biomekanika & Terowongan Angin VELOVA
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Athlete Logbook */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Athlete Selector Buttons (Permitted functional segmented control) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {ATHLETE_PARTNERS.map((athlete) => {
                const isSelected = athlete.id === activeAthleteId;
                return (
                  <button
                    key={athlete.id}
                    type="button"
                    onClick={() => setActiveAthleteId(athlete.id)}
                    className={`p-3.5 text-left rounded-xl border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'border-[#A3FF00] bg-[#0C1E34] text-white shadow-[0_0_20px_rgba(163,255,0,0.25)] scale-[1.02]'
                        : 'border-[#122844] bg-[#081526] text-slate-300 hover:border-[#0052FF] hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-display truncate text-white">
                      {athlete.name}
                    </div>
                    <div className={`text-[11px] font-mono truncate mt-0.5 ${
                      isSelected ? 'text-[#A3FF00] font-semibold' : 'text-slate-400'
                    }`}>
                      {athlete.discipline.split('(')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Athlete Detailed Card */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#122844] bg-[#081526] space-y-6 flex-1 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#122844]">
                  <div>
                    <h4 className="text-xl font-bold font-display text-white">
                      {activeAthlete.name}
                    </h4>
                    <p className="text-xs font-mono text-[#A3FF00]">
                      {activeAthlete.discipline}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono uppercase text-[#0052FF] font-semibold block">
                      Lokasi Uji Coba:
                    </span>
                    <span className="text-xs font-mono text-white font-medium">
                      {activeAthlete.fieldTestLocation}
                    </span>
                  </div>
                </div>

                {/* Direct Quote with Quote icon */}
                <div className="relative pl-6 sm:pl-8 border-l-4 border-l-[#A3FF00] py-1 bg-[#040D18]/50 p-4 rounded-r-lg">
                  <blockquote className="text-sm sm:text-base italic text-slate-200 leading-relaxed font-sans">
                    &ldquo;{activeAthlete.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Field Test Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-4 rounded-lg bg-[#040D18] border border-[#122844] font-mono text-xs">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Volume Uji Purwarupa
                    </span>
                    <span className="text-[#A3FF00] font-extrabold text-base tabular-nums">
                      {activeAthlete.milestone}
                    </span>
                  </div>

                  <div className="p-4 rounded-lg bg-[#040D18] border border-[#122844] font-mono text-xs">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      Catatan Temuan Teknis
                    </span>
                    <span className="text-slate-300 text-xs leading-normal">
                      {activeAthlete.testNotes}
                    </span>
                  </div>
                </div>
              </div>

              {/* Research Agreement Note */}
              <div className="pt-4 border-t border-[#122844] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Status Kemitraan: Riset Lapangan Terbuka</span>
                <span className="text-[#A3FF00] font-semibold">Non-Komersial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
