# Qualitative Findings

## Evidence rule

These findings describe fields actually present in the supplied datasets. No cultural significance, original function, provenance interpretation or symbolism is inferred from appearance.

## 1. National Gallery of Art — richest contextual record

The NGA relational data supports a strong object-story layer because it contains:

- `objects.provenancetext`
- `objects.inscription`
- `objects_text_entries.text`
- `objects_historical_data.*`
- object–constituent relationships
- object terms
- published images

Availability at object level:
- provenance: 72,256 / 138,698 = 52.1%
- inscriptions: 76,991 / 138,698 = 55.5%
- objects with text entries: 73,560 / 138,698 = 53.0%
- objects with a published image: 101,846 / 138,698 = 73.4%

This supports a conditional Object Story with sections such as “What is recorded?”, “Provenance”, “Inscription” and “Related terms”.

## 2. Teenie Harris — descriptive titles as archive evidence

The Teenie Harris file has no separate description field, but its titles are unusually descriptive.

Selected **keyword occurrence counts in titles**:
| Keyword | Occurrences | % of 59,031 records |
| --- | --- | --- |
| portrait | 29131 | 49.3% |
| women | 16313 | 27.6% |
| men | 14398 | 24.4% |
| church | 4180 | 7.1% |
| street | 3757 | 6.4% |
| home | 2681 | 4.5% |
| club | 2810 | 4.8% |
| wedding | 2310 | 3.9% |
| school | 1370 | 2.3% |
| children | 1796 | 3.0% |
| Pittsburgh | 3197 | 5.4% |
| Hill District | 1342 | 2.3% |
| Homewood | 788 | 1.3% |


These are **keyword occurrences**, not unique people, places or events.

The titles can support a contact-sheet/contact-index interaction:
`many photographs → recurring terms → one caption → one image`.

The supplied data also contains direct Teenie object URLs and image URLs for every record.

## 3. Carnegie Museum of Art — provenance

25,415 of 28,269 CMOA records contain `provenance_text` (89.9%).

This supports a provenance-aware Object Story for selected CMOA objects.

## 4. Art Institute of Chicago — place of origin

119,659 of 122,435 AIC records contain `place_of_origin` (97.7%).

Top values include:
{
  "United States": 38302,
  "France": 15223,
  "Japan": 11192,
  "England": 8511,
  "Italy": 4940,
  "Germany": 4104,
  "China": 3183,
  "Egypt": 1923,
  "Roman Empire": 1499,
  "Spain": 1410
}

This is useful for the geography chapter, but it is an AIC-specific object-origin field. It must not be treated as equivalent to creator nationality in other datasets.

## 5. MoMA — Indian-nationality creator subset

The supplied MoMA dataset contains **229 records with exact source value `Nationality = (Indian)`**.

This can support a visual interlude about **Indian makers represented in the supplied MoMA data**.

It cannot support:
- a claim that all 229 objects originated in India;
- a claim about MoMA's entire India collection;
- a claim about provenance or colonial movement.

The derived subset is stored at `03_DATA/processed/moma_indian_makers.csv`.

## 6. What the data does not support

The supplied datasets do not provide a uniform description/provenance/culture/place schema across all institutions.

Therefore the website should never present a single universal “meaning”, “origin”, “culture” or “historical context” field as though every museum records it in the same way.

## 7. Object-story exemplars

See `05_ONE_PERSON_S_CHENNAI/teenie-harris/TEENIE_HARRIS_STORY.md` and the JSON configuration in `03_DATA/manifests/object_story_examples.json`.
