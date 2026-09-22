import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { TEENIE_KEYWORDS, CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { Camera, Search, Filter, Grid, ArrowRight, UserCheck, MapPin } from 'lucide-react';

interface Chapter08TeenieHarrisProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter08TeenieHarris: React.FC<Chapter08TeenieHarrisProps> = ({ onSelectObject }) => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>('wedding');

  const teenieObjects = CURATED_OBJECTS.filter(o => o.dataset === 'teenie');
  const activeKeywordData = TEENIE_KEYWORDS.find(k => k.keyword === selectedKeyword) || TEENIE_KEYWORDS[0];

  return (
    <section id="chapter-08" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="08"
          title="ONE LENS, MANY LIVES"
          subtitle="59,031 photographic negatives. One photographer: Charles “Teenie” Harris. One community: African American Pittsburgh across four decades. These titles are not dry art labels—they are names, addresses, family kinships, and neighborhood milestones."
          question="What becomes visible when a collection is read as a community archive?"
          badge="Room 08 · The Community Contact Sheet"
        />

        {/* Archive Overview Stat Card */}
        <div className="bg-[#211B18] text-[#FBF7EE] rounded-2xl p-6 sm:p-10 shadow-lg mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-[#A9854F]/30">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Teenie Harris Archive · Carnegie Museum of Art
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium leading-snug">
              Every single one of the 59,031 records is a photographic negative.
            </h3>
            <p className="font-serif-sub text-base text-[#F1E7D2]/80 leading-relaxed">
              While conventional museums catalog objects by maker style and material technique, the Harris Archive functions as a massive relational directory of civic existence: church baptisms, jazz clubs, Little League baseball, union rallies, and living room portraits.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div>
              <span className="text-xs font-mono text-[#A9854F] block">Total Negatives</span>
              <span className="text-3xl font-display font-bold text-[#FBF7EE]">59,031</span>
              <span className="text-[11px] text-[#F1E7D2]/60 block font-mono">100% negative</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#A9854F] block">Image Digitization</span>
              <span className="text-3xl font-display font-bold text-[#FBF7EE]">100%</span>
              <span className="text-[11px] text-[#F1E7D2]/60 block font-mono">59,031 images</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#A9854F] block">Direct Archive URLs</span>
              <span className="text-3xl font-display font-bold text-[#FBF7EE]">100%</span>
              <span className="text-[11px] text-[#F1E7D2]/60 block font-mono">59,031 records</span>
            </div>
          </div>
        </div>

        {/* Title Keywords Index */}
        <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-8 border border-[#A9854F]/25 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#A9854F]/20 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A9854F] font-semibold block">
                Archival Vocabulary Analysis
              </span>
              <h4 className="font-display text-xl font-medium text-[#211B18] mt-0.5">
                Recurring Keyword Occurrences in Titles
              </h4>
            </div>
            <span className="text-xs text-[#211B18]/60 font-sans-ui">
              Filter contact sheet by civic subject
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TEENIE_KEYWORDS.map((k) => {
              const isSelected = selectedKeyword === k.keyword;
              return (
                <button
                  key={k.keyword}
                  onClick={() => setSelectedKeyword(k.keyword)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-sans-ui transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-xs scale-105'
                      : 'bg-[#F1E7D2]/50 text-[#211B18] border-[#A9854F]/20 hover:bg-[#F1E7D2]'
                  }`}
                >
                  <span className="font-medium capitalize">{k.keyword}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-[#FBF7EE]' : 'bg-[#A9854F]/15 text-[#4B1720]'
                  }`}>
                    {k.occurrences.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#A9854F]/15 flex items-center justify-between text-xs text-[#211B18]/70">
            <span>
              Showing occurrence statistics for <strong className="text-[#4B1720] uppercase font-mono">"{activeKeywordData.keyword}"</strong>: appears in <strong>{activeKeywordData.occurrences.toLocaleString()}</strong> catalog titles ({activeKeywordData.pct}% of archive).
            </span>
            <span className="text-[11px] font-mono text-[#A9854F]">Category: {activeKeywordData.category}</span>
          </div>
        </div>

        {/* Contact Sheet Gallery & Rich Caption Inscriptions */}
        <div className="bg-[#F1E7D2]/40 rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs">
          <div className="flex items-center justify-between pb-6 border-b border-[#A9854F]/20 mb-8">
            <div className="flex items-center gap-2.5">
              <Grid className="w-5 h-5 text-[#A9854F]" />
              <h3 className="font-display text-2xl font-medium text-[#211B18]">
                Contact Sheet Negative Index
              </h3>
            </div>
            <span className="text-xs text-[#211B18]/60 font-sans-ui hidden sm:inline-block">
              Simulated darkroom contact frames · Select frame to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teenieObjects.map((obj) => (
              <div
                key={obj.id}
                onClick={() => onSelectObject(obj)}
                className="bg-[#211B18] text-[#FBF7EE] p-5 sm:p-6 rounded-xl border border-white/10 hover:border-[#A9854F] transition-all group cursor-pointer shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Film negative simulation frame */}
                  <div className="relative mb-4 bg-black rounded-lg overflow-hidden p-2 border border-white/15">
                    {/* Sprocket holes indicator */}
                    <div className="flex justify-between px-2 pb-1.5 text-[9px] font-mono text-white/30 border-b border-white/10 mb-2">
                      <span>KODAK SAFETY FILM</span>
                      <span>4 × 5 INCH</span>
                      <span>ROLL 3365</span>
                    </div>

                    <div className="aspect-4/3 flex items-center justify-center overflow-hidden bg-black/40 rounded">
                      <img
                        src={obj.image_url!}
                        alt={obj.title}
                        className="max-h-full max-w-full object-contain filter group-hover:contrast-125 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#A9854F] block">
                    Recorded {obj.date_display} · {obj.place}
                  </span>

                  <h4 className="font-display text-lg font-medium text-[#FBF7EE] mt-1 leading-snug group-hover:text-[#A9854F] transition-colors">
                    {obj.title}
                  </h4>

                  <p className="font-serif-sub text-xs text-[#F1E7D2]/80 mt-3 leading-relaxed line-clamp-4 bg-white/5 p-3 rounded border border-white/10">
                    <strong className="text-[#A9854F] font-sans-ui block mb-1">Detailed Archival Caption:</strong>
                    {obj.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-sans-ui">
                  <span className="text-[#A9854F] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect archive negative</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-white/40 text-[10px]">CMOA Harris Fund</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#FBF7EE] rounded-xl border border-[#A9854F]/20 text-xs font-sans-ui text-[#211B18]/70 flex items-center justify-between">
            <span>
              All 59,031 records retain active direct web links to the Carnegie Museum of Art Teenie Harris Archive online database.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
