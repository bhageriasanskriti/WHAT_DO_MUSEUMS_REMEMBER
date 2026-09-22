import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { AIC_PLACES_OF_ORIGIN, CURATED_OBJECTS } from '../../data/museumData';
import { MuseumObject } from '../../types/museum';
import { MapPin, Globe, Compass, ShieldAlert, ArrowRight } from 'lucide-react';

interface Chapter06GeographyProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter06Geography: React.FC<Chapter06GeographyProps> = ({ onSelectObject }) => {
  const [selectedPlace, setSelectedPlace] = useState<string>('France');

  const distinctGeoConcepts = [
    {
      title: 'Object Place of Origin',
      label: 'Where the physical thing was made, crafted, or excavated',
      example: 'AIC records place_of_origin on 119,659 works (97.7%). e.g. "Egypt", "Roman Empire", "Japan".',
      color: '#4B1720'
    },
    {
      title: 'Creator Nationality',
      label: 'The political citizenship or affiliation of the maker',
      example: 'MoMA and CMOA record nationality on creator entities. e.g. "(Indian)", "(French)", "American".',
      color: '#A9854F'
    },
    {
      title: 'Provenance Geography',
      label: 'The historical cities through which the object moved and was owned',
      example: 'CMOA & NGA record transfer trails: Perugia → Paris → London → Weimar → New York.',
      color: '#7E8A73'
    }
  ];

  return (
    <section id="chapter-06" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="06"
          title="WHERE DOES CULTURE COME FROM?"
          subtitle="A place can describe an object: where it was made. A nationality can describe a maker: where they held citizenship. A provenance trail describes where it traveled. They are not the same thing."
          question="What can a collection’s geography actually tell us?"
          badge="Room 06 · Geography & Dislocation"
        />

        {/* Conceptual Distinction Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {distinctGeoConcepts.map((concept, idx) => (
            <div key={idx} className="bg-[#FBF7EE] p-5 rounded-2xl border border-[#A9854F]/25 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A9854F]" />
                <span className="font-sans-ui text-xs font-mono uppercase tracking-wider font-semibold text-[#4B1720]">
                  Concept 0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#211B18]">
                {concept.title}
              </h3>
              <p className="font-sans-ui text-xs text-[#211B18]/70 leading-relaxed">
                {concept.label}
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#A9854F] border-t border-[#A9854F]/15">
                {concept.example}
              </div>
            </div>
          ))}
        </div>

        {/* AIC Documented Place of Origin Case Study */}
        <div className="bg-[#F1E7D2]/40 rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#A9854F]/20">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold block mb-1">
                Dataset Investigation · Art Institute of Chicago
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211B18]">
                Documented Place of Origin (119,659 Records)
              </h3>
              <p className="font-serif-sub text-base text-[#211B18]/80 mt-1 max-w-2xl">
                97.7% of all artworks in the Art Institute of Chicago collection specify an explicit geographic origin for the object.
              </p>
            </div>

            <div className="bg-[#FBF7EE] px-4 py-2.5 rounded-xl border border-[#A9854F]/20 text-right">
              <span className="font-mono text-xl font-bold text-[#4B1720]">97.7%</span>
              <span className="text-[11px] text-[#211B18]/60 font-sans-ui block">origin coverage</span>
            </div>
          </div>

          {/* Bar Chart of Places */}
          <div className="mt-8 space-y-3">
            {AIC_PLACES_OF_ORIGIN.map((item) => {
              const maxCount = AIC_PLACES_OF_ORIGIN[0].count;
              const widthPct = Math.round((item.count / maxCount) * 100);
              const isSelected = selectedPlace === item.place;

              return (
                <button
                  key={item.place}
                  onClick={() => setSelectedPlace(item.place)}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#FBF7EE] border-[#4B1720] shadow-xs'
                      : 'bg-transparent border-transparent hover:bg-[#FBF7EE]/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-sans-ui mb-1">
                    <span className="font-medium text-[#211B18]">
                      {item.place}
                    </span>
                    <span className="font-mono font-semibold text-[#4B1720]">
                      {item.count.toLocaleString()} objects ({item.pct}%)
                    </span>
                  </div>
                  <div className="h-2 bg-[#F1E7D2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4B1720] rounded-full transition-all duration-500"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Critical Caution Notice */}
          <div className="mt-8 p-4 bg-[#FBF7EE] rounded-xl border border-[#A9854F]/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#A9854F] shrink-0 mt-0.5" />
            <div className="text-xs font-sans-ui text-[#211B18]/80 leading-relaxed">
              <strong>Methodological Boundary:</strong> While AIC provides rich <code className="bg-[#F1E7D2] px-1 py-0.5 rounded font-mono">place_of_origin</code> values, this is an AIC-specific schema field. In MoMA and CMOA, geography is captured primarily via artist nationalities. We must not conflate an object's place of manufacture with the legal nationality of the person who made it.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
