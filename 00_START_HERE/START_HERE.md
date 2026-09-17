# START HERE — WHAT DO MUSEUMS REMEMBER?

This folder explains how to use the package before opening Google AI Studio.

## Read in this order

1. `../README.md`
2. `../MUSEUM_STORY_CODER_DOSSIER.md`
3. `../02_STORY/NARRATIVE_DATA_MAP.md`
4. `../03_DATA/DATASET_REGISTER.md`
5. `../03_DATA/DATA_DICTIONARY.md`
6. `../04_INTERACTIONS/OBJECT_STORY_SPEC.md`
7. `../08_VISUAL_SYSTEM/VISUAL_DIRECTION.md`
8. `../09_BUILD/AI_STUDIO_MASTER_PROMPT.md`
9. `../starter-prompt.md`

## The most important data file

`../03_DATA/processed/combined_objects.csv`

This is the canonical cross-museum object table generated from the supplied datasets. It contains **504,349 records** across five institutions.

## Important distinction

The combined file is a **research corpus**, not one museum collection. The website should use institution-specific and chapter-specific subsets when making claims.

## Raw data

Everything under `../03_DATA/raw/` is preserved as supplied. Do not edit those files.

## Missing source dataset

A dedicated `met_india_metadata.csv` was not present in the supplied uploads. The empty/placeholder `../03_DATA/raw/met_india/` folder is retained so the dataset can be added later without changing the architecture.

## Current focused archive

The screenshot-compatible folder `../05_ONE_PERSON_S_CHENNAI/` contains the Teenie Harris story specification. The folder name is retained because it is part of the requested package template; the supplied archive itself is the **Teenie Harris Archive at Carnegie Museum of Art**, not a Chennai dataset.
