import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { TIME_PERIODS, CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { Clock, Calendar, HelpCircle, ArrowRight, ShieldAlert } from 'lucide-react';

interface Chapter04TimelineProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter04Timeline: React.FC<Chapter04TimelineProps> = ({ onSelectObject }) => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(4); // Default to 20th century
  const activeEra = TIME_PERIODS[selectedEraIndex];

  // Objects corresponding roughly to this era
  const eraObjects = CURATED_OBJECTS.filter(obj => {
    if (!obj.year_start) return selectedEraIndex === 6; // Undated
    if (selectedEraIndex === 0) return obj.year_start < 1400;
    if (selectedEraIndex === 1) return obj.year_start >= 1400 && obj.year_start < 1700;
    if (selectedEraIndex === 2) return obj.year_start >= 1700 && obj.year_start < 1800;
    if (selectedEraIndex === 3) return obj.year_start >= 1800 && obj.year_start < 1900;
    if (selectedEraIndex === 4) return obj.year_start >= 1900 && obj.year_start < 2000;
    if (selectedEraIndex === 5) return obj.year_start >= 2000;
    return false;
  });

  return (
    <section id="chapter-04" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="04"
          title="WHEN DOES THE MUSEUM REMEMBER?"
          subtitle="Move through the dates recorded in the collection: years, centuries, and spans. A timeline is not a steady river; museum memory accelerates violently into modernity."
          question="Is history preserved evenly across time?"
          badge="Room 04 · Chronology & Acceleration"
        />

        {/* Spatial Timeline Stepper Bar */}
        <div className="bg-[#F1E7D2]/50 p-4 sm:p-6 rounded-2xl border border-[#A9854F]/25 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#A9854F] uppercase tracking-wider mb-4 font-semibold">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Chronological Epochs
            </span>
            <span>487,834 Dated Objects</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {TIME_PERIODS.map((period, idx) => {
              const isSelected = selectedEraIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedEraIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-sm'
                      : 'bg-[#FBF7EE] text-[#211B18] border-[#A9854F]/20 hover:border-[#4B1720]'
                  }`}
                >
                  <span className={`text-[10px] font-mono uppercase block ${isSelected ? 'text-[#A9854F]' : 'text-[#A9854F]'}`}>
                    {period.range}
                  </span>
                  <span className="font-display text-sm font-semibold block mt-1 leading-snug line-clamp-2">
                    {period.era}
                  </span>
                  <span className={`text-xs font-mono mt-2 block ${isSelected ? 'text-[#F1E7D2]/80' : 'text-[#211B18]/50'}`}>
                    {period.count.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Epoch Details */}
        <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#F1E7D2] text-[#4B1720] font-mono text-xs font-semibold">
                {activeEra.range}
              </span>
              <span className="text-xs font-mono text-[#A9854F] uppercase">
                {activeEra.count.toLocaleString()} records recorded
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211B18]">
              {activeEra.era}
            </h3>

            <p className="font-serif-sub text-base sm:text-lg text-[#211B18]/80 leading-relaxed">
              {activeEra.description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-sans-ui uppercase tracking-wider text-[#A9854F] font-semibold block mb-1">
                Dominant Physical Media
              </span>
              <p className="text-sm font-sans-ui text-[#211B18]/70">
                {activeEra.sampleMedium}
              </p>
            </div>

            {selectedEraIndex === 6 && (
              <div className="bg-[#4B1720]/5 p-4 rounded-xl border border-[#4B1720]/20 flex items-start gap-3 mt-4">
                <HelpCircle className="w-5 h-5 text-[#4B1720] shrink-0 mt-0.5" />
                <div className="text-xs font-sans-ui text-[#211B18]/80 leading-relaxed">
                  <strong>The Quiet Layer:</strong> 16,509 records in the corpus have no recorded start year. These include fragmented archaeological items, undocumented vernacular craft, and unclassified archival lots where chronological provenance was never inscribed.
                </div>
              </div>
            )}
          </div>

          {/* Exemplary objects from this era */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-sans-ui uppercase tracking-wider text-[#A9854F] font-semibold block">
              Records Inscribed in this Era
            </span>

            {eraObjects.length > 0 ? (
              <div className="space-y-3">
                {eraObjects.map((obj) => (
                  <button
                    key={obj.id}
                    onClick={() => onSelectObject(obj)}
                    className="w-full text-left p-4 rounded-xl bg-[#F1E7D2]/40 hover:bg-[#F1E7D2] border border-[#A9854F]/20 transition-all flex items-start gap-4 group cursor-pointer"
                  >
                    {obj.image_url ? (
                      <img
                        src={obj.image_url}
                        alt={obj.title}
                        className="w-16 h-16 object-contain rounded bg-black/5 shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded bg-[#F1E7D2] border border-[#A9854F]/30 flex items-center justify-center text-xs text-[#A9854F] shrink-0 font-mono">
                        No Image
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A9854F] block">
                        {obj.museum} · {obj.date_display}
                      </span>
                      <h4 className="font-display text-base font-semibold text-[#211B18] group-hover:text-[#4B1720] transition-colors leading-snug truncate">
                        {obj.title}
                      </h4>
                      <p className="text-xs text-[#211B18]/60 mt-1 truncate font-sans-ui">
                        {obj.creator || 'Maker Unrecorded'} · {obj.medium}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A9854F] group-hover:translate-x-1 transition-transform shrink-0 self-center" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-[#F1E7D2]/30 rounded-xl border border-dashed border-[#A9854F]/30 text-xs text-[#211B18]/60 font-serif-sub">
                Explore adjacent centuries to inspect representative high-resolution collection records.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
