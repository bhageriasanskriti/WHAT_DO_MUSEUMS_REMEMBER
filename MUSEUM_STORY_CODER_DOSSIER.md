# MUSEUM STORY — CODER DOSSIER

## 1. Project

**Title:** What Do Museums Remember?  
**Hero question:** What Do Museums Remember?  
**Supporting line:** An exploration of the objects, people, places and stories preserved in museum collections.

### Experience thesis

The visitor encounters museum data twice:

**FIRST AS A PATTERN.**  
**THEN AS INDIVIDUAL OBJECTS, LIVES AND HISTORIES.**

The core interaction is:

`ZOOM OUT → DATA`  
`ZOOM IN → STORY`

This is a digital exhibition, not a dashboard.

## 2. Validated data scope

Five supplied museum datasets were successfully parsed and analysed:

- Art Institute of Chicago — 122,435 artwork records.
- Carnegie Museum of Art — 28,269 records.
- Teenie Harris Archive — 59,031 records.
- National Gallery of Art — 138,698 object records, plus relational tables.
- The Museum of Modern Art — 155,916 records.

**Combined object-record total: 504,349.**

This is an aggregate across institutions. It must **not** be described as one museum collection.

### Critical correction

The uploaded `Artworks.csv` contains MoMA-specific fields and MoMA object URLs. It is not a Metropolitan Museum dataset. Therefore the proposed “Met India subset” chapter cannot be implemented as originally described.

A derived subset of **229 MoMA records whose creator nationality is exactly `(Indian)`** was created. This supports a narrower story about **Indian makers represented in the supplied MoMA data**, not a claim about Indian object origin or an India collection.

No dedicated `met_india_metadata.csv` was supplied.

## 3. Research methodology

1. Preserve raw source files.
2. Audit schemas, IDs, relationships, missingness and media.
3. Build dataset-specific adapters into a shared canonical object model.
4. Join NGA objects to primary constituent attribution, terms, text entries and published images.
5. Calculate distributions only from available source fields.
6. Treat source taxonomies as museum-specific; avoid false cross-museum equivalence.
7. Analyse descriptive text only where supplied.
8. Track missing fields as data characteristics, not as evidence of museum quality.
9. Preserve source URLs only when explicitly present in the data.
10. Create a narrative based on evidence, then specify interactions around those findings.

Full methodology: `01_RESEARCH/RESEARCH_METHOD.md`.

## 4. Strongest validated quantitative findings

- The five supplied datasets contain **504,349 object records** in total.
- Image availability varies substantially: **57.6%–100.0% by dataset**.
- Specific object-page URLs are supplied for CMOA, Teenie Harris and many MoMA records; the AIC `api_link` is an API record URL rather than a museum object page, and NGA does not provide a human object-page URL in the supplied object table.
- AIC is dominated by prints, photographs and drawings/watercolors in its supplied artwork taxonomy.
- NGA is dominated by prints, photographs, Index of American Design records and drawings.
- MoMA is dominated by photographs, prints, illustrated books, archive records, drawings and design.
- Teenie Harris is entirely classified as `Photographic Negative` in the supplied CMOA classification field.
- NGA contains rich long-form provenance, inscription and text-entry fields unavailable in the same form across the other supplied datasets.
- Teenie Harris has extremely rich descriptive titles that can support object-level storytelling even though a separate description field is absent.

Exact calculations are in `01_RESEARCH/QUANTITATIVE_FINDINGS.md`.

## 5. Strongest qualitative material

### National Gallery of Art
The NGA relational dataset supports object stories with:
- provenance histories,
- inscriptions,
- descriptive text entries,
- creator/constituent relationships,
- object terms,
- images.

This is the strongest source for a deeply researched “Then / Now / Look closer” object view.

### Teenie Harris
The archive titles are unusually descriptive. Keyword occurrence analysis shows recurring references to:
- people and portraits,
- clothing and appearance,
- churches,
- homes,
- streets,
- clubs,
- weddings,
- schools,
- named Pittsburgh places.

These are **title keyword occurrences**, not counts of unique people/events. The interface must preserve that distinction.

### AIC / CMOA / MoMA
These datasets provide strong object-level metadata around title, maker/attribution, date, medium, classification and imagery. AIC additionally has place of origin; CMOA has provenance and creator birth/death place; MoMA has creator nationality and direct object pages for many records.

## 6. Evidence-based narrative changes

### Change 1 — Chapter 2
Do not treat the combined 504,349 records as one collection.

Use each museum's own scale, then transition to the cross-institution pattern.

