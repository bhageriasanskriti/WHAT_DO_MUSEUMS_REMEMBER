# WHAT DO MUSEUMS REMEMBER?

## Coder-ready data storytelling dossier

This package is the **research + data + design specification** for a future single-page interactive museum data story.

It is **not the final website**.

The intended final experience is a contemporary digital exhibition where visitors move between:

**OBJECT → COLLECTION → PATTERN → PEOPLE → PLACE → ARCHIVE → GAPS → OBJECT**

The core principle is:

> **ZOOMED OUT = DATA · ZOOMED IN = STORY**

---

## 1. What is inside?

| Folder | Purpose |
|---|---|
| `00_START_HERE` | Orientation and package manifest |
| `01_RESEARCH` | Audits, quantitative findings, qualitative findings and method |
| `02_STORY` | Narrative architecture, chapter copy and data map |
| `03_DATA` | Raw datasets, processed canonical data, manifests and data dictionary |
| `04_INTERACTIONS` | Object Story, scroll and interaction rules |
| `05_ONE_PERSON_S_CHENNAI` | Focused archive story specification; currently Teenie Harris |
| `06_MEDIA` | Image/media folders and media strategy |
| `07_SOURCE_CREDITS` | Source URLs, image credits and credit policy |
| `08_VISUAL_SYSTEM` | Art direction, colour, typography and motion |
| `09_BUILD` | Technical architecture, components, checklist and AI Studio prompt |

The top level also contains `starter-prompt.md`, which is the short entry prompt for Google AI Studio.

---

## 2. What to read first

For a non-technical workflow:

1. Open `00_START_HERE/START_HERE.md`.
2. Read `MUSEUM_STORY_CODER_DOSSIER.md`.
3. Read `02_STORY/NARRATIVE_DATA_MAP.md`.
4. Open `03_DATA/processed/combined_objects.csv` to understand the canonical object data.
5. Read `04_INTERACTIONS/OBJECT_STORY_SPEC.md`.
6. Read `08_VISUAL_SYSTEM/VISUAL_DIRECTION.md`.
7. Give Google AI Studio `starter-prompt.md` together with the package.

---

## 3. The actual datasets

### Successfully analysed

- Art Institute of Chicago — `03_DATA/raw/artic/artic_allArtworks_expanded.csv` — **122,435 records**
- Carnegie Museum of Art — `03_DATA/raw/cmoa/cmoa.csv` — **28,269 records**
- Teenie Harris Archive — `03_DATA/raw/teenie/teenie.csv` — **59,031 records**
- The Museum of Modern Art — `03_DATA/raw/moma/Artworks.csv` — **155,916 records**
- National Gallery of Art — `03_DATA/raw/nga/opendata-main/` — **138,698 object records plus relational tables**

Total canonical research corpus: **504,349 object records**.

### Important correction

`Artworks.csv` is **MoMA** data. It is not a Metropolitan Museum dataset.

A dedicated `met_india_metadata.csv` was **not supplied**. The placeholder `03_DATA/raw/met_india/` is retained for future addition.

---

## 4. The combined dataset

The most important implementation file is:

`03_DATA/processed/combined_objects.csv`

It contains the canonical cross-dataset object model. Missing values remain null.

The canonical fields are:

`id, dataset, museum, title, creator, creator_id, creator_nationality, date_display, year_start, year_end, period, place, region, country, culture, classification, object_type, medium, materials, dimensions, description, provenance, inscription, themes, image_url, local_image, object_url, credit_line, source_dataset`

This file is the main data source for the future website.

---

## 5. Do not edit raw data

**Never modify anything inside `03_DATA/raw/`.**

Raw files are preserved so that every transformation remains traceable.

If you add a new dataset:

1. Create a new folder inside `03_DATA/raw/additional_datasets/`.
2. Give it one folder containing the dataset's original internal structure.
3. Do not flatten it.
4. Record it in `03_DATA/DATASET_REGISTER.md`.
5. Add its source/credit information to `07_SOURCE_CREDITS/SOURCE_MANIFEST.csv`.
6. Create/update its adapter mapping before adding records to the combined dataset.

---

## 6. Where to put images

Use:

- `06_MEDIA/artwork-images/`
- `06_MEDIA/archival-images/`
- `06_MEDIA/references/`

No local image binaries were supplied separately in the uploaded archives. The processed records preserve official/source image URLs where supplied.

The future website should use:

1. approved local image;
2. official/source image URL;
3. designed no-image state.

Never show a broken image.

---

## 7. Where to add the missing India dataset

Put the original `met_india_metadata.csv` here:

`03_DATA/raw/met_india/`

If the future dataset contains multiple folders, preserve those folders exactly and place the entire original structure under:

`03_DATA/raw/additional_datasets/<dataset-name>/`

Do not replace or rename existing raw data.

---

## 8. JSON files

Machine-readable configuration is in `03_DATA/manifests/`.

Important files include:

- `story_config.json` — chapter/build configuration
- `analysis_findings.json` — validated quantitative findings
- `adapter_registry.json` — dataset adapter registry
- `field_dictionary.json` — canonical field mappings
- `object_story_examples.json` — object-story examples
- `PACKAGE_MANIFEST.json` — package-level metadata

---

## 9. Source safety

Use only URLs explicitly present in the source data or verified source mappings.

Never guess an official object-page URL.

The source manifest is:

`07_SOURCE_CREDITS/SOURCE_MANIFEST.csv`

---

## 10. Building the final website

The final website should eventually be built in VS Code / Google AI Studio as a modular single-page application.

Before coding, use:

`starter-prompt.md`

and then follow:

`09_BUILD/AI_STUDIO_MASTER_PROMPT.md`

The coding system should read the dossier, narrative map, processed data, interaction specification, visual system and source manifest before writing components.

**Do not build the final website from the raw datasets directly.**

---

## 11. Validation status

- Raw datasets preserved: **Yes**
- Five supplied museum datasets analysed: **Yes**
- Combined processed CSV included: **Yes**
- JSON manifests included: **Yes**
- Markdown dossier included: **Yes**
- Source manifest included: **Yes**
- Object Story specification included: **Yes**
- Visual system included: **Yes**
- AI Studio build prompt included: **Yes**
- Final website included: **No — intentionally**
