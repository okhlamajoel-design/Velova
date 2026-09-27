import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#122844] bg-[#040D18] py-16 text-slate-400 relative">
      {/* Top subtle speed line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-speed-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#122844]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-black tracking-widest uppercase font-display text-white hover:text-[#A3FF00] transition-colors flex items-center gap-2"
            >
              <span>VELOVA</span>
              <span className="w-2 h-2 rounded-full bg-[#A3FF00] animate-ping" />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Laboratorium riset kinetik dan rekayasa busana performa tinggi.
              Didedikasikan murni untuk kemajuan sains gerak manusia dan desain sirkular tanpa transaksi retail komersial.
            </p>
            <div className="text-xs font-mono text-[#0052FF] font-semibold">
              Laboratorium: Jakarta · Bandung · Zurich
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-bold">
              Eksplorasi Arsip
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#manifesto" className="text-slate-300 hover:text-[#A3FF00] transition-colors">
                  Manifesto Gerak Murni
                </a>
              </li>
              <li>
                <a href="#material-lab" className="text-slate-300 hover:text-[#A3FF00] transition-colors">
                  Riset Tekstil & Aeroweave™
                </a>
              </li>
              <li>
                <a href="#lookbook" className="text-slate-300 hover:text-[#A3FF00] transition-colors">
                  Purwarupa Siluet Kinetik
                </a>
              </li>
              <li>
                <a href="#atlet-riset" className="text-slate-300 hover:text-[#A3FF00] transition-colors">
                  Mitra Riset Atlet Ketahanan
                </a>
              </li>
              <li>
                <a href="#pameran-studio" className="text-slate-300 hover:text-[#A3FF00] transition-colors">
                  Studio Fisik & Pameran
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional / Actions */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-bold">
              Dokumentasi Publik
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kami membagikan kajian terbuka mengenai ketahanan abrasi, porositas benang, dan aerodinamika lari.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDeck}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#A3FF00] border border-[#0052FF] bg-[#0052FF]/20 hover:bg-[#0052FF]/40 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(0,82,255,0.3)]"
              >
                <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Unduh Brand Whitepaper (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span className="text-slate-200">© {new Date().getFullYear()} VELOVA</span>
            <span aria-hidden="true" className="text-[#0052FF]">·</span>
            <span>Non-Commercial Athletic Design Archive</span>
            <span aria-hidden="true" className="text-[#0052FF]">·</span>
            <span className="text-[#A3FF00]">All Research Open for Scientific Use</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#A3FF00] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