### Change 2 — Chapter 4
Dates should be displayed as **institution-specific timelines** or clearly separated layers. Date fields are not semantically identical across museums, and some records use ranges, approximate dates or BCE values.

### Change 3 — Chapter 5
Use “creator attribution” rather than assuming every creator field represents a named individual. Some records contain unknown, anonymous, workshop, historical or institutional attributions.

### Change 4 — Chapter 6
Do not equate creator nationality with object origin. AIC has an explicit `place_of_origin`; other datasets may have creator nationality or birth place instead.

### Change 5 — Chapter 7
Replace “One Country, Many Histories” based on a supposed Met India dataset with:

**INDIAN MAKERS, ONE COLLECTION**

Use only the 229 MoMA records with exact source nationality `(Indian)`, and explicitly label the subset as creator-nationality based. Do not call it an India-origin collection.

### Change 6 — Chapter 9
Do not claim that all five datasets contain equivalent qualitative text. NGA has long text entries; Teenie has highly descriptive titles; other datasets are more metadata-oriented.

## 7. Final narrative

### 01 — WHAT DO MUSEUMS REMEMBER?
One object. Minimal interface. Metadata appears gradually.

### 02 — ONE OBJECT BECOMES A COLLECTION
One object expands into the scale of its institution's collection.

### 03 — WHAT DO MUSEUMS COLLECT?
Objects reorganise into actual source classifications/object types.

### 04 — WHEN DOES THE MUSEUM REMEMBER?
Objects travel through time. Pause on individual objects.

### 05 — WHO GETS REMEMBERED?
Move from objects to creator attribution. Make missing/unknown attribution visible without moralising.

### 06 — WHERE DOES CULTURE COME FROM?
Use documented place and creator-nationality fields carefully and label their semantics.

### 07 — INDIAN MAKERS, ONE COLLECTION
A slower MoMA-focused interlude using the derived 229-record Indian-nationality creator subset.

### 08 — ONE LENS, MANY LIVES
Teenie Harris: one photographer, tens of thousands of photographic negatives, dense descriptions of people, places and social life.

### 09 — FROM NUMBERS TO STORIES
Make the collection-to-object loop explicit.

### 10 — WHAT IS MISSING?
Use real metadata missingness to create visual subtraction.

### 11 — RETURN TO THE OBJECT
Collapse the collection back to one object.

## 8. Object Story

The Object Story is a first-class interaction, not a tooltip.

Flow:

`OBJECT → SELECT → COLLECTION RECEDES → OBJECT ENLARGES → STORY PANEL → RELATED OBJECTS → RETURN`

The story panel should expose only source-supported fields. “Then”, “Now” and “Look closer” are conditional sections.

Full spec: `04_INTERACTIONS/OBJECT_STORY_SPEC.md`.

## 9. Interaction language

- Scroll = narrative progression.
- Hover/focus = preview only.
- Click/tap/Enter/Space = inspect.
- Escape / close = return.
- Zoom out = quantitative.
- Zoom in = qualitative.
- No essential information is hover-only.

## 10. Visual direction

**Editorial art history × contemporary interactive archive.**

Palette family:
deep oxblood/burgundy, parchment/ivory, antique gold, ink brown/near-black, dusty sage, muted blue-grey.

Artwork imagery supplies most vivid colour.

Typography:
- display serif,
- very restrained italic/script accent,
- readable information face.

Composition:
- large crops,
- overlaps,
- contact sheets,
- asymmetric grids,
- museum-label metadata,
- negative space,
- object clusters.

Full visual system: `08_VISUAL_SYSTEM/`.

## 11. Accessibility

Required:
- keyboard selection,
- visible focus,
- alt text,
- text equivalents,
- adequate contrast,
- touch-friendly controls,
- responsive layout,
- reduced-motion mode,
- no colour-only meaning,
- clear close control,
- preserved scroll position.

## 12. Technical principles

Separate:
- data adapters,
- transforms,
- story configuration,
- visualisation components,
- Object Story,
- media resolver,
- source resolver,
- design tokens,
- motion system.

The addition of a future dataset should require an adapter/config update, not a rewrite of the story.

## 13. Build sequence

1. Confirm remaining data/media.
2. Re-run data processing.
3. Validate narrative metrics.
4. Implement design tokens.
5. Implement object field renderer.
6. Implement Object Story.
7. Implement collection object-field visualisation.
8. Implement chapter scroll choreography.
9. Add source links.
10. Add responsive/mobile density logic.
11. Add accessibility.
12. Performance-test thousands of records.
13. Only then polish micro-animation.

See `09_BUILD/BUILD_CHECKLIST.md`.
