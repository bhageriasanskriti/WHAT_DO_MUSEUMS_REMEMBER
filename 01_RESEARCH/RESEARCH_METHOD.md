# Research Method

## Research objective

Determine whether the supplied museum data can support a single scroll-driven digital exhibition in which collection-scale patterns lead to object-scale stories.

## Procedure

### 1. Inventory
Every uploaded archive was opened and its internal files enumerated.

### 2. Schema audit
For each table/file, field names, formats, IDs, row counts and relationships were inspected.

### 3. Raw preservation
No source file was edited. The package stores extracted source files under `03_DATA/raw/`.

### 4. Relational integration
NGA was treated as a relational dataset rather than a single flat table:
- objects ↔ constituents
- objects ↔ terms
- objects ↔ text entries
- objects ↔ historical data
- objects ↔ published images

A primary constituent was selected by lowest available `displayorder` per object for the canonical creator field. This is a build convenience, not a claim that it is the only creator.

### 5. Canonical model
Dataset-specific records were adapted into the shared object model documented in `03_DATA/DATA_DICTIONARY.md`.

### 6. Derived fields
- `year_start` / `year_end`: parsed from source date fields.
- `period`: derived from `year_start` as a century label.
- `materials`: parsed from AIC's list-like `material_titles`.
- `themes`: AIC term/style/technique values and NGA object terms, capped at 20 per object in the build table.
- NGA `description`: first distinct text entries concatenated and capped at 2,500 characters in the intermediate adapter; the final combined build table caps long text at 1,200 characters.

### 7. Missingness
Blank, NaN and equivalent null-like values were treated as missing. Missingness is preserved as null/blank rather than filled with guessed values.

### 8. Qualitative analysis
Text was analysed descriptively. Teenie keyword frequencies are occurrences in titles. No automated semantic inference was used to assert cultural significance.

### 9. URL policy
Specific object URLs are retained only when supplied in the source data. No museum URL pattern was fabricated.

### 10. Limitations

- Museum taxonomies are not interchangeable.
- A creator nationality is not an object origin.
- A birth place is not an object origin.
- A title keyword is not necessarily a unique subject.
- Image URL presence is not image-rights clearance.
- A populated provenance field is not proof of complete provenance.
- Missing metadata is not evidence of poor curatorial practice.
