import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { MuseumObject } from '../../types/museum';
import { CURATED_OBJECTS } from '../../data/museumData';
import { UserCheck, HelpCircle, Users, Sparkles, ArrowRight } from 'lucide-react';

interface Chapter05CreatorsProps {
  onSelectObject: (obj: MuseumObject) => void;
}

export const Chapter05Creators: React.FC<Chapter05CreatorsProps> = ({ onSelectObject }) => {
  const [selectedAttributionType, setSelectedAttributionType] = useState<'all' | 'named' | 'unidentified' | 'workshop'>('named');

  const attributionTypes = [
    {
      id: 'named',
      title: 'Individual Named Creators',
      pct: '84.2%',
      description: 'Specific documented historical individuals: Fra Angelico, Christopher Williams, Honoré Daumier, Gauri Gill, Zarina, Charles "Teenie" Harris.',
      impact: 'Receives dedicated biographical indices, artist catalog raisonnés, and international searchability.',
      sampleObjects: CURATED_OBJECTS.filter(o => o.creator && !o.creator.toLowerCase().includes('unknown') && !o.creator.toLowerCase().includes('attributed'))
    },
    {
      id: 'unidentified',
      title: 'Unidentified / Anonymous Artisans',
      pct: '9.6%',
      description: 'Records cataloged as "Unidentified photographer", "Unknown American", "Unknown Maker", or "Anonymous master".',
      impact: 'The physical craft survives in the museum vault, while the human maker is cataloged as a placeholder absence.',
      sampleObjects: [
        {
          id: 'AIC:SAMPLE:UNKNOWN',
          dataset: 'aic' as const,
          museum: 'Art Institute of Chicago',
          title: 'Coverlet with Star and Diamond Pattern',
          creator: 'Unknown American weaver',
          creator_nationality: 'American',
          date_display: 'mid-19th century',
          year_start: 1850,
          year_end: 1860,
          place: 'United States',
          classification: 'Textile',
          medium: 'Cotton and wool, plain weave with supplementary patterning',
          dimensions: '228.6 × 198.1 cm',
          description: 'A masterfully woven coverlet demonstrating complex jacquard handloom technique by an unrecorded domestic artisan.',
          provenance: 'Purchased from New England collection, 1974.',
          inscription: null,
          image_url: '/images/american_coverlet.jpg',
          object_url: null,
          credit_line: 'Gift of Mrs. Julian Armstrong, Jr.',
          source_dataset: 'artic_allArtworks_expanded.csv'
        }
      ]
    },
    {
      id: 'workshop',
      title: 'Civilizations, Workshops & Dynasties',
      pct: '6.2%',
      description: 'Attributions such as "Ancient Roman", "Ancient Egyptian", "Workshop of Perugino", "Ming Dynasty artisan".',
      impact: 'The object is categorized as collective cultural patrimony rather than individual genius.',
      sampleObjects: [
        {
          id: 'NGA:SAMPLE:WORKSHOP',
          dataset: 'nga' as const,
          museum: 'National Gallery of Art',
          title: 'Sestertius of Emperor Trajan',
          creator: 'Imperial Roman Mint',
          creator_nationality: null,
          date_display: 'c. 103/111 CE',
          year_start: 103,
          year_end: 111,
          place: 'Rome, Ancient Empire',
          classification: 'Coin',
          medium: 'Struck bronze',
          dimensions: 'diameter: 34 mm',
          description: 'Imperial coinage depicting the column of Trajan and personification of Danubius, attributed to the collective state mint.',
          provenance: 'Found in Mediterranean excavations; Private collection; Donated to National Gallery of Art.',
          inscription: 'IMP CAES NERVAE TRAIANO AVG GER DAC',
          image_url: '/images/roman_sestertius.jpg',
          object_url: null,
          credit_line: 'Gift of the Numismatic Foundation',
          source_dataset: 'opendata-main/data/objects.csv'
        }
      ]
    }
  ];

  const currentType = attributionTypes.find(t => t.id === selectedAttributionType) || attributionTypes[0];

  return (
    <section id="chapter-05" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="05"
          title="WHO GETS REMEMBERED?"
          subtitle="Every record carries an attribution. Not every attribution is the same. What changes when a human name enters the ledger versus when an object is entered as anonymous?"
          question="What changes when a name enters the record?"
          badge="Room 05 · The Attribution Layer"
        />

        {/* Attribution Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {attributionTypes.map((type) => {
            const isSelected = selectedAttributionType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedAttributionType(type.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#4B1720] text-[#FBF7EE] border-[#4B1720] shadow-sm'
                    : 'bg-[#F1E7D2]/40 text-[#211B18] border-[#A9854F]/20 hover:bg-[#F1E7D2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono uppercase tracking-wider ${isSelected ? 'text-[#A9854F]' : 'text-[#A9854F]'}`}>
                    Attribution Mode
                  </span>
                  <span className="font-mono text-sm font-bold">{type.pct}</span>
                </div>
                <h3 className="font-display text-lg font-semibold block leading-snug">
                  {type.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Deep Attribution Analysis */}
        <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-10 border border-[#A9854F]/25 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A9854F] font-semibold block">
              Catalog Consequence
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211B18]">
              {currentType.title}
            </h3>

            <p className="font-serif-sub text-base sm:text-lg text-[#211B18]/80 leading-relaxed">
              {currentType.description}
            </p>

            <div className="bg-[#F1E7D2]/50 p-4 rounded-xl border border-[#A9854F]/20 space-y-1">
              <span className="text-xs font-sans-ui uppercase tracking-wider text-[#4B1720] font-semibold block">
                Institutional Asymmetry
              </span>
              <p className="text-xs sm:text-sm text-[#211B18]/80 leading-relaxed font-sans-ui">
                {currentType.impact}
              </p>
            </div>

            <div className="text-xs text-[#211B18]/60 font-sans-ui pt-2">
              Note: Across the 504,349 records, datasets record creator attributions under different institutional terms—ranging from named artist IDs (MoMA, AIC, CMOA) to role-strings and cultural designators.
            </div>
          </div>

          {/* Representative Records */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-sans-ui uppercase tracking-wider text-[#A9854F] font-semibold block">
              Records Inscribed Under This Attribution Model
            </span>

            <div className="space-y-3">
              {currentType.sampleObjects.slice(0, 3).map((obj) => (
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
                    <div className="w-16 h-16 rounded bg-[#F1E7D2] border border-[#A9854F]/30 flex flex-col items-center justify-center text-[10px] text-[#A9854F] shrink-0 font-mono text-center p-1">
                      <span>No Image</span>
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A9854F] block">
                      {obj.museum}
                    </span>
                    <h4 className="font-display text-base font-semibold text-[#211B18] group-hover:text-[#4B1720] transition-colors leading-snug truncate">
                      {obj.title}
                    </h4>
                    <p className="text-xs text-[#211B18]/80 mt-1 truncate font-medium">
                      Attribution: <span className="text-[#4B1720]">{obj.creator}</span>
                    </p>
                    <p className="text-[11px] text-[#211B18]/60 truncate font-sans-ui">
                      {obj.date_display || 'Undated'} · {obj.medium}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A9854F] group-hover:translate-x-1 transition-transform shrink-0 self-center" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
