import React, { useState, useEffect } from 'react';
import { NavigationRail } from './components/NavigationRail';
import { ObjectStoryModal } from './components/ObjectStoryModal';
import { ExhibitionFooter } from './components/ExhibitionFooter';
import { MuseumObject } from './types/museum';
import { CHAPTERS } from './data/museumData';

// All 11 Chapters
import { Chapter01Hero } from './components/chapters/Chapter01Hero';
import { Chapter02Accumulation } from './components/chapters/Chapter02Accumulation';
import { Chapter03Taxonomy } from './components/chapters/Chapter03Taxonomy';
import { Chapter04Timeline } from './components/chapters/Chapter04Timeline';
import { Chapter05Creators } from './components/chapters/Chapter05Creators';
import { Chapter06Geography } from './components/chapters/Chapter06Geography';
import { Chapter07IndianMakers } from './components/chapters/Chapter07IndianMakers';
import { Chapter08TeenieHarris } from './components/chapters/Chapter08TeenieHarris';
import { Chapter09MacroMicro } from './components/chapters/Chapter09MacroMicro';
import { Chapter10Missingness } from './components/chapters/Chapter10Missingness';
import { Chapter11Return } from './components/chapters/Chapter11Return';

export function App() {
  const [activeChapter, setActiveChapter] = useState<string>('01');
  const [inspectedObject, setInspectedObject] = useState<MuseumObject | null>(null);

  // Track active chapter on scroll using IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chapterNumber = entry.target.id.replace('chapter-', '');
          setActiveChapter(chapterNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.1,
    });

    CHAPTERS.forEach((ch) => {
      const el = document.getElementById(ch.sectionAnchor);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectChapter = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7EE] text-[#211B18]">
      {/* Top Header & Navigation */}
      <NavigationRail
        activeChapter={activeChapter}
        onSelectChapter={handleSelectChapter}
      />

      {/* Main Narrative Scroll Experience */}
      <main className="relative transition-all">
        {/* Room 01: Hero Object & The Threshold */}
        <Chapter01Hero onSelectObject={setInspectedObject} />

        {/* Room 02: Accumulation & The 504,349 Corpus */}
        <Chapter02Accumulation />

        {/* Room 03: Taxonomy & Material Classifications */}
        <Chapter03Taxonomy />

        {/* Room 04: Spatial Timeline & Epochs */}
        <Chapter04Timeline onSelectObject={setInspectedObject} />

        {/* Room 05: Attribution & The Memory of Names */}
        <Chapter05Creators onSelectObject={setInspectedObject} />

        {/* Room 06: Geography & Origin Dislocation */}
        <Chapter06Geography onSelectObject={setInspectedObject} />

        {/* Room 07: Indian Makers, One Collection */}
        <Chapter07IndianMakers onSelectObject={setInspectedObject} />

        {/* Room 08: Teenie Harris Community Archive */}
        <Chapter08TeenieHarris onSelectObject={setInspectedObject} />

        {/* Room 09: The Macro-Micro Loop */}
        <Chapter09MacroMicro onSelectObject={setInspectedObject} />

        {/* Room 10: Missingness & Absence Subtraction */}
        <Chapter10Missingness />

        {/* Room 11: Return to the Singular Object */}
        <Chapter11Return onSelectObject={setInspectedObject} />
      </main>

      {/* Exhibition Footer with Archival Citations */}
      <div>
        <ExhibitionFooter />
      </div>

      {/* Object Story Modal / Overlay */}
      {inspectedObject && (
        <ObjectStoryModal
          object={inspectedObject}
          onClose={() => setInspectedObject(null)}
          onSelectObject={(obj) => setInspectedObject(obj)}
        />
      )}
    </div>
  );
}

export default App;
