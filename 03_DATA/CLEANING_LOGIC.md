# Cleaning Logic

## Raw rule

Never edit files under `03_DATA/raw/`.

## Null handling

Empty strings, NaN, `None`, `null` and equivalent placeholder values are treated as missing.

## IDs

Canonical IDs are namespaced:
- `AIC:<id>`
- `CMOA:<source id>`
- `TEENIE:<source id>`
- `NGA:<objectid>`
- `MOMA:<ObjectID>`

This prevents accidental ID collisions across institutions.

## Dates

The adapter extracts the first plausible 3–4 digit year from source date fields. Original display strings remain in `date_display`.

`year_start` and `year_end` are numeric convenience fields.

`period` is derived from `year_start` and should be labelled as a derived century grouping.

## NGA joins

Primary creator:
- sort `objects_constituents` by `objectid`, `displayorder`;
- keep the first row per object;
- join to `constituents` for display name/nationality.

Images:
- sort published images by object and sequence;
- retain the first image URL per object.

Terms:
- group `objects_terms` by object;
- retain distinct terms, capped at 20 in the processed build table.

Text:
- group `objects_text_entries` by object;
- concatenate distinct text values;
- cap the adapter text at 2,500 characters;
- final combined build table caps long text fields at 1,200 characters for practical web transfer.

## AIC list-like fields

`material_titles`, `term_titles`, `style_titles` and `technique_titles` are parsed from their serialized list representation when valid.

## Processed CSV array encoding

For CSV compatibility:
- `materials` and `themes` are pipe-delimited strings.
- Empty arrays become blank.

The JSON/story configuration should treat them as arrays when loaded into JavaScript.

## MoMA India subset

`moma_indian_makers.csv` is a **derived analytical subset**, selected only where the supplied source value `Nationality` equals `(Indian)`.

It is not an India-origin subset.
