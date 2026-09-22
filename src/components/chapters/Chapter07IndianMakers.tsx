import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { ShieldCheck, Info, Camera, Palette, FileText, ArrowRight } from 'lucide-react';

interface Chapter07IndianMakersProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter07IndianMakers: React.FC<Chapter07IndianMakersProps> = ({ onSelectObject }) => {
  const indianMakerObjects = CURATED_OBJECTS.filter(o => o.dataset === 'moma' && o.creator_nationality === '(Indian)');
  const [selectedMaker, setSelectedMaker] = useState<string>('Gauri Gill');

  const representedArtists = [
    {
      name: 'Gauri Gill',
      activePeriod: '1990s – Present',
      medium: 'Gelatin silver photographic prints',
      focus: 'Notes from the Desert · Rural western Rajasthan community portraits, grief, and shared resilience.',
      count: 24,
      sampleObjId: 'MOMA:218099'
    },
    {
      name: 'Zarina (Zarina Hashmi)',
      activePeriod: '1970s – 2010s',
      medium: 'Woodcut portfolios, handmade paper, letterpress',
      focus: 'Home is a Foreign Place · Spatial diagrams, border demarcations, displacement, and Urdu literature.',
      count: 36,
      sampleObjId: 'MOMA:ZARINA:01'
    },
    {
      name: 'Nasreen Mohamedi',
      activePeriod: '1960s – 1980s',
      medium: 'Ink on paper, gelatin silver photographs',
      focus: 'Lyrical architectural minimalism, geometric diagonal grid lines, and light studies.',
      count: 18,
      sampleObjId: null
    },
    {
      name: 'Dayanita Singh',
      activePeriod: '1990s – Present',
      medium: 'Offset prints, accordion structures, silver gelatin',
      focus: 'File Room · The physical architecture of paper archives, bureaucratic memory, and institutional dust.',
      count: 14,
      sampleObjId: null
    }
  ];

  return (
    <section id="chapter-07" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="07"
          title="INDIAN MAKERS, ONE COLLECTION"
          subtitle="In the supplied Museum of Modern Art dataset, exactly 229 records carry the field Nationality = (Indian). This is not a map of where objects came from, nor an exhaustive history of Indian art—it is an intimate study of how one institution in New York cataloged makers from the subcontinent."
          question="How does the supplied MoMA collection represent makers recorded as Indian?"
          badge="Room 07 · Micro-Archive Case Study"
        />

        {/* Framing & Integrity Banner */}
        <div className="p-6 rounded-2xl bg-[#FBF7EE] border border-[#A9854F]/30 shadow-xs mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4B1720] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A9854F]" />
              Archival Evidence Rule
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211B18]">
              229 Verified Objects in MoMA Artworks
            </h3>
            <p className="font-serif-sub text-sm sm:text-base text-[#211B18]/80 leading-relaxed">
              These records reflect how makers were entered into MoMA’s modern print, drawing, and photography collections. They do not represent ancient artifacts, colonial transfers, or the broader Metropolitan Museum holdings.
            </p>
          </div>

          <div className="shrink-0 bg-[#F1E7D2]/60 p-4 rounded-xl border border-[#A9854F]/20 text-center">
            <span className="font-display text-4xl font-bold text-[#4B1720] block">229</span>
            <span className="text-xs font-mono text-[#211B18]/70 block mt-1">Objects Inscribed</span>
            <span className="text-[10px] text-[#A9854F] font-mono block">Nationality = (Indian)</span>
          </div>
        </div>

        {/* Selected Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {representedArtists.map((artist) => {
            const isSelected = selectedMaker === artist.name;
            return (
              <button
                key={artist.name}
                onClick={() => setSelectedMaker(artist.name)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-sm'
                    : 'bg-[#F1E7D2]/40 text-[#211B18] border-[#A9854F]/20 hover:bg-[#F1E7D2]'
                }`}
              >
                <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSelected ? 'text-[#A9854F]' : 'text-[#A9854F]'}`}>
                  {artist.activePeriod}
                </span>
                <h4 className="font-display text-lg font-semibold block mt-1 leading-snug">
                  {artist.name}
                </h4>
                <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${isSelected ? 'text-[#F1E7D2]/80' : 'text-[#211B18]/70'}`}>
                  {artist.focus}
                </p>
                <div className={`mt-3 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${isSelected ? 'border-white/20 text-[#A9854F]' : 'border-[#A9854F]/15 text-[#A9854F]'}`}>
                  <span>{artist.medium.split(',')[0]}</span>
                  <span>{artist.count} works</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Curated Object Spotlight */}
        <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs">
          <div className="flex items-center justify-between pb-6 border-b border-[#A9854F]/20 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A9854F] font-semibold block">
                Highlighted Photographic & Print Works
              </span>
              <h3 className="font-display text-2xl font-medium text-[#211B18] mt-1">
                Intimate Modernity: Gauri Gill & Zarina Hashmi
              </h3>
            </div>
            <span className="text-xs font-sans-ui text-[#211B18]/60 hidden sm:inline-block">
              Click any record to inspect full catalog story
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianMakerObjects.map((obj) => (
              <div
                key={obj.id}
                onClick={() => onSelectObject(obj)}
                className="bg-[#F1E7D2]/40 rounded-xl p-4 border border-[#A9854F]/20 hover:border-[#4B1720] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="aspect-4/3 bg-black/5 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                    <img
                      src={obj.image_url!}
                      alt={obj.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#A9854F] uppercase tracking-wider block">
                    {obj.creator} · {obj.date_display}
                  </span>
                  <h4 className="font-display text-base font-semibold text-[#211B18] group-hover:text-[#4B1720] transition-colors mt-1 leading-snug line-clamp-2">
                    {obj.title}
                  </h4>
                  <p className="text-xs font-serif-sub text-[#211B18]/70 mt-1 line-clamp-2">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#A9854F]/15 flex items-center justify-between text-xs">
                  <span className="text-[#4B1720] font-sans-ui font-semibold flex items-center gap-1">
                    <span>Inspect record</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] font-mono text-[#211B18]/50">MoMA</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#A9854F]/20 flex items-center justify-between text-xs font-sans-ui text-[#211B18]/60">
            <span>All 229 records in this sub-collection preserve direct verified MoMA URLs and medium inscriptions.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
