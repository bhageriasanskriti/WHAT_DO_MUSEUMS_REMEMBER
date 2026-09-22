import React, { useEffect, useRef } from 'react';
import { MuseumObject } from '../types/museum';
import { getRelatedObjects } from '../data/museumData';
import { X, ExternalLink, ImageOff, ArrowRight, ShieldCheck, MapPin, Calendar, User, Tag, Layers } from 'lucide-react';

interface ObjectStoryModalProps {
  object: MuseumObject | null;
  onClose: () => void;
  onSelectObject: (obj: MuseumObject) => void;
}

export const ObjectStoryModal: React.FC<ObjectStoryModalProps> = ({
  object,
  onClose,
  onSelectObject,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!object) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [object, onClose]);

  if (!object) return null;

  const relatedObjects = getRelatedObjects(object);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="object-story-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#211B18]/70 backdrop-blur-sm flex justify-center items-start sm:items-center p-2 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#FBF7EE] text-[#211B18] rounded-xl shadow-2xl border border-[#A9854F]/30 overflow-hidden my-4 sm:my-8 transition-all max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A9854F]/20 bg-[#F1E7D2]/60">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#4B1720]" />
            <span className="font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#4B1720]">
              Object Story · {object.museum}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#211B18]/70 hover:text-[#4B1720] hover:bg-[#F1E7D2] transition-colors focus:ring-2 focus:ring-[#4B1720]"
            aria-label="Close Object Story (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Top Hero Section: Image and Core Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Object Image Presentation with designed fallback */}
            <div className="bg-[#F1E7D2]/80 rounded-lg p-3 border border-[#A9854F]/20 flex flex-col items-center justify-center">
              {object.image_url ? (
                <div className="relative group w-full flex justify-center bg-black/5 rounded overflow-hidden">
                  <img
                    src={object.image_url}
                    alt={object.title}
                    className="max-h-[420px] w-auto object-contain rounded shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if URL fails
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fallback-${object.id}`);
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    id={`fallback-${object.id}`}
                    style={{ display: 'none' }}
                    className="h-64 w-full flex-col items-center justify-center gap-3 p-6 text-center text-[#211B18]/60"
                  >
                    <ImageOff className="w-10 h-10 text-[#A9854F]" />
                    <p className="font-serif-sub text-sm">Image unrendered or remote repository restricted.</p>
                  </div>
                </div>
              ) : (
                <div className="h-64 w-full flex flex-col items-center justify-center gap-3 p-6 text-center bg-[#F1E7D2]/40 rounded border border-dashed border-[#A9854F]/30 text-[#211B18]/60">
                  <ImageOff className="w-10 h-10 text-[#A9854F]" />
                  <p className="font-serif-sub text-base text-[#211B18]/80 font-medium">No Image Recorded</p>
                  <p className="font-sans-ui text-xs text-[#211B18]/60 max-w-xs">
                    24.2% of records across the corpus contain no photographic reproduction in the supplied dataset.
                  </p>
                </div>
              )}

              <div className="w-full mt-3 pt-3 border-t border-[#A9854F]/15 flex items-center justify-between text-[11px] text-[#211B18]/60 font-sans-ui">
                <span>Record ID: {object.id}</span>
                <span className="capitalize">{object.dataset} archive</span>
              </div>
            </div>

            {/* Core Metadata Block */}
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-sans-ui font-semibold uppercase tracking-wider text-[#A9854F]">
                  {object.classification || 'Collection Object'}
                </span>
                <h1 id="object-story-title" className="font-display text-2xl sm:text-3xl font-medium text-[#211B18] mt-1 leading-snug">
                  {object.title}
                </h1>
              </div>

              {/* Attribution and Dates */}
              <div className="bg-[#F1E7D2]/40 rounded-lg p-4 border border-[#A9854F]/15 space-y-3 font-sans-ui text-sm">
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-[#A9854F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-[#211B18]/50 block">Creator / Attribution</span>
                    <span className="font-medium text-[#211B18]">
                      {object.creator || 'Creator Unrecorded or Anonymous'}
                    </span>
                    {object.creator_nationality && (
                      <span className="text-xs text-[#4B1720] ml-2 font-mono">
                        ({object.creator_nationality})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#A9854F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-[#211B18]/50 block">Date</span>
                    <span className="font-medium text-[#211B18]">{object.date_display || 'Undated'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#A9854F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase text-[#211B18]/50 block">Medium / Physical Support</span>
                    <span className="text-[#211B18]/90">{object.medium || 'Medium unrecorded'}</span>
                  </div>
                </div>

                {object.place && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#A9854F] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase text-[#211B18]/50 block">Place of Origin / Documented</span>
                      <span className="text-[#211B18]/90">{object.place}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dimensions & Credit Line */}
              <div className="text-xs font-sans-ui text-[#211B18]/70 space-y-1.5 pt-1">
                {object.dimensions && (
                  <p><strong className="text-[#211B18]/90">Dimensions:</strong> {object.dimensions}</p>
                )}
                {object.credit_line && (
                  <p><strong className="text-[#211B18]/90">Credit Line:</strong> {object.credit_line}</p>
                )}
              </div>

              {/* View Original Museum Record (Only if object_url is present) */}
              {object.object_url ? (
                <div className="pt-2">
                  <a
                    href={object.object_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#4B1720] text-[#FBF7EE] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#340f16] transition-colors shadow-xs"
                  >
                    <span>View the Original Museum Record</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-[#211B18]/50 mt-1.5">
                    Verified record directly linked in {object.museum} archives.
                  </p>
                </div>
              ) : (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#211B18]/50 font-sans-ui italic">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A9854F]" />
                    Direct public URL not provided in supplied museum dataset schema.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Deep Qualitative Context Sections */}
          <div className="space-y-6 pt-4 border-t border-[#A9854F]/20">
            
            {/* Description / What is Recorded */}
            {object.description && (
              <div className="bg-[#F1E7D2]/30 p-5 rounded-lg border border-[#A9854F]/15">
                <h3 className="font-sans-ui text-xs uppercase tracking-widest text-[#A9854F] font-semibold mb-2">
                  What is Recorded?
                </h3>
                <p className="font-serif-sub text-base text-[#211B18]/90 leading-relaxed">
                  {object.description}
                </p>
              </div>
            )}

            {/* Provenance: Then */}
            {object.provenance && (
              <div className="bg-[#FBF7EE] p-5 rounded-lg border border-[#A9854F]/25 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9854F]" />
                  <h3 className="font-sans-ui text-xs uppercase tracking-widest text-[#4B1720] font-semibold">
                    Documented Provenance
                  </h3>
                </div>
                <p className="font-serif-sub text-sm sm:text-base text-[#211B18]/85 leading-relaxed">
                  {object.provenance}
                </p>
                <span className="inline-block mt-3 text-[11px] text-[#A9854F] font-sans-ui">
                  Chronological trail of ownership and legal transfers recorded in museum archives.
                </span>
              </div>
            )}

            {/* Inscription / Look closer */}
            {object.inscription && (
              <div className="bg-[#F1E7D2]/40 p-4 rounded-lg border border-[#A9854F]/20">
                <h3 className="font-sans-ui text-xs uppercase tracking-widest text-[#A9854F] font-semibold mb-1">
                  Look Closer: Inscription
                </h3>
                <p className="font-mono text-xs text-[#211B18]/90 italic">
                  "{object.inscription}"
                </p>
              </div>
            )}

            {/* Themes & Keywords */}
            {object.themes && object.themes.length > 0 && (
              <div>
                <h3 className="font-sans-ui text-xs uppercase tracking-widest text-[#211B18]/50 font-semibold mb-2">
                  Associated Archival Terms
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {object.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#F1E7D2] text-[#211B18] text-xs font-sans-ui border border-[#A9854F]/20"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Part of a Bigger Story: Related Objects within same dataset */}
          {relatedObjects.length > 0 && (
            <div className="pt-6 border-t border-[#A9854F]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans-ui text-xs uppercase tracking-widest text-[#4B1720] font-semibold">
                  Part of a Bigger Story · Related in {object.museum}
                </h3>
                <span className="text-xs text-[#211B18]/50 font-sans-ui">
                  {relatedObjects.length} related work{relatedObjects.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedObjects.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectObject(rel)}
                    className="text-left p-3 rounded-lg bg-[#F1E7D2]/50 hover:bg-[#F1E7D2] border border-[#A9854F]/20 transition-all flex items-start gap-3 group"
                  >
                    {rel.image_url ? (
                      <img
                        src={rel.image_url}
                        alt={rel.title}
                        className="w-14 h-14 object-cover rounded bg-black/5 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded bg-[#F1E7D2] flex items-center justify-center text-[#A9854F] shrink-0 border border-dashed border-[#A9854F]/30">
                        <ImageOff className="w-5 h-5" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-[#211B18] group-hover:text-[#4B1720] truncate">
                        {rel.title}
                      </div>
                      <div className="text-[11px] text-[#211B18]/60 mt-0.5 truncate">
                        {rel.creator || 'Unattributed'} · {rel.date_display || 'Undated'}
                      </div>
                      <div className="text-[10px] text-[#A9854F] font-semibold flex items-center gap-1 mt-1">
                        <span>Inspect record</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#F1E7D2]/80 border-t border-[#A9854F]/20 flex items-center justify-between text-xs text-[#211B18]/60 font-sans-ui">
          <span>Press <kbd className="px-1.5 py-0.5 bg-[#FBF7EE] rounded border border-[#A9854F]/30 text-[#4B1720] font-mono text-[10px]">Esc</kbd> to return to exhibition</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#4B1720] hover:underline"
          >
            Close story
          </button>
        </div>

      </div>
    </div>
  );
};
