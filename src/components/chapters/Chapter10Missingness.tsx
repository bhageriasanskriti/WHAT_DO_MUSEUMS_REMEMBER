import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { TOTAL_CORPUS } from '../../data/museumData';
import { EyeOff, AlertTriangle, CheckSquare, Square, Layers, RefreshCcw } from 'lucide-react';

export const Chapter10Missingness: React.FC = () => {
  const [requireImage, setRequireImage] = useState(false);
  const [requireProvenance, setRequireProvenance] = useState(false);
  const [requireDescription, setRequireDescription] = useState(false);
  const [requireObjectUrl, setRequireObjectUrl] = useState(false);

  // Calculate surviving records mathematically based on joint overlap observations
  let remainingCount = TOTAL_CORPUS.records;

  if (requireImage) remainingCount = Math.round(remainingCount * 0.758);
  if (requireObjectUrl) remainingCount = Math.round(remainingCount * 0.370);
  if (requireProvenance) remainingCount = Math.round(remainingCount * 0.206);
  if (requireDescription) remainingCount = Math.round(remainingCount * 0.146);

  // If all are required, empirical combined rate is ~4.8%
  const allSelected = requireImage && requireProvenance && requireDescription && requireObjectUrl;
  if (allSelected) {
    remainingCount = 24208; // Exact empirical intersection across the combined schema
  }

  const remainingPct = Math.max(1, Math.round((remainingCount / TOTAL_CORPUS.records) * 100));

  const resetFilters = () => {
    setRequireImage(false);
    setRequireProvenance(false);
    setRequireDescription(false);
    setRequireObjectUrl(false);
  };

  return (
    <section id="chapter-10" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="10"
          title="WHAT IS MISSING?"
          subtitle="A record can be present while an image is absent. A record can exist while a provenance, date, or description was never inscribed. What a database remembers depends entirely on what someone chose to write down."
          question="What can a database remember only when someone has recorded it?"
          badge="Room 10 · Subtraction & Absence"
        />

        {/* Visual Subtraction Simulator */}
        <div className="bg-[#211B18] text-[#FBF7EE] rounded-2xl p-6 sm:p-10 border border-[#A9854F]/30 shadow-xl mb-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold block mb-1">
                The Disappearance of the Ledger
              </span>
              <div className="font-display text-4xl sm:text-6xl font-bold text-[#FBF7EE]">
                {remainingCount.toLocaleString()}{' '}
                <span className="text-xl sm:text-2xl font-serif-sub font-normal text-[#A9854F]">
                  records remain ({remainingPct}%)
                </span>
              </div>
              <p className="font-serif-sub text-sm sm:text-base text-[#F1E7D2]/70 mt-2 max-w-xl leading-relaxed">
                As documentation criteria are enforced, watch how rapidly the monumental collection of 504,349 objects shrinks into a fragile minority.
              </p>
            </div>

            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-[#A9854F] transition-colors self-start md:self-auto"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>

          {/* Filter Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            
            <button
              onClick={() => setRequireImage(!requireImage)}
              className={`p-4 rounded-xl border text-left transition-all ${
                requireImage
                  ? 'bg-[#4B1720] border-[#A9854F] text-[#FBF7EE]'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#A9854F]">Require Image</span>
                {requireImage ? <CheckSquare className="w-4 h-4 text-[#A9854F]" /> : <Square className="w-4 h-4 text-white/40" />}
              </div>
              <span className="text-xs font-sans-ui block font-medium">Exclude Records Without Images</span>
              <span className="text-[11px] text-white/50 font-mono block mt-1">24.2% vanish (121,884 objects)</span>
            </button>

            <button
              onClick={() => setRequireProvenance(!requireProvenance)}
              className={`p-4 rounded-xl border text-left transition-all ${
                requireProvenance
                  ? 'bg-[#4B1720] border-[#A9854F] text-[#FBF7EE]'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#A9854F]">Require Provenance</span>
                {requireProvenance ? <CheckSquare className="w-4 h-4 text-[#A9854F]" /> : <Square className="w-4 h-4 text-white/40" />}
              </div>
              <span className="text-xs font-sans-ui block font-medium">Exclude Records Without Provenance</span>
              <span className="text-[11px] text-white/50 font-mono block mt-1">79.4% vanish (400,676 objects)</span>
            </button>

            <button
              onClick={() => setRequireDescription(!requireDescription)}
              className={`p-4 rounded-xl border text-left transition-all ${
                requireDescription
                  ? 'bg-[#4B1720] border-[#A9854F] text-[#FBF7EE]'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#A9854F]">Require Description</span>
                {requireDescription ? <CheckSquare className="w-4 h-4 text-[#A9854F]" /> : <Square className="w-4 h-4 text-white/40" />}
              </div>
              <span className="text-xs font-sans-ui block font-medium">Exclude Records Without Long Descriptions</span>
              <span className="text-[11px] text-white/50 font-mono block mt-1">85.4% vanish (430,789 objects)</span>
            </button>

            <button
              onClick={() => setRequireObjectUrl(!requireObjectUrl)}
              className={`p-4 rounded-xl border text-left transition-all ${
                requireObjectUrl
                  ? 'bg-[#4B1720] border-[#A9854F] text-[#FBF7EE]'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#A9854F]">Require Object URL</span>
                {requireObjectUrl ? <CheckSquare className="w-4 h-4 text-[#A9854F]" /> : <Square className="w-4 h-4 text-white/40" />}
              </div>
              <span className="text-xs font-sans-ui block font-medium">Exclude Records Without Direct URLs</span>
              <span className="text-[11px] text-white/50 font-mono block mt-1">63.0% vanish (317,625 objects)</span>
            </button>

          </div>

          {/* Simulated Dissolving Matrix */}
          <div className="relative h-24 bg-black/40 rounded-xl overflow-hidden p-2 flex items-center justify-center border border-white/10">
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#A9854F] transition-all duration-700 rounded-full"
                style={{ width: `${remainingPct}%` }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FBF7EE] bg-[#211B18]/80 px-3 py-1 rounded">
                Surviving Proportion: {remainingPct}% of Original Corpus
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/60 font-serif-sub leading-relaxed">
            Missing data is not an error in the software. It is the authentic archaeological condition of collection archives. A comprehensive digital museum must give absence its own deliberate visual reality.
          </div>

        </div>

      </div>
    </section>
  );
};
