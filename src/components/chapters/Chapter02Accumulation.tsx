import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { INSTITUTIONS, TOTAL_CORPUS } from '../../data/museumData';
import { MuseumId } from '../../types/museum';
import { Layers, Database, Image, Calendar, User, ExternalLink, Sparkles } from 'lucide-react';

export const Chapter02Accumulation: React.FC = () => {
  const [selectedMuseum, setSelectedMuseum] = useState<MuseumId | 'all'>('all');
  const [sampleScale, setSampleScale] = useState<number>(500);

  const activeInstitution = selectedMuseum === 'all' 
    ? null 
    : INSTITUTIONS.find(i => i.id === selectedMuseum);

  // Compute displayed records
  const currentTotal = activeInstitution ? activeInstitution.records : TOTAL_CORPUS.records;

  return (
    <section id="chapter-02" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="02"
          title="ONE OBJECT BECOMES A COLLECTION"
          subtitle="One object is a point. A collection is a field. The single object you just examined does not sit alone—it is surrounded by thousands of others."
          question="How large is the collection around this object?"
          badge="Room 02 · Scale & Accumulation"
        />

        {/* Big Number & Field Control */}
        <div className="bg-[#F1E7D2]/40 rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#A9854F]/20">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#A9854F] font-semibold block mb-1">
                {selectedMuseum === 'all' ? 'Combined Research Corpus' : activeInstitution?.institution}
              </span>
              <div className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-[#4B1720] tracking-tight">
                {currentTotal.toLocaleString()}
              </div>
              <p className="font-serif-sub text-base sm:text-lg text-[#211B18]/70 mt-2 max-w-xl">
                {selectedMuseum === 'all'
                  ? 'Total cataloged records across all five participating research archives.'
                  : activeInstitution?.highlightNotes}
              </p>
            </div>

            {/* Density scale controller */}
            <div className="bg-[#FBF7EE] p-4 rounded-xl border border-[#A9854F]/20 space-y-2 min-w-[260px]">
              <div className="flex items-center justify-between text-xs font-sans-ui">
                <span className="text-[#211B18]/60">Simulated Field Density</span>
                <span className="font-mono font-semibold text-[#4B1720]">{sampleScale} points</span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="50"
                value={sampleScale}
                onChange={(e) => setSampleScale(Number(e.target.value))}
                className="w-full accent-[#4B1720] cursor-pointer"
                aria-label="Adjust point field density"
              />
              <div className="flex justify-between text-[10px] text-[#211B18]/40 font-mono">
                <span>Sparse (100)</span>
                <span>Dense Field (1,200)</span>
              </div>
            </div>
          </div>

          {/* Canvas Field of Collection Points */}
          <div className="my-8 relative h-48 sm:h-64 bg-[#211B18] rounded-xl overflow-hidden p-4 flex items-center justify-center">
            {/* Visual Point Field */}
            <div className="absolute inset-0 opacity-80 grid grid-cols-12 sm:grid-cols-24 gap-1 p-3 overflow-hidden">
              {Array.from({ length: Math.min(sampleScale, 600) }).map((_, i) => {
                // Color points according to institution proportion
                let colorClass = '#F1E7D2';
                if (selectedMuseum === 'aic' || (selectedMuseum === 'all' && i % 5 === 0)) colorClass = '#A9854F';
                if (selectedMuseum === 'cmoa' || (selectedMuseum === 'all' && i % 5 === 1)) colorClass = '#7E8A73';
                if (selectedMuseum === 'teenie' || (selectedMuseum === 'all' && i % 5 === 2)) colorClass = '#667785';
                if (selectedMuseum === 'moma' || (selectedMuseum === 'all' && i % 5 === 3)) colorClass = '#C25953';
                if (selectedMuseum === 'nga' || (selectedMuseum === 'all' && i % 5 === 4)) colorClass = '#FBF7EE';

                return (
                  <div
                    key={i}
                    style={{ backgroundColor: colorClass }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-70 transition-all hover:scale-150 hover:opacity-100"
                    title={`Object record representation`}
                  />
                );
              })}
            </div>

            <div className="relative z-10 text-center pointer-events-none bg-[#211B18]/80 backdrop-blur-xs px-6 py-3 rounded-xl border border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#A9854F] font-mono block">
                {selectedMuseum === 'all' ? 'Entire Corpus Constellation' : `${activeInstitution?.shortName} Cluster`}
              </span>
              <span className="font-serif-sub text-sm sm:text-base text-[#FBF7EE]">
                Each dot represents a discrete recorded accession in the museum ledger.
              </span>
            </div>
          </div>

          {/* Institutional Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <button
              onClick={() => setSelectedMuseum('all')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedMuseum === 'all'
                  ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-sm'
                  : 'bg-[#FBF7EE] text-[#211B18] border-[#A9854F]/20 hover:border-[#4B1720]'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70">
                All Archives
              </span>
              <span className="font-display text-base font-semibold block mt-0.5">
                5 Institutions
              </span>
              <span className="text-xs font-mono mt-1 block">504,349 total</span>
            </button>

            {INSTITUTIONS.map((inst) => {
              const isSelected = selectedMuseum === inst.id;
              return (
                <button
                  key={inst.id}
                  onClick={() => setSelectedMuseum(inst.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-sm'
                      : 'bg-[#FBF7EE] text-[#211B18] border-[#A9854F]/20 hover:border-[#4B1720]'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70">
                    {inst.shortName}
                  </span>
                  <span className="font-display text-base font-semibold block mt-0.5">
                    {inst.records.toLocaleString()}
                  </span>
                  <span className="text-xs opacity-80 mt-1 block font-mono">
                    {inst.imagePct}% images
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Comparative Metadata Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FBF7EE] p-6 rounded-xl border border-[#A9854F]/20">
            <div className="flex items-center gap-2 mb-3 text-[#A9854F]">
              <Image className="w-5 h-5" />
              <h3 className="font-sans-ui text-xs uppercase tracking-widest font-semibold text-[#211B18]">
                Visual Coverage
              </h3>
            </div>
            <div className="font-display text-3xl font-semibold text-[#211B18] mb-1">
              {activeInstitution ? `${activeInstitution.imagePct}%` : `${TOTAL_CORPUS.imagePct}%`}
            </div>
            <p className="font-serif-sub text-sm text-[#211B18]/70 leading-relaxed">
              {activeInstitution 
                ? `${activeInstitution.imageCount.toLocaleString()} objects have public image links in ${activeInstitution.shortName}.` 
                : '382,465 objects have image URLs across the corpus. 121,884 objects have no digital image.'}
            </p>
          </div>

          <div className="bg-[#FBF7EE] p-6 rounded-xl border border-[#A9854F]/20">
            <div className="flex items-center gap-2 mb-3 text-[#A9854F]">
              <Calendar className="w-5 h-5" />
              <h3 className="font-sans-ui text-xs uppercase tracking-widest font-semibold text-[#211B18]">
                Temporal Registration
              </h3>
            </div>
            <div className="font-display text-3xl font-semibold text-[#211B18] mb-1">
              {activeInstitution ? `${activeInstitution.datePct}%` : `${TOTAL_CORPUS.datePct}%`}
            </div>
            <p className="font-serif-sub text-sm text-[#211B18]/70 leading-relaxed">
              {activeInstitution 
                ? `${activeInstitution.dateCount.toLocaleString()} objects contain recorded date points in ${activeInstitution.shortName}.`
                : '487,834 records include a date display or span. 16,509 records are undated.'}
            </p>
          </div>

          <div className="bg-[#FBF7EE] p-6 rounded-xl border border-[#A9854F]/20">
            <div className="flex items-center gap-2 mb-3 text-[#A9854F]">
              <User className="w-5 h-5" />
              <h3 className="font-sans-ui text-xs uppercase tracking-widest font-semibold text-[#211B18]">
                Attribution Inscription
              </h3>
            </div>
            <div className="font-display text-3xl font-semibold text-[#211B18] mb-1">
              {activeInstitution ? `${activeInstitution.creatorPct}%` : '96.8%'}
            </div>
            <p className="font-serif-sub text-sm text-[#211B18]/70 leading-relaxed">
              {activeInstitution
                ? `${activeInstitution.creatorCount.toLocaleString()} records contain creator, anonymous attribution, or culture notes.`
                : 'Named artists, anonymous makers, cultural attributions, or workshops are attached to 488,018 objects.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
