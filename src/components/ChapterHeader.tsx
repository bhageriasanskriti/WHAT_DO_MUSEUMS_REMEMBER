import React from 'react';

interface ChapterHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  question: string;
  badge?: string;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  number,
  title,
  subtitle,
  question,
  badge
}) => {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-sans-ui text-xs font-semibold tracking-widest text-[#A9854F] uppercase">
          Chapter {number}
        </span>
        {badge && (
          <span className="inline-block text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1E7D2] text-[#4B1720] font-sans-ui font-medium">
            {badge}
          </span>
        )}
      </div>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211B18] leading-[1.15] mb-4">
        {title}
      </h2>

      <p className="font-serif-sub text-lg sm:text-xl text-[#211B18]/80 leading-relaxed mb-5 italic">
        "{question}"
      </p>

      <p className="font-sans-ui text-sm sm:text-base text-[#211B18]/70 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
