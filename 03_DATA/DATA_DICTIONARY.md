# Canonical Data Dictionary

The canonical object model is intentionally sparse. Unsupported fields remain null.

| Canonical field | AIC | CMOA | Teenie | NGA | MoMA |
|---|---|---|---|---|---|
| `id` | `id` | `id` | `id` | `objectid` | `ObjectID` |
| `dataset` | `aic` | `cmoa` | `teenie` | `nga` | `moma` |
| `museum` | fixed institution label | fixed label | fixed label | fixed label | fixed label |
| `title` | `title` | `title` | `title` | `title` | `Title` |
| `creator` | `artist_title` | `full_name` | `full_name` | `attribution` / primary constituent name | `Artist` |
| `creator_id` | `artist_id` | `artist_id` | `artist_id` | primary `constituentid` | `ConstituentID` |
| `creator_nationality` | null | `nationality` | `nationality` | primary constituent `nationality` | `Nationality` |
| `date_display` | `date_display` | `creation_date` | `creation_date` | `displaydate` | `Date` |
| `year_start` | parsed `date_start` | parsed `creation_date_earliest` | parsed `creation_date_earliest` | `beginyear` | parsed `BeginDate` |
| `year_end` | parsed `date_end` | parsed `creation_date_latest` | parsed `creation_date_latest` | `endyear` | parsed `EndDate` |
| `period` | derived century from year_start | derived | derived | derived | derived |
| `place` | `place_of_origin` | null | null | null | null |
| `region/country/culture` | null | null | null | null | null |
| `classification` | `classification_titles` | `classification` | `classification` | `classification` | `Classification` |
| `object_type` | `artwork_type_title` | null | null | `subclassification` | null |
| `medium` | `medium_display` | `medium` | `medium` | `medium` | `Medium` |
| `materials` | parsed `material_titles` | null | null | null | null |
| `dimensions` | `dimensions` | source dimension fields not flattened in current adapter | source dimension fields not flattened | `dimensions` | `Dimensions` |
| `description` | null | null | null | concatenated text entries | null |
| `provenance` | null | `provenance_text` | `provenance_text` | `provenancetext` | null |
| `inscription` | null | null | null | `inscription` | null |
| `themes` | terms/styles/techniques | null | null | object terms | null |
| `image_url` | `image_link` | `image_url` | `image_url` | first published-image `iiifurl` | `ImageURL` |
| `local_image` | null | null | null | null | null |
| `object_url` | null | `web_url` not present | `web_url` | null | `URL` |
| `credit_line` | `credit_line` | `credit_line` | `credit_line` | `creditline` | `CreditLine` |
| `source_dataset` | filename | filename | filename | source table | filename |

## Semantic warnings

- `creator_nationality` must never be presented as object origin.
- CMOA `birth_place` / `death_place` are creator fields and were not mapped to `place`.
- AIC `place_of_origin` is object-level source metadata and should be labelled as such.
- `period` is derived, not a museum-provided period taxonomy.
