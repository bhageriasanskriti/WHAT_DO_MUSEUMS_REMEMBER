import React from 'react';
import { INSTITUTIONS } from '../data/museumData';
import { Database, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const ExhibitionFooter: React.FC = () => {
  return (
    <footer className="bg-[#211B18] text-[#FBF7EE] py-16 border-t border-[#A9854F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9854F] font-semibold block">
              Digital Exhibition & Research Archive
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
              WHAT DO MUSEUMS REMEMBER?
            </h3>
            <p className="font-serif-sub text-sm sm:text-base text-[#F1E7D2]/80 max-w-lg leading-relaxed">
              An interactive single-page digital exhibition investigating the structural boundaries, missing fields, and human stories recorded across 504,349 museum collection records.
            </p>
            <div className="pt-2 text-xs font-mono text-[#A9854F] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A9854F]" />
              <span>Evidence-based curation · Zero fabricated museum claims</span>
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <h4 className="font-sans-ui text-xs uppercase tracking-widest text-[#A9854F] font-semibold">
              Research Corpus Data Sources
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans-ui">
              {INSTITUTIONS.map((inst) => (
                <div key={inst.id} className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-medium text-[#FBF7EE] block">{inst.institution}</span>
                  <span className="font-mono text-[11px] text-[#A9854F] block mt-0.5">
                    {inst.records.toLocaleString()} records · {inst.imagePct}% images
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-white/50">
          <div>
            Built with strict adherence to the archival philosophy: <em>Zoomed out = Data. Zoomed in = Story.</em>
          </div>
          <div className="text-[11px] font-mono text-[#A9854F]">
            Research Corpus: 504,349 Objects · 5 Archives
          </div>
        </div>

      </div>
    </footer>
  );
};
