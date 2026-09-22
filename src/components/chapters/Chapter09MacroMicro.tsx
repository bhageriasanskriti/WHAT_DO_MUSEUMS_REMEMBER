import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { ZoomIn, ZoomOut, FileText, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface Chapter09MacroMicroProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter09MacroMicro: React.FC<Chapter09MacroMicroProps> = ({ onSelectObject }) => {
  const [activeMode, setActiveMode] = useState<'macro' | 'micro'>('micro');
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);

  const microCases = [
    {
      obj: CURATED_OBJECTS.find(o => o.id.includes('23d3c984')) || CURATED_OBJECTS[3], // Perugino
      macroStat: '25,415 CMOA records preserve unbroken provenance histories (89.9%).',
      microNarrative: 'Commissioned c. 1500 for the Confraternity of St. Augustine in Perugia. When Napoleon’s brother Lucien Bonaparte acquired it three centuries later, it triggered an odyssey across Paris, London, King Willem II of the Netherlands, Grand Duchess Sophie of Weimar, and the chaos of 1920s Berlin before arriving in Pittsburgh in 1961.',
      highlight: 'Centuries of political upheaval and noble dynastic dispersal inscribed into one oil on wood panel.'
    },
    {
      obj: CURATED_OBJECTS.find(o => o.id.includes('41629')) || CURATED_OBJECTS[11], // Piero della Francesca
      macroStat: '76,991 NGA records preserve physical inscribed signatures and hallmarks (55.5%).',
      microNarrative: 'Saint Apollonia holding the pincers of her martyrdom, painted c. 1455 for the Sant’Agostino polyptych in Borgo San Sepolcro. Dispersed in 1904, it preserved the quiet geometric geometry of Italian Quattrocento humanism.',
      highlight: 'A single pillar fragment of an altarpiece scattered across three continents.'
    },
    {
      obj: CURATED_OBJECTS.find(o => o.id.includes('2d5d6446')) || CURATED_OBJECTS[4], // Clodion
      macroStat: 'Over 18,000 ceramics and terracottas record physical surface modeling and firing signatures.',
      microNarrative: 'Modeled in wet clay in Rome in 1768 by Clodion for Catherine the Great of Russia, survived French Revolution sales in 1791, entered the Stroganoff Palace in Saint Petersburg, and was seized by the Soviet state before being sold in Berlin in 1931.',
      highlight: 'Wet Roman clay transformed into an artifact of the Russian imperial court and Cold War rediscovery.'
    }
  ];

  const currentCase = microCases[selectedCaseIndex];

  return (
    <section id="chapter-09" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="09"
          title="FROM NUMBERS TO STORIES"
          subtitle="A number can show a pattern. An object can show what the pattern is made of. We have seen the corpus across 504,349 records; now let the aggregate numbers step back."
          question="Can a pattern lead us back to one human-scale record?"
          badge="Room 09 · The Macro-Micro Loop"
        />

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between gap-4 mb-8 bg-[#F1E7D2]/50 p-2 rounded-2xl border border-[#A9854F]/20 max-w-md">
          <button
            onClick={() => setActiveMode('macro')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans-ui font-semibold flex items-center justify-center gap-2 transition-all ${
              activeMode === 'macro'
                ? 'bg-[#4B1720] text-[#FBF7EE] shadow-xs'
                : 'text-[#211B18]/70 hover:text-[#211B18]'
            }`}
          >
            <ZoomOut className="w-4 h-4" />
            <span>Macro View · 504,349 Records</span>
          </button>

          <button
            onClick={() => setActiveMode('micro')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans-ui font-semibold flex items-center justify-center gap-2 transition-all ${
              activeMode === 'micro'
                ? 'bg-[#4B1720] text-[#FBF7EE] shadow-xs'
                : 'text-[#211B18]/70 hover:text-[#211B18]'
            }`}
          >
            <ZoomIn className="w-4 h-4" />
            <span>Micro View · The Human Scale</span>
          </button>
        </div>

        {activeMode === 'macro' ? (
          /* Macro Visualization */
          <div className="bg-[#211B18] text-[#FBF7EE] rounded-2xl p-8 sm:p-12 border border-[#A9854F]/30 shadow-xl space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold">
                Zoomed Out: The Institutional Ledger
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-medium">
                The Anatomy of 504,349 Institutional Entries
              </h3>
              <p className="font-serif-sub text-base text-[#F1E7D2]/80 leading-relaxed">
                When viewed from the altitude of big data, the museum appears as a statistical matrix of accession numbers, mediums, and percentage availability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-[#A9854F] block">Total Records</span>
                <span className="text-4xl font-display font-bold block mt-1">504,349</span>
                <span className="text-xs text-white/50 font-sans-ui block mt-2">Combined corpus count</span>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-[#A9854F] block">Provenance Histories</span>
                <span className="text-4xl font-display font-bold block mt-1">103,673</span>
                <span className="text-xs text-white/50 font-sans-ui block mt-2">20.6% have recorded provenance</span>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-[#A9854F] block">Physical Inscriptions</span>
                <span className="text-4xl font-display font-bold block mt-1">76,991</span>
                <span className="text-xs text-white/50 font-sans-ui block mt-2">15.3% record artist signatures</span>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-[#A9854F] block">Curatorial Narratives</span>
                <span className="text-4xl font-display font-bold block mt-1">73,560</span>
                <span className="text-xs text-white/50 font-sans-ui block mt-2">14.6% have extended descriptions</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span>Switch to Micro View to collapse the macro matrix back into a singular human account.</span>
              <button
                onClick={() => setActiveMode('micro')}
                className="text-[#A9854F] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Enter Micro Focus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Micro Narrative Reading */
          <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs space-y-8">
            {/* Case selector */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-[#A9854F]/20">
              {microCases.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans-ui transition-all border ${
                    selectedCaseIndex === idx
                      ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] font-semibold shadow-xs'
                      : 'bg-[#F1E7D2]/40 text-[#211B18] border-[#A9854F]/20 hover:bg-[#F1E7D2]'
                  }`}
                >
                  Case 0{idx + 1}: {c.obj.title.split(',')[0]}
                </button>
              ))}
            </div>

            {/* Deep qualitative breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 bg-[#F1E7D2]/50 p-6 rounded-xl border border-[#A9854F]/20 flex flex-col items-center justify-center">
                <div className="max-h-[360px] aspect-3/4 flex items-center justify-center overflow-hidden rounded bg-black/5">
                  <img
                    src={currentCase.obj.image_url!}
                    alt={currentCase.obj.title}
                    className="max-h-full max-w-full object-contain shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="font-display font-semibold text-[#211B18] block text-base">
                    {currentCase.obj.title}
                  </span>
                  <span className="text-xs text-[#211B18]/60 font-sans-ui">
                    {currentCase.obj.creator} · {currentCase.obj.date_display}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="bg-[#4B1720]/10 p-3.5 rounded-xl border border-[#4B1720]/20 text-xs font-mono text-[#4B1720]">
                  <strong>Macro context:</strong> {currentCase.macroStat}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211B18] leading-snug">
                  "{currentCase.highlight}"
                </h3>

                <p className="font-serif-sub text-base text-[#211B18]/85 leading-relaxed">
                  {currentCase.microNarrative}
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onSelectObject(currentCase.obj)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4B1720] text-[#FBF7EE] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#340f16] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Read Unabridged Object Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-[#A9854F]">
                    {currentCase.obj.museum}
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
