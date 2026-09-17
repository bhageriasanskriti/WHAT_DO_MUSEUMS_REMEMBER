# Object Story Specification

## Purpose

Object Story is the core qualitative interaction. It must feel like entering a small digital museum label/archive entry, not opening a modal dashboard.

## Opening behaviour

1. User selects an object by click, tap, Enter or Space.
2. Current scroll progress is captured.
3. Surrounding objects recede using opacity/scale/blur only if performance permits.
4. Selected image enlarges.
5. Story panel enters from a consistent direction.
6. Background scroll is locked while the story is open.
7. Focus moves to the close control.
8. On close, focus returns to the triggering object.
9. Scroll position is restored exactly.

## Content model

### Always attempt

- Title
- Date
- Creator/attribution
- Medium
- Classification

### Conditional

- Place/culture
- Materials
- Dimensions
- Description
- Provenance
- Inscription
- Themes/terms
- Credit line
- Museum

### Then

Only render when provenance, historical text or source-supported purpose/context is available.

### Now

Only render when current museum context/significance is explicitly documented by the supplied source. Do not manufacture a “now” interpretation from the fact of museum ownership.

### Look closer

Use inscriptions, dimensions, materials, terms and source descriptions when available.

### Part of a bigger story

Generate related objects only from exact metadata relationships:
- same dataset + same creator;
- same dataset + same classification/object type;
- same dataset + same material;
- same dataset + same place;
- same period where derived date grouping is appropriate.

Avoid cross-museum “same material” or “same period” relationships unless the semantic normalization has been explicitly implemented.

### Source

Show `VIEW THE ORIGINAL MUSEUM RECORD ↗` only when `object_url` exists.

## Image behaviour

- Use `image_url` first.
- If no image exists, use a designed no-image state.
- Never render broken image elements.
- Use lazy loading.
- Upgrade resolution only after selection.
- Preserve alt text from source where available; otherwise construct neutral descriptive alt text from title/metadata without inventing visual details.

## Panel structure

```text
[close]

OBJECT TITLE
Date · Creator/attribution
Medium · Classification

[large image]

WHAT IS RECORDED?
source-supported description

WHERE IS IT FROM?
only when supported

WHO MADE IT?
creator/attribution

WHAT IS IT MADE OF?
medium/materials

THEN
documented context only

NOW
documented current context only

LOOK CLOSER
inscription / dimensions / terms

PART OF A BIGGER STORY
related object chips

CURRENTLY HELD BY
museum

VIEW THE ORIGINAL MUSEUM RECORD ↗
```

## Accessibility

- dialog semantics if implemented as modal;
- focus trap;
- Escape closes;
- close button has accessible name;
- all information available without hover;
- image has alt text;
- motion respects `prefers-reduced-motion`;
- no colour-only relationship encoding.
