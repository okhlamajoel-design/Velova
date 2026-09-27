import React, { useState } from 'react';
import { X, Download, FileText, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';

interface BrandDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandDeckModal: React.FC<BrandDeckModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloadProgress(true);
    setTimeout(() => {
      setDownloadProgress(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#040D18]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#081526] border border-[#122844] rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#122844] bg-[#040D18]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#A3FF00]" />
            <span className="font-mono text-xs text-[#A3FF00] uppercase tracking-wider font-bold">
              VELOVA — Brand Whitepaper & Manifesto Deck
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup brand deck"
            className="p-1.5 text-slate-400 hover:text-[#A3FF00] rounded hover:bg-[#0C1E34] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Cover Section */}
          <div className="p-6 rounded-xl bg-[#040D18] border border-[#122844] text-center space-y-3 relative overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052FF] via-[#A3FF00] to-[#0052FF]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF00] font-semibold">
              Dokumen Publik Resmi · Edisi Riset 2026
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              VELOVA: Rekayasa Fisiologis & Non-Komersialisme
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Panduan filosofi, riset aerodinamika tekstil, dan posisi VELOVA
              dalam menolak konsumerisme fast-fashion untuk memajukan biomekanika atletik.
            </p>
          </div>

          {/* Chapter Outline */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-bold">
              Daftar Isi Dokumen Brand Deck
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg border border-[#122844] bg-[#040D18] flex items-start justify-between hover:border-[#0052FF] transition-colors">
                <div>
                  <span className="text-[#A3FF00] font-bold block mb-0.5">Bab 01. The Anti-Fast-Fashion Manifesto</span>
                  <span className="text-slate-300">Menolak siklus rilis 4 minggu demi riset laboratorium 18 bulan per siluet.</span>
                </div>
                <span className="text-slate-400 text-right shrink-0 ml-4 font-semibold">Hlm. 04–12</span>
              </div>

              <div className="p-3.5 rounded-lg border border-[#122844] bg-[#040D18] flex items-start justify-between hover:border-[#0052FF] transition-colors">
                <div>
                  <span className="text-[#A3FF00] font-bold block mb-0.5">Bab 02. Polimer & Termoregulasi Aeroweave™</span>
                  <span className="text-slate-300">Kajian terowongan angin dan pemetaan suhu kulit pada lari ketahanan.</span>
                </div>
                <span className="text-slate-400 text-right shrink-0 ml-4 font-semibold">Hlm. 13–28</span>
              </div>

              <div className="p-3.5 rounded-lg border border-[#122844] bg-[#040D18] flex items-start justify-between hover:border-[#0052FF] transition-colors">
                <div>
                  <span className="text-[#A3FF00] font-bold block mb-0.5">Bab 03. Bio-Kompresi & Rantai Kinetik Otot</span>
                  <span className="text-slate-300">Analisis elektromiografi osilasi otot paha selama maraton 42km.</span>
                </div>
                <span className="text-slate-400 text-right shrink-0 ml-4 font-semibold">Hlm. 29–42</span>
              </div>

              <div className="p-3.5 rounded-lg border border-[#122844] bg-[#040D18] flex items-start justify-between hover:border-[#0052FF] transition-colors">
                <div>
                  <span className="text-[#A3FF00] font-bold block mb-0.5">Bab 04. Kurasi Pameran & Protokol Akuisisi Institusional</span>
                  <span className="text-slate-300">Pedoman pinjaman purwarupa untuk museum desain dan universitas keolahragaan.</span>
                </div>
                <span className="text-slate-400 text-right shrink-0 ml-4 font-semibold">Hlm. 43–56</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#122844] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloadProgress}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#040D18] bg-[#A3FF00] hover:bg-[#B8FF1A] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(163,255,0,0.35)]"
              >
                {downloadProgress ? (
                  <span>Menghasilkan PDF Riset...</span>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
                    <span>Dokumen Siap (Tersimpan)</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Unduh Brand Deck Lengkap</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white border border-[#0052FF] bg-[#0052FF]/20 hover:bg-[#0052FF]/40 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(0,82,255,0.2)]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#A3FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tautan Disalin' : 'Salin Tautan Riset'}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-400">
              Lisensi Creative Commons Non-Komersial (CC-BY-NC)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
