import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { MuseumObject } from '../../types/museum';
import { CURATED_OBJECTS } from '../../data/museumData';
import { Sparkles, ArrowDown, ChevronRight, Layers, FileText } from 'lucide-react';

interface Chapter01HeroProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter01Hero: React.FC<Chapter01HeroProps> = ({ onSelectObject }) => {
  const heroObject = CURATED_OBJECTS[0]; // Fra Angelico & Fra Filippo Lippi: The Adoration of the Magi (NGA:41581)
  const [activeMetadataStep, setActiveMetadataStep] = useState<number>(3);

  const metadataSteps = [
    { label: 'Accession Identity', value: 'NGA 1952.2.2 · Samuel H. Kress Collection' },
    { label: 'Attribution & Hand', value: 'Fra Angelico and Fra Filippo Lippi (Florentine School)' },
    { label: 'Creation Period', value: 'c. 1440/1460 · Italian Renaissance' },
    { label: 'Physical Reality', value: 'Tempera on poplar panel · Circular tondo, diameter 137.3 cm' },
    { label: 'Institutional Memory', value: 'Earliest recorded in the 1492 Medici Palace inventory of Lorenzo the Magnificent' },
  ];

  return (
    <section id="chapter-01" className="min-h-screen py-16 sm:py-24 border-b border-[#A9854F]/20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        
        <ChapterHeader
          number="01"
          title="WHAT DO MUSEUMS REMEMBER?"
          subtitle="Every museum begins with an object. Before it was an accession number, a digital record, or a row in a spreadsheet, someone made it, used it, carried it, or gave it away. Then it entered a museum."
          question="What does a record preserve when an object enters a museum?"
          badge="Room 01 · The Threshold"
        />

        {/* Narrative Split: The Physical Object vs The Digital Inscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
          
          {/* Object Display Frame */}
          <div className="lg:col-span-7 bg-[#F1E7D2]/60 p-4 sm:p-8 rounded-2xl border border-[#A9854F]/30 shadow-sm relative group">
            <div className="relative overflow-hidden rounded-xl bg-black/5 aspect-square max-h-[500px] flex items-center justify-center mx-auto">
              <img
                src={heroObject.image_url!}
                alt={heroObject.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none" />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans-ui text-[#211B18]/70">
              <div>
                <span className="font-semibold text-[#4B1720] block font-display text-base">
                  {heroObject.title}
                </span>
                <span>{heroObject.creator} · {heroObject.date_display}</span>
              </div>
              <button
                onClick={() => onSelectObject(heroObject)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4B1720] text-[#FBF7EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#350f16] transition-colors self-start sm:self-auto cursor-pointer"
              >
                <span>Inspect Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Institutional Memory Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <p className="font-serif-sub text-lg text-[#211B18]/90 leading-relaxed">
                When an object crosses the threshold of a museum, a fundamental transformation occurs. It ceases to exist merely as matter in the world. It is numbered, measured, attributed, and stabilized in language.
              </p>
              <p className="font-sans-ui text-sm text-[#211B18]/70 leading-relaxed">
                Step through what institutional cataloging inscribes onto this 15th-century Florentine panel:
              </p>
            </div>

            {/* Interactive Metadata Layers */}
            <div className="space-y-2.5">
              {metadataSteps.map((step, idx) => {
                const isRevealed = idx <= activeMetadataStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMetadataStep(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      isRevealed
                        ? 'bg-[#FBF7EE] border-[#A9854F]/40 shadow-xs'
                        : 'bg-[#F1E7D2]/30 border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A9854F] font-semibold">
                        0{idx + 1} · {step.label}
                      </span>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${isRevealed ? 'bg-[#4B1720]/10 text-[#4B1720]' : 'text-gray-400'}`}>
                        {isRevealed ? 'Inscribed' : 'Pending'}
                      </span>
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-sans-ui text-[#211B18] font-medium">
                      {step.value}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 flex items-center justify-between">
              <span className="text-xs text-[#211B18]/50 font-sans-ui">
                Click layers to inspect how catalog fields crystallize.
              </span>
              <a
                href="#chapter-02"
                className="inline-flex items-center gap-1.5 text-xs text-[#4B1720] font-semibold font-sans-ui hover:underline"
              >
                <span>Into the collection</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
