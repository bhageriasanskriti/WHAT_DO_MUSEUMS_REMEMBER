import React, { useState, useEffect } from 'react';
import { CHAPTERS } from '../data/museumData';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';

interface NavigationRailProps {
  activeChapter: string;
  onSelectChapter: (id: string) => void;
  // Optional for backwards compatibility
  reducedMotion?: boolean;
  onToggleReducedMotion?: () => void;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const currentChapterObj = CHAPTERS.find((ch) => ch.id === activeChapter);

  return (
    <>
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FBF7EE]/95 backdrop-blur-md border-b border-[#A9854F]/20 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand & Exhibition Title */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4B1720] inline-block animate-pulse" />
            <a 
              href="#chapter-01" 
              className="font-display text-lg sm:text-xl font-medium tracking-tight text-[#211B18] hover:text-[#4B1720] transition-colors"
            >
              WHAT DO MUSEUMS REMEMBER?
            </a>
            <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#A9854F] border-l border-[#A9854F]/30 pl-3 font-sans-ui">
              504,349 Records · 5 Institutions
            </span>
          </div>

          {/* Top Navigation Right: Hamburger Rooms Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-[#A9854F]/30 bg-[#F1E7D2]/50 hover:bg-[#F1E7D2] text-[#211B18] transition-all font-sans-ui text-xs font-medium cursor-pointer shadow-xs group"
              aria-label="Toggle exhibition rooms navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-[#4B1720] transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-4 h-4 text-[#4B1720] group-hover:scale-110 transition-transform" />
              )}
              <span className="font-mono text-[#A9854F] font-semibold">
                Room {activeChapter}
              </span>
              <span className="hidden sm:inline text-[#211B18]/80 font-sans-ui">
                Rooms Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Over Rooms Navigation Drawer */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#211B18]/60 backdrop-blur-xs flex justify-end animate-fade-in"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Exhibition rooms navigation"
        >
          <div 
            className="w-full max-w-md h-full bg-[#FBF7EE] border-l border-[#A9854F]/30 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#A9854F]/20 mb-6">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-[#4B1720]" />
                  <div>
                    <h2 className="font-display font-medium text-xl text-[#211B18]">
                      Exhibition Rooms
                    </h2>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A9854F]">
                      11 Spatial Narrative Chapters
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#211B18]/70 hover:text-[#4B1720] hover:bg-[#F1E7D2] transition-colors"
                  aria-label="Close rooms menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Rooms List */}
              <div className="space-y-1.5">
                {CHAPTERS.map((ch) => {
                  const isActive = activeChapter === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        onSelectChapter(ch.sectionAnchor);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl flex items-center justify-between gap-3 transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-[#4B1720] text-[#FBF7EE] shadow-sm'
                          : 'hover:bg-[#F1E7D2] text-[#211B18] border border-transparent hover:border-[#A9854F]/20'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className={`text-xs font-mono font-bold pt-0.5 ${isActive ? 'text-[#A9854F]' : 'text-[#A9854F]'}`}>
                          {ch.number}
                        </span>
                        <div className="min-w-0">
                          <div className={`text-xs font-semibold uppercase tracking-wider font-sans-ui truncate ${isActive ? 'text-[#FBF7EE]' : 'text-[#211B18]'}`}>
                            {ch.title}
                          </div>
                          <div className={`text-[11px] line-clamp-1 mt-0.5 font-serif-sub ${isActive ? 'text-[#F1E7D2]/80' : 'text-[#211B18]/60'}`}>
                            {ch.question}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-[#A9854F] translate-x-0.5' : 'text-[#211B18]/30 group-hover:text-[#4B1720] group-hover:translate-x-0.5'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 mt-6 border-t border-[#A9854F]/20 flex flex-col gap-1 text-[11px] text-[#211B18]/60 font-sans-ui">
              <span className="font-medium text-[#211B18]/80">What Do Museums Remember?</span>
              <span>504,349 Collection Records · 5 Major Public Institutions</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationRail;
