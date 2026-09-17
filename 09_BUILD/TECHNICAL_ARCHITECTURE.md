# Technical Architecture

## Target

A single responsive webpage that behaves like an interactive digital exhibition.

Suggested stack for implementation:
- React + TypeScript
- Vite or equivalent
- CSS modules or a tokenised CSS layer
- SVG/Canvas for dense object fields
- GSAP or Web Animations for scroll orchestration if required

The exact framework may change; the separation of concerns should not.

## Layers

```text
DATA
 ├─ adapters/
 ├─ transforms/
 └─ processed/

STORY
 ├─ storyConfig
 ├─ chapter states
 └─ narrativeDataMap

VISUAL
 ├─ object field
 ├─ timeline
 ├─ creator field
 ├─ geography
 └─ archive contact sheet

OBJECT STORY
 ├─ metadata renderer
 ├─ source resolver
 ├─ related-object resolver
 └─ media resolver

SYSTEM
 ├─ design tokens
 ├─ motion tokens
 └─ accessibility state
```

## Data adapter principle

Each museum gets one adapter that maps its source schema to the canonical object model.

Adding a dataset should require:
1. adapter;
2. dataset register entry;
3. source mapping;
4. processed output;
5. chapter configuration if needed.

It should not require rewriting Object Story.

## Rendering strategy

Do not render all 504,349 objects as full DOM nodes.

Use:
- sampling for introductory object fields;
- virtualisation;
- canvas/SVG for dense scenes;
- thumbnail URLs;
- progressive loading;
- selected-object high resolution.

## Related-object resolver

Default relation hierarchy:

1. same source dataset + creator;
2. same source dataset + classification/object type;
3. same source dataset + material;
4. same source dataset + place;
5. same source dataset + derived period.

Cross-dataset relations require explicit semantic normalization.

## State

Maintain:
- current chapter;
- chapter progress;
- selected object;
- previous focus element;
- scroll restoration position;
- reduced-motion mode;
- mobile density mode.

## Source resolver

`object_url` is authoritative.

Never construct museum URLs from guessed patterns.

## Media resolver

Priority:
`local_image → image_url → no-image state`

## Security

Treat all museum text and URLs as external content:
- escape rendered text;
- do not execute HTML from data;
- validate URL protocols;
- prevent unsafe `javascript:` URLs.
