import React, { useState } from 'react';
import { Menu, X, FileText, Compass, ChevronDown, ArrowRight, Info } from 'lucide-react';

interface NavbarProps {
  onOpenDeck: () => void;
}

interface NavItemInfo {
  label: string;
  href: string;
  badge: string;
  shortDesc: string;
  keyHighlight: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);

  const navItems: NavItemInfo[] = [
    {
      label: 'Manifesto',
      href: '#manifesto',
      badge: '01. Filosofi',
      shortDesc: 'Alasan VELOVA menolak sistem komersial fast-fashion & mendedikasikan diri untuk riset kinetik murni.',
      keyHighlight: 'Riset 18 bulan per purwarupa · 100% Bio-Polimer Sirkular'
    },
    {
      label: 'Riset Material',
      href: '#material-lab',
      badge: '02. Fisika Serat',
      shortDesc: 'Inspeksi 4 formula serat mikroskopis: Aeroweave, Bio-Compression, ThermoReflect & CarbonWeft.',
      keyHighlight: 'Zoom Makro 500x · Pengukur Permeabilitas & Kompresi'
    },
    {
      label: 'Koleksi Konsep',
      href: '#lookbook',
      badge: '03. Arsip Desain',
      shortDesc: 'Siluet purwarupa Series 01-03 khusus pengujian atlet ketahanan, bukan produk etalase beli.',
      keyHighlight: 'Data Hambatan Aerodinamis · Non-Commercial Archive'
    },
    {
      label: 'Mitra Riset Atlet',
      href: '#atlet-riset',
      badge: '04. Uji Lapangan',
      shortDesc: 'Log pengujian nyata oleh pelari ultra-maraton, pelari trek, dan penjelajah alpen di cuaca ekstrem.',
      keyHighlight: 'Uji Terowongan Angin · Suhu -18°C hingga +35°C'
    },
    {
      label: 'Pameran & Lab',
      href: '#pameran-studio',
      badge: '05. Studio Fisik',
      shortDesc: 'Informasi studio riset fisik di SCBD/Bandung dan formulir pengajuan pass kunjungan institusional.',
      keyHighlight: 'Pass Pengunjung Riset · Agenda Pameran Terbuka'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040D18]/95 backdrop-blur-md border-b border-[#122844] transition-all duration-200">
      {/* Top Kinetic Speed Indicator Line */}
      <div className="h-[2px] w-full gradient-speed-line" />

      {/* Main Single-Row Horizontal Navbar ("Di jejerin") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Tag */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-widest uppercase font-display text-white hover:text-[#A3FF00] transition-colors flex items-center gap-1.5"
          >
            <span>VELOVA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF00] animate-ping" />
          </a>

          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#081526] border border-[#122844] text-[#A3FF00]">
            Kinetic Lab
          </span>
        </div>

        {/* Center: Cleanly Lined Up Horizontal Nav Items */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative py-2"
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <a
                href={item.href}
                className="hover:text-[#A3FF00] transition-colors duration-150 py-1.5 flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#A3FF00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 whitespace-nowrap"
              >
                <span>{item.label}</span>
              </a>

              {/* Hover Guide Card / Petunjuk Isi Bagian */}
              {hoveredNav === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 pointer-events-none z-50 animate-fadeIn">
                  <div className="p-3.5 bg-[#081526] border border-[#A3FF00]/60 rounded-xl shadow-[0_15px_35px_rgba(0,82,255,0.25)] text-left space-y-1.5 backdrop-blur-xl">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#A3FF00] font-bold">{item.badge}</span>
                      <span className="text-slate-400">Petunjuk Bagian</span>
                    </div>
                    <p className="text-[11px] text-slate-200 font-sans normal-case leading-relaxed font-normal">
                      {item.shortDesc}
                    </p>
                    <div className="pt-1.5 border-t border-[#122844] text-[10px] font-mono text-[#0052FF] font-semibold">
                      ⚡ {item.keyHighlight}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Actions Lined Up ("Petunjuk Web" + "Brand Deck") */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Petunjuk Isi Web Popover Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setGuideOpen(!guideOpen)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                guideOpen
                  ? 'border-[#A3FF00] bg-[#A3FF00]/15 text-[#A3FF00] shadow-[0_0_15px_rgba(163,255,0,0.3)]'
                  : 'border-[#122844] hover:border-[#0052FF] bg-[#081526] text-slate-200 hover:text-white'
              }`}
              title="Petunjuk isi lengkap website VELOVA"
            >
              <Compass className={`w-3.5 h-3.5 ${guideOpen ? 'text-[#A3FF00] animate-spin' : 'text-[#0052FF]'}`} />
              <span className="hidden sm:inline">Petunjuk Web</span>
              <span className="sm:hidden">Petunjuk</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${guideOpen ? 'rotate-180 text-[#A3FF00]' : 'text-slate-400'}`} />
            </button>

            {/* Popover Panel */}
            {guideOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
                  onClick={() => setGuideOpen(false)}
                />
                <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-[#081526] border border-[#A3FF00]/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 p-5 space-y-4 text-left animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-[#122844]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A3FF00] animate-ping" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        Petunjuk Isi Website VELOVA
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuideOpen(false)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clarification banner */}
                  <div className="p-2.5 rounded-lg bg-[#040D18] border border-[#122844] flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Bukan Toko Belanja:</strong> Website ini dibuat murni untuk memperkenalkan filosofi, riset tekstil, dan arsip purwarupa VELOVA tanpa transaksi e-commerce.
                    </div>
                  </div>

                  {/* 5-Step Section Directory with Quick Jump Links */}
                  <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setGuideOpen(false)}
                        className="group block p-2.5 rounded-lg bg-[#0C1E34]/50 hover:bg-[#0C1E34] border border-[#122844] hover:border-[#0052FF] transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-[#A3FF00] font-bold">
                            {item.badge}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-white flex items-center gap-1 font-mono">
                            Buka <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white group-hover:text-[#A3FF00] transition-colors mb-0.5">
                          {item.label}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                          {item.shortDesc}
                        </p>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#122844] flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>5 Bagian Riset Kinetik</span>
                    <button
                      type="button"
                      onClick={() => {
                        setGuideOpen(false);
                        onOpenDeck();
                      }}
                      className="text-[#A3FF00] hover:underline font-semibold"
                    >
                      Buka Dokumen Brand Deck →
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Primary CTA: Brand Deck Button */}
          <button
            type="button"
            onClick={onOpenDeck}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-bold tracking-wider uppercase text-[#040D18] bg-[#A3FF00] hover:bg-[#B8FF1A] rounded-lg transition-all duration-150 whitespace-nowrap shadow-[0_0_20px_rgba(163,255,0,0.35)] hover:shadow-[0_0_25px_rgba(163,255,0,0.55)] hover:scale-[1.02] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Brand Deck</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 lg:hidden text-slate-300 hover:text-[#A3FF00] rounded-lg border border-[#122844] bg-[#081526]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#A3FF00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with integrated section hints */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#122844] bg-[#081526] px-6 py-6 space-y-4 animate-fadeIn">
          {/* Mobile Petunjuk Banner */}
          <div className="p-3 rounded-lg bg-[#040D18] border border-[#122844] text-xs text-slate-300 space-y-1">
            <div className="text-[10px] font-mono uppercase text-[#A3FF00] font-bold flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-[#A3FF00]" />
              <span>Petunjuk Isi Website VELOVA</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Jelajahi 5 bab riset inovasi pakaian olahraga tanpa toko beli.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg border border-[#122844] bg-[#040D18]/60 hover:bg-[#0C1E34] hover:border-[#0052FF] transition-all block"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-bold text-white">{item.label}</span>
                  <span className="text-[10px] font-mono text-[#A3FF00]">{item.badge}</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  {item.shortDesc}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
