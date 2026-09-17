# AI STUDIO MASTER BUILD PROMPT

You are building the second-stage website for **WHAT DO MUSEUMS REMEMBER?**

## Before writing any code

Read these files completely:

1. `MUSEUM_STORY_CODER_DOSSIER.md`
2. `02_STORY/NARRATIVE_DATA_MAP.md`
3. `02_STORY/STORY_ARCHITECTURE.md`
4. `02_STORY/CHAPTER_COPY.md`
5. `03_DATA/DATASET_REGISTER.md`
6. `03_DATA/DATA_DICTIONARY.md`
7. `03_DATA/CLEANING_LOGIC.md`
8. `03_DATA/processed/combined_objects.csv`
9. `03_DATA/processed/moma_indian_makers.csv`
10. `03_DATA/manifests/story_config.json`
11. `03_DATA/manifests/analysis_findings.json`
12. `07_SOURCE_CREDITS/SOURCE_MANIFEST.csv`
13. `04_INTERACTIONS/OBJECT_STORY_SPEC.md`
14. `04_INTERACTIONS/SCROLL_BEHAVIOUR.md`
15. `04_INTERACTIONS/INTERACTION_RULES.md`
16. `08_VISUAL_SYSTEM/VISUAL_DIRECTION.md`
17. `08_VISUAL_SYSTEM/COLOR_SYSTEM.md`
18. `08_VISUAL_SYSTEM/TYPOGRAPHY.md`
19. `08_VISUAL_SYSTEM/MOTION_SYSTEM.md`
20. `09_BUILD/TECHNICAL_ARCHITECTURE.md`
21. `09_BUILD/COMPONENT_PLAN.md`

Do not start coding until the data semantics and narrative constraints are understood.

## Product requirement

Build a **single-page interactive digital exhibition**, not a dashboard.

Hero:
**WHAT DO MUSEUMS REMEMBER?**

Supporting line:
**An exploration of the objects, people, places and stories preserved in museum collections.**

Central principle:

**ZOOMED OUT = DATA**  
**ZOOMED IN = STORY**

## Narrative

Implement the 11 chapters in the Narrative Data Map in order.

Do not invent new chapters merely because a dataset exists.

Do not turn the five datasets into five separate websites.

## Visualisation philosophy

Whenever possible, the objects themselves are the visualisation.

Avoid:
- KPI cards;
- dashboard bars;
- generic pie charts;
- SaaS cards;
- analytics UI.

Prefer:
- object clusters;
- contact sheets;
- spatial timelines;
- typographic scale;
- object migration;
- visual subtraction;
- overlaps;
- density;
- editorial whitespace.

## Object Story

Implement the Object Story as a first-class overlay/panel.

On selection:
- preserve chapter state;
- preserve scroll position;
- recede the collection;
- enlarge the object;
- show only available source-supported metadata;
- allow close with Escape and a visible button;
- return focus to the trigger.

Never invent:
- object meaning;
- cultural significance;
- original use;
- provenance;
- object origin;
- symbolism.

Never treat creator nationality as object origin.

## Source links

Use `object_url` only.

If `object_url` is null, omit the original-record button.

Never construct a museum URL from an assumed URL pattern.

## Data

Load the canonical fields, not museum-specific field names inside visual components.

Keep dataset identity visible in the data layer so source-specific semantics are not lost.

The combined corpus contains 504,349 records, but this is an aggregate research corpus across five institutions. Do not label it as one museum collection.

## India chapter

Use `moma_indian_makers.csv`.

Label it:
**INDIAN MAKERS, ONE COLLECTION**

It is a subset of MoMA records where the source nationality is exactly `(Indian)`.

Do not call it:
- Metropolitan Museum;
- India collection;
- Indian-origin objects.

## Teenie Harris chapter

Use:
- 59,031 records;
- supplied images;
- supplied archive URLs;
- descriptive title text;
- keyword occurrence data.

Do not treat keyword occurrences as unique people or event counts.

## Motion

Use scroll-driven state transitions.

Motion should communicate:
- accumulation;
- categorisation;
- chronology;
- focus;
- relation;
- subtraction;
- return.

Use transforms/opacity where possible.

Virtualise dense fields.

Do not create thousands of simultaneous animation timelines.

## Performance

The browser must not render 504,349 full-resolution images.

Use:
- virtualisation;
- sampling;
- lazy loading;
- thumbnails;
- high-resolution on selection;
- canvas/SVG only where it improves dense-scene performance.

## Accessibility

Implement:
- keyboard object selection;
- visible focus;
- meaningful alt text;
- text equivalents;
- contrast;
- touch-friendly interaction;
- reduced motion;
- no colour-only encoding;
- mobile adaptation.

## Mobile

Do not simply shrink desktop.

Reduce density while preserving:
`object → pattern → story`.

Use vertical object stacks, swipeable contact sheets and simplified timelines.

## Error states

No broken image icons.

If an image fails:
- show designed no-image state;
- retain metadata;
- allow Object Story.

If data is missing:
- show the absence honestly;
- never substitute invented text.

## Deliverable

Produce:
1. one polished responsive page;
2. modular components;
3. documented data-loading layer;
4. source-safe Object Story;
5. smooth scroll transitions;
6. micro-animations;
7. reduced-motion mode;
8. mobile layout;
9. accessible keyboard navigation.

Do not build a dashboard.

Make the visitor feel they are walking through one contemporary digital exhibition made from museum records.
