# STARTER PROMPT — GOOGLE AI STUDIO

Build the final website for **WHAT DO MUSEUMS REMEMBER?** only after reading the complete project dossier and data package.

You are not designing a dashboard. You are building a **single-page contemporary digital exhibition** driven by museum collection data.

## Read before coding

- `MUSEUM_STORY_CODER_DOSSIER.md`
- `02_STORY/NARRATIVE_DATA_MAP.md`
- `02_STORY/STORY_ARCHITECTURE.md`
- `02_STORY/CHAPTER_COPY.md`
- `03_DATA/DATASET_REGISTER.md`
- `03_DATA/DATA_DICTIONARY.md`
- `03_DATA/CLEANING_LOGIC.md`
- `03_DATA/processed/combined_objects.csv`
- `03_DATA/manifests/story_config.json`
- `03_DATA/manifests/analysis_findings.json`
- `07_SOURCE_CREDITS/SOURCE_MANIFEST.csv`
- `04_INTERACTIONS/OBJECT_STORY_SPEC.md`
- `04_INTERACTIONS/SCROLL_BEHAVIOUR.md`
- `04_INTERACTIONS/INTERACTION_RULES.md`
- `08_VISUAL_SYSTEM/VISUAL_DIRECTION.md`
- `08_VISUAL_SYSTEM/COLOR_SYSTEM.md`
- `08_VISUAL_SYSTEM/TYPOGRAPHY.md`
- `08_VISUAL_SYSTEM/MOTION_SYSTEM.md`
- `09_BUILD/TECHNICAL_ARCHITECTURE.md`
- `09_BUILD/COMPONENT_PLAN.md`

## Build principle

**ZOOMED OUT = DATA. ZOOMED IN = STORY.**

The visitor should encounter museum collections first as visual patterns and then as individual objects, people, places and histories.

## Requirements

Create one polished, responsive, scroll-driven page with:

- immersive opening object;
- collection accumulation;
- object-based category visualisation;
- spatial chronology;
- creator/attribution exploration;
- geography transition;
- India-focused MoMA subset;
- Teenie Harris archive chapter;
- quantitative-to-qualitative transition;
- missing-metadata visual subtraction;
- quiet return to one object;
- first-class Object Story overlay;
- micro-animations and editorial transitions;
- keyboard navigation;
- reduced-motion support;
- mobile-specific density reduction;
- lazy loading and virtualisation.

Use the objects themselves as the visual units wherever possible. Avoid KPI cards, generic analytics dashboards, pie charts and SaaS-style UI.

Never invent museum facts, object meanings, provenance, object origin, symbolism or cultural significance. Never construct an official museum URL from an assumed URL pattern. If a source field is null, keep it null and design the absence intentionally.

The five supplied datasets are:

- Art Institute of Chicago — 122,435
- Carnegie Museum of Art — 28,269
- Teenie Harris Archive — 59,031
- The Museum of Modern Art — 155,916
- National Gallery of Art — 138,698

Total research corpus: **504,349 records**.

The supplied `Artworks.csv` is MoMA data, not Metropolitan Museum data. No dedicated Metropolitan India dataset was supplied.

Do not begin implementation until the files above have been read and their constraints understood.
