import React from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { ArrowUp, Sparkles, BookOpen, Layers } from 'lucide-react';

interface Chapter11ReturnProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter11Return: React.FC<Chapter11ReturnProps> = ({ onSelectObject }) => {
  const returnObject = CURATED_OBJECTS[0]; // Fra Angelico / Lippi Adoration of the Magi

  return (
    <section id="chapter-11" className="py-24 sm:py-36 border-b border-[#A9854F]/20 flex flex-col justify-center bg-[#FBF7EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E7D2] text-[#4B1720] text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A9854F]" />
          <span>Chapter 11 · Resolution</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-[#211B18] tracking-tight leading-[1.15] mb-8">
          RETURN TO THE OBJECT
        </h2>

        <div className="space-y-6 max-w-2xl mx-auto font-serif-sub text-lg sm:text-xl text-[#211B18]/85 leading-relaxed text-center mb-12">
          <p>
            We began with one object. We traveled through 504,349 records across five historic archives.
          </p>
          <p>
            We watched collections grow into massive fields, cluster into categories of paper and film, stretch across ancient centuries, and dissolve into the quiet reality of missing fields.
          </p>
          <p className="font-display text-xl sm:text-2xl text-[#4B1720] font-normal italic pt-2">
            "Every object is a record. Every collection is a pattern. And every pattern is made of individual things."
          </p>
        </div>

        {/* Quiet Focal Object Card */}
        <div className="bg-[#F1E7D2]/60 p-6 sm:p-10 rounded-3xl border border-[#A9854F]/30 max-w-md mx-auto shadow-sm group">
          <div className="aspect-square bg-black/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-2">
            <img
              src={returnObject.image_url!}
              alt={returnObject.title}
              className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] block">
            {returnObject.museum}
          </span>
          <h3 className="font-display text-xl font-medium text-[#211B18] mt-1">
            {returnObject.title}
          </h3>
          <p className="text-xs text-[#211B18]/60 font-sans-ui mt-1">
            {returnObject.creator} · {returnObject.date_display}
          </p>

          <button
            onClick={() => onSelectObject(returnObject)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4B1720] text-[#FBF7EE] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#340f16] transition-colors shadow-xs cursor-pointer"
          >
            <span>Revisit Object Story</span>
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-[#A9854F]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-[#211B18]/60">
          <span>What Do Museums Remember? · 504,349 Records</span>
          <a
            href="#chapter-01"
            className="inline-flex items-center gap-1.5 text-[#4B1720] font-semibold hover:underline"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to the beginning</span>
          </a>
        </div>

      </div>
    </section>
  );
};
