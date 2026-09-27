import React, { useState } from 'react';
import { RESEARCH_EXHIBITION_INFO } from '../data/brandData';
import { MapPin, Calendar, Building2, Send, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface ExhibitionSpaceProps {
  onOpenDeck: () => void;
}

export const ExhibitionSpace: React.FC<ExhibitionSpaceProps> = ({ onOpenDeck }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'Peneliti / Akademisi',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Mohon lengkapi nama, email, dan pesan pengajuan Anda.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Mohon masukkan alamat email yang valid.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="pameran-studio" className="py-20 lg:py-28 border-b border-[#122844] bg-[#040D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#122844]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#A3FF00] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
              <span>Ruang Fisik & Kolaborasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Studio Riset & Galeri Arsip
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kunjungi instalasi fisik kami untuk melihat dan menyentuh purwarupa rajutan kinetik secara langsung,
            atau diskusikan inisiatif riset bersama tim ilmuwan material kami.
          </p>
        </div>

        {/* 2-Column Split: Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Studio Info & Schedule */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-[#122844] bg-[#081526] space-y-6 shadow-lg">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A3FF00] font-bold">
                  Pameran Terbuka Mendatang
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {RESEARCH_EXHIBITION_INFO.nextExhibition}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {RESEARCH_EXHIBITION_INFO.curatorNote}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#122844] font-mono text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A3FF00] block text-[11px] uppercase font-bold">Lokasi Studio Riset:</span>
                    <span className="text-white">{RESEARCH_EXHIBITION_INFO.physicalStudioLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#A3FF00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A3FF00] block text-[11px] uppercase font-bold">Akses Kunjungan:</span>
                    <span className="text-white">{RESEARCH_EXHIBITION_INFO.visitingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#122844] flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenDeck}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#040D18] bg-[#A3FF00] hover:bg-[#B8FF1A] rounded-lg transition-all shadow-[0_0_20px_rgba(163,255,0,0.35)] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Pelajari Brand Deck & Riset</span>
                </button>
              </div>
            </div>

            {/* Non-commercial manifesto guarantee */}
            <div className="p-5 rounded-xl border border-[#122844] border-l-4 border-l-[#0052FF] bg-[#081526] text-xs font-mono text-slate-300 space-y-1.5 shadow-sm">
              <div className="text-[11px] text-[#A3FF00] font-bold uppercase tracking-wider">
                Prinsip Kunjungan Non-Komersial
              </div>
              <p className="text-slate-300 leading-relaxed">
                Di studio kami tidak tersedia mesin kasir atau kasir ritel. Seluruh ruang didedikasikan murni
                untuk pengamatan sensor gerak, meja potong presisi, dan uji aerodinamika atlet.
              </p>
            </div>
          </div>

          {/* Column 2: Inquiry / Collaboration Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl border border-[#122844] bg-[#081526] shadow-lg">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#A3FF00] text-[#040D18] flex items-center justify-center shadow-[0_0_30px_rgba(163,255,0,0.5)]">
                  <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-2xl font-bold font-display text-white">
                  Permohonan Kunjungan Telah Diterima
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
                  Terima kasih, <strong className="text-[#A3FF00]">{formData.name}</strong>. Tim kurator riset VELOVA
                  akan meninjau permohonan kunjungan Anda dan mengirimkan pass masuk digital melalui <strong className="text-white">{formData.email}</strong> dalam 1-2 hari kerja.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', organization: '', category: 'Peneliti / Akademisi', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-[#A3FF00] border border-[#122844] hover:border-[#0052FF] rounded-lg transition-colors cursor-pointer"
                >
                  Kirim Pengajuan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold font-display text-white mb-1">
                    Pengajuan Akses Studio & Dialog Riset
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Terbuka untuk jurnalis, institusi riset olahraga, fisioterapis, dan atlet profesional.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs bg-red-950/80 border border-red-800 text-red-200 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="block text-xs font-mono uppercase text-[#A3FF00] font-semibold">
                    Nama Lengkap *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Dr. Budi Setiawan"
                    className="w-full px-3.5 py-2.5 bg-[#040D18] border border-[#122844] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#A3FF00] focus:ring-1 focus:ring-[#A3FF00] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="block text-xs font-mono uppercase text-[#A3FF00] font-semibold">
                    Alamat Email Resmi *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@institusi.org"
                    className="w-full px-3.5 py-2.5 bg-[#040D18] border border-[#122844] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#A3FF00] focus:ring-1 focus:ring-[#A3FF00] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="org-input" className="block text-xs font-mono uppercase text-slate-300">
                      Institusi / Komunitas
                    </label>
                    <input
                      id="org-input"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Universitas / Klub Olahraga"
                      className="w-full px-3.5 py-2.5 bg-[#040D18] border border-[#122844] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cat-input" className="block text-xs font-mono uppercase text-slate-300">
                      Kategori Pengunjung
                    </label>
                    <select
                      id="cat-input"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#040D18] border border-[#122844] rounded-lg text-xs text-white focus:outline-none focus:border-[#0052FF] transition-colors cursor-pointer"
                    >
                      <option value="Peneliti / Akademisi">Peneliti / Akademisi</option>
                      <option value="Atlet Ketahanan / Pelatih">Atlet Ketahanan / Pelatih</option>
                      <option value="Media & Jurnalis Desain">Media & Jurnalis Desain</option>
                      <option value="Desainer Tekstil / Industri">Desainer Tekstil / Industri</option>
                      <option value="Penggiat Olahraga Umum">Penggiat Olahraga Umum</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="msg-input" className="block text-xs font-mono uppercase text-[#A3FF00] font-semibold">
                    Tujuan Kunjungan / Topik Diskusi *
                  </label>
                  <textarea
                    id="msg-input"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan latar belakang ketertarikan Anda pada riset kinetik dan tekstil VELOVA..."
                    className="w-full px-3.5 py-2.5 bg-[#040D18] border border-[#122844] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#A3FF00] focus:ring-1 focus:ring-[#A3FF00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-[#040D18] bg-gradient-to-r from-[#0052FF] via-[#75b2ff] to-[#A3FF00] hover:opacity-95 rounded-lg transition-all cursor-pointer shadow-[0_0_25px_rgba(163,255,0,0.35)]"
                >
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Kirim Permohonan Akses Studio</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
