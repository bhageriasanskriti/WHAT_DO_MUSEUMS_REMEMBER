# Quantitative Findings

## Scope

All figures below were calculated from the supplied files after parsing them as structured records. They are **observed findings**, not interpretations.

### Object scale

**504,349 records** are present across the five supplied datasets.

| Dataset | Objects | Objects with image | Image % | Object-page URLs | URL % | Objects with date | Date % | Creator/attribution | Creator % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIC | 122435 | 112530 | 91.9% | 122435 | 100.0% | 122098 | 99.7% | 107382 | 87.7% |
| CMOA | 28269 | 19241 | 68.1% | 28269 | 100.0% | 26683 | 94.4% | 28251 | 99.9% |
| Teenie | 59031 | 59031 | 100.0% | 59031 | 100.0% | 59031 | 100.0% | 59031 | 100.0% |
| MoMA | 155916 | 89817 | 57.6% | 99424 | 63.8% | 153893 | 98.7% | 154656 | 99.2% |
| NGA | 138698 | 101846 | 73.4% | 0 | 0.0% | 126129 | 90.9% | 138698 | 100.0% |


> Note: NGA's supplied `customprinturl` field exists for 307 records, but it points to an NGA custom-print page rather than a museum collection object record. It is therefore not counted as an object-page URL.

## Collection taxonomy patterns

### Art Institute of Chicago — 122,435 records

Top `artwork_type_title` values:
{
  "Print": 42078,
  "Photograph": 24830,
  "Drawing and Watercolor": 13428,
  "Textile": 9723,
  "Architectural Drawing": 3397,
  "Painting": 3361,
  "Vessel": 2966,
  "Decorative Arts": 2957,
  "Coin": 2783,
  "Costume and Accessories": 2247,
  "Sculpture": 2146,
  "Glass": 1744
}

Top `department_title` values:
{
  "Prints and Drawings": 47354,
  "Photography and Media": 23335,
  "Arts of Asia": 11493,
  "Textiles": 11491,
  "Applied Arts of Europe": 5531,
  "Architecture and Design": 5375,
  "Arts of the Americas": 4147,
  "Arts of the Ancient Mediterranean and Byzantium": 2193,
  "Contemporary Art": 1541,
  "Arts of Africa": 1477
}

The strongest visualisation opportunity is an object field dominated by prints, photographs, drawings/watercolors and textiles.

### Carnegie Museum of Art — 28,269 records

Top classifications:
{
  "prints": 8907,
  "drawings and watercolors": 5605,
  "photographs": 4835,
  "Ceramics": 2161,
  "paintings": 1364,
  "Metals": 608,
  "containers": 580,
  "sculpture": 551,
  "Glass": 485,
  "Wood": 479,
  "Textiles": 465,
  "crèches": 302
}

### Teenie Harris Archive — 59,031 records

All 59,031 records are `Photographic Negative` in the supplied classification field.

This is an unusually strong basis for a dedicated archive chapter: the archive's quantitative identity is coherent, while its titles contain dense object-level description.

### National Gallery of Art — 138,698 object records

Top classifications:
{
  "Print": 69845,
  "Photograph": 19124,
  "Index of American Design": 18259,
  "Drawing": 18028,
  "Sculpture": 4504,
  "Painting": 4260,
  "Volume": 2857,
  "Decorative Art": 729,
  "Portfolio": 672,
  "Technical Material": 379
}

NGA also contains 394,957 object-term relationships, 803,134 object-constituent relationships, 210,770 dimension records, 211,762 text-entry records and 106,609 published-image records in the supplied relational data.

### The Museum of Modern Art — 155,916 records

Top classifications:
{
  "Photograph": 34714,
  "Print": 32541,
  "Illustrated Book": 27723,
  "Mies van der Rohe Archive": 15156,
  "Drawing": 14100,
  "Design": 12293,
  "Architecture": 4158,
  "Painting": 2411,
  "Video": 2327,
  "Notebook": 1964,
  "Sculpture": 1770,
  "Multiple": 1184
}

The supplied MoMA data has a substantial concentration in photography, print, illustrated books, archive records, drawing and design.

## Creator attribution

A simple “known artist” metric would be misleading because creator fields contain different entity types and attribution language.

Examples:
- AIC contains labels such as `Ancient Roman`, `Ancient Egyptian`, `Unknown Maker` and named artists.
- CMOA contains `unknown American`, named people and role strings.
- MoMA contains `Unidentified photographer` and archive-related creators.
- NGA attribution includes named artists as well as historical/anonymous-style labels.
- Teenie Harris is overwhelmingly attributed to Charles “Teenie” Harris.

Use the label **creator / attribution** in the interface unless a dataset-specific field is being discussed.

## Image availability

The combined processed table contains **382,465 records with an image URL (75.8%)**.

This is not a statement about what is physically illustrated in the museum; it is a statement about image URLs available in the supplied data.

Image availability:
- AIC: 91.9%
- CMOA: 68.1%
- Teenie: 100.0%
- MoMA: 57.6%
- NGA: 73.4%

This supports a deliberate no-image state rather than dropping records without images.

## Date coverage

Dates are richly represented but are **not semantically identical across datasets**.

- AIC: 99.7% have a populated `date_display`.
- CMOA: 94.4%.
- Teenie: 100.0%.
- MoMA: 98.7%.
- NGA: 90.9%.

The raw data includes BCE/ancient dates in AIC, CMOA and NGA. Teenie is concentrated in the 20th century. Therefore the timeline should allow museum-specific time density and avoid implying that all five datasets have equal chronological coverage.

## Missing metadata

The combined table has:
- 14.6% with an NGA-derived long-form description field;
- 20.6% with provenance;
- 75.8% with image URLs;
- 37.0% with specific object-page URLs.

These percentages are **combined-field availability**, not museum performance scores.

## Strongest metrics for the story

Use:
1. institution-level object counts;
2. object-image availability;
3. taxonomy concentration;
4. date coverage;
5. creator/attribution availability;
6. missing metadata;
7. Teenie title keyword occurrences;
8. NGA provenance/inscription/text availability.

Avoid generic KPI-card presentation.
