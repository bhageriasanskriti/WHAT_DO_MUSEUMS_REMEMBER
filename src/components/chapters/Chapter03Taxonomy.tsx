import React, { useState } from 'react';
import { ChapterHeader } from '../ChapterHeader';
import { INSTITUTIONS } from '../../data/museumData';
import { MuseumId } from '../../types/museum';
import { Layers, FileText, Camera, Palette, Scissors, Building, Eye } from 'lucide-react';

export const Chapter03Taxonomy: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Prints & Multiples');

  const overarchingCategories = [
    {
      id: 'prints',
      name: 'Prints & Multiples',
      totalCount: 153371,
      share: '30.4%',
      icon: FileText,
      description: 'The single largest category across modern Western museum repositories. Etchings, engravings, lithographs, woodcuts, and portfolio editions.',
      breakdown: [
        { museum: 'National Gallery of Art', count: 69845, label: 'Print' },
        { museum: 'Art Institute of Chicago', count: 42078, label: 'Print' },
        { museum: 'The Museum of Modern Art', count: 32541, label: 'Print' },
        { museum: 'Carnegie Museum of Art', count: 8907, label: 'prints' },
      ]
    },
    {
      id: 'photos',
      name: 'Photographs & Negatives',
      totalCount: 142534,
      share: '28.3%',
      icon: Camera,
      description: 'Gelatin silver prints, albumen prints, daguerreotypes, and 59,031 film negatives from the Teenie Harris Archive.',
      breakdown: [
        { museum: 'Teenie Harris Archive', count: 59031, label: 'Photographic Negative' },
        { museum: 'The Museum of Modern Art', count: 34714, label: 'Photograph' },
        { museum: 'Art Institute of Chicago', count: 24830, label: 'Photograph' },
        { museum: 'National Gallery of Art', count: 19124, label: 'Photograph' },
        { museum: 'Carnegie Museum of Art', count: 4835, label: 'photographs' },
      ]
    },
    {
      id: 'drawings',
      name: 'Drawings & Watercolors',
      totalCount: 51161,
      share: '10.1%',
      icon: Palette,
      description: 'Works on paper including preparatory sketches, architectural renderings, pastels, and ink washes.',
      breakdown: [
        { museum: 'National Gallery of Art', count: 18028, label: 'Drawing' },
        { museum: 'The Museum of Modern Art', count: 14100, label: 'Drawing' },
        { museum: 'Art Institute of Chicago', count: 13428, label: 'Drawing and Watercolor' },
        { museum: 'Carnegie Museum of Art', count: 5605, label: 'drawings and watercolors' },
      ]
    },
    {
      id: 'books_archives',
      name: 'Books & Architectural Archives',
      totalCount: 45736,
      share: '9.1%',
      icon: Building,
      description: 'Illustrated artists’ books, the Mies van der Rohe Archive (15,156 records at MoMA), and institutional folios.',
      breakdown: [
        { museum: 'The Museum of Modern Art', count: 27723, label: 'Illustrated Book' },
        { museum: 'The Museum of Modern Art', count: 15156, label: 'Mies van der Rohe Archive' },
        { museum: 'National Gallery of Art', count: 2857, label: 'Volume' },
      ]
    },
    {
      id: 'paintings',
      name: 'Paintings & Panels',
      totalCount: 11396,
      share: '2.3%',
      icon: Eye,
      description: 'Despite commanding the popular museum imagination and gallery centerpieces, paintings constitute only 2.3% of the total research corpus.',
      breakdown: [
        { museum: 'National Gallery of Art', count: 4260, label: 'Painting' },
        { museum: 'Art Institute of Chicago', count: 3361, label: 'Painting' },
        { museum: 'The Museum of Modern Art', count: 2411, label: 'Painting' },
        { museum: 'Carnegie Museum of Art', count: 1364, label: 'paintings' },
      ]
    },
    {
      id: 'decorative',
      name: 'Decorative Arts & Ceramics',
      totalCount: 18450,
      share: '3.7%',
      icon: Scissors,
      description: 'Textiles, porcelain, metalwork, vessels, coins, costume accessories, and Index of American Design records.',
      breakdown: [
        { museum: 'National Gallery of Art', count: 18259, label: 'Index of American Design' },
        { museum: 'Art Institute of Chicago', count: 9723, label: 'Textile' },
        { museum: 'Art Institute of Chicago', count: 2966, label: 'Vessel' },
        { museum: 'Carnegie Museum of Art', count: 2161, label: 'Ceramics' },
      ]
    }
  ];

  const currentCat = overarchingCategories.find(c => c.name === selectedCategory) || overarchingCategories[0];

  return (
    <section id="chapter-03" className="py-20 sm:py-28 border-b border-[#A9854F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ChapterHeader
          number="03"
          title="WHAT DO MUSEUMS COLLECT?"
          subtitle="Objects begin to gather around what they have in common. Popular memory imagines museums as halls of oil paintings, but catalog records reveal that collections are overwhelmingly paper, film, and multiples."
          question="What kinds of objects dominate each supplied collection?"
          badge="Room 03 · Taxonomy & Materiality"
        />

        {/* Insight Banner */}
        <div className="p-6 rounded-2xl bg-[#4B1720] text-[#FBF7EE] shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] block mb-1">
              Quantitative Discovery
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium leading-snug">
              Prints & Photographs make up over 58% of all 504,349 records.
            </h3>
            <p className="font-serif-sub text-base text-[#F1E7D2]/80 mt-2 leading-relaxed">
              While framed oil paintings form only 2.3% of the combined datasets, works reproduced on paper and film negatives constitute the vast archival majority.
            </p>
          </div>
          <div className="flex md:flex-col items-baseline md:items-end gap-2 shrink-0 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6">
            <span className="text-4xl font-display font-bold text-[#A9854F]">295,905</span>
            <span className="text-xs uppercase tracking-wider font-mono opacity-80">Prints & Photos</span>
          </div>
        </div>

        {/* Interactive Taxonomy Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {overarchingCategories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#FBF7EE] border-[#4B1720] shadow-sm ring-2 ring-[#4B1720]/20'
                    : 'bg-[#F1E7D2]/40 border-[#A9854F]/20 hover:bg-[#F1E7D2]'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-[#4B1720]' : 'text-[#A9854F]'}`} />
                <span className="text-xs font-mono text-[#A9854F] block">{cat.share}</span>
                <span className="font-display text-sm font-semibold text-[#211B18] block mt-0.5 leading-snug">
                  {cat.name}
                </span>
                <span className="text-[11px] text-[#211B18]/60 mt-1 block font-mono">
                  {cat.totalCount.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="bg-[#FBF7EE] rounded-2xl p-6 sm:p-8 border border-[#A9854F]/25 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#A9854F]/20">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold">
                Class Distribution Focus
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211B18] mt-1">
                {currentCat.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-display text-2xl font-bold text-[#4B1720]">
                {currentCat.totalCount.toLocaleString()} objects
              </span>
              <span className="text-xs block text-[#211B18]/60 font-sans-ui mt-0.5">
                {currentCat.share} of total research corpus
              </span>
            </div>
          </div>

          <p className="font-serif-sub text-base text-[#211B18]/80 my-5 leading-relaxed">
            {currentCat.description}
          </p>

          {/* Breakdown bars across institutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A9854F] font-semibold">
              Presence in Participating Collections
            </h4>

            <div className="space-y-3">
              {currentCat.breakdown.map((item, idx) => {
                const maxInCat = Math.max(...currentCat.breakdown.map(b => b.count));
                const pct = Math.round((item.count / maxInCat) * 100);

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-sans-ui">
                      <span className="font-medium text-[#211B18]">
                        {item.museum} <span className="text-[#A9854F] font-mono">({item.label})</span>
                      </span>
                      <span className="font-mono font-semibold text-[#4B1720]">
                        {item.count.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#F1E7D2] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#4B1720] rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
