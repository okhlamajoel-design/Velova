/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { MaterialLab } from './components/MaterialLab';
import { ConceptLookbook } from './components/ConceptLookbook';
import { AthleteResearch } from './components/AthleteResearch';
import { ExhibitionSpace } from './components/ExhibitionSpace';
import { Footer } from './components/Footer';
import { LookbookModal } from './components/LookbookModal';
import { BrandDeckModal } from './components/BrandDeckModal';
import { LookbookItem } from './types/brand';

export default function App() {
  const [selectedLookbookItem, setSelectedLookbookItem] = useState<LookbookItem | null>(null);
  const [brandDeckOpen, setBrandDeckOpen] = useState<boolean>(false);

  const handleExploreLab = () => {
    const el = document.getElementById('material-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreLookbook = () => {
    const el = document.getElementById('lookbook');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040D18] text-[#F3F7FA] flex flex-col font-sans selection:bg-[#A3FF00] selection:text-[#040D18] relative overflow-x-hidden">
      {/* Dynamic kinetic background glow and speed vectors */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#0052FF]/10 blur-[180px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-[#A3FF00]/8 blur-[180px] pointer-events-none -z-10" />

      {/* Top Bar with 3-Zone Contract */}
      <Navbar onOpenDeck={() => setBrandDeckOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Marquee Visual Asset */}
        <Hero
          onExploreLab={handleExploreLab}
          onExploreLookbook={handleExploreLookbook}
        />

        {/* 2. Brand Manifesto & Core Philosophy */}
        <Manifesto />

        {/* 3. Textile Anatomy & Innovation Lab */}
        <MaterialLab />

        {/* 4. Prototype Lookbook & Concept Silhouettes (Non-commercial) */}
        <ConceptLookbook onSelectItem={(item) => setSelectedLookbookItem(item)} />

        {/* 5. Athletes in Residence & Field Testing Logs */}
        <AthleteResearch />

        {/* 6. Physical Studio & Exhibition Inquiries */}
        <ExhibitionSpace onOpenDeck={() => setBrandDeckOpen(true)} />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenDeck={() => setBrandDeckOpen(true)} />

      {/* Detail Modals */}
      <LookbookModal
        item={selectedLookbookItem}
        onClose={() => setSelectedLookbookItem(null)}
      />

      <BrandDeckModal
        isOpen={brandDeckOpen}
        onClose={() => setBrandDeckOpen(false)}
      />
    </div>
  );
}
