# Cross-Dataset Findings

## 1. The five datasets are complementary, not interchangeable

The combined corpus is 504,349 records, but the institutions record different things at different granularities.

This is a feature for the story if the site preserves those differences instead of flattening them.

## 2. Photography is a strong connective visual language

Photography is prominent across:
- AIC — 24,830 records classified as `Photograph`.
- CMOA — 4,835 records classified as `photographs`.
- Teenie — all 59,031 records classified as `Photographic Negative`.
- NGA — 19,124 records classified as `Photograph`.
- MoMA — 34,714 records classified as `Photograph`.

The exact classifications are museum-specific, so the website should not sum these into a universal “photography total” without a formal taxonomy normalization.

## 3. Prints are another strong connective category

- AIC: 42,078 `Print`.
- CMOA: 8,907 `prints`.
- NGA: 69,845 `Print`.
- MoMA: 32,541 `Print`.

Again, these are source labels and should be visualised as institution-level categories before any normalized comparison.

## 4. Image access is uneven

The supplied image URL rate ranges from:
- Teenie: 100.0%
- AIC: 91.9%
- NGA: 73.4%
- CMOA: 68.1%
- MoMA: 57.6%

This makes the “What Is Missing?” chapter concrete without judging why an image is absent.

## 5. Qualitative richness is uneven

NGA is unusually rich in provenance, inscriptions and text-entry records.

Teenie is unusually rich in descriptive title text and has complete image/object URL coverage.

CMOA has substantial provenance coverage.

AIC has strong place-of-origin and taxonomy fields.

MoMA has strong creator nationality and direct object URLs for many records.

This supports a narrative that moves between different **ways of remembering**, rather than pretending all museums document objects identically.

## 6. Creator identity is not a universal person field

Creator/attribution fields contain:
- named artists;
- unknown/unidentified labels;
- historical labels;
- archive-related entities;
- roles/attribution language.

The People chapter should therefore use **creator / attribution** as the semantic umbrella.

## 7. Geography requires field-level honesty

AIC provides object `place_of_origin`.

CMOA provides creator birth/death place.

CMOA, Teenie and MoMA provide nationality-like creator fields.

These are different variables. The geography interaction should expose the variable currently being shown rather than combining them into a single “origin” map.

## 8. The cross-dataset story

The strongest cross-dataset story is not:

“Here are five museum databases.”

It is:

“Different museums leave different kinds of records around objects.”

That idea supports the central question without forcing false comparability.
