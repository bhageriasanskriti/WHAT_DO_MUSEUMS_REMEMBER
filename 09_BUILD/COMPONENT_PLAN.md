# Component Plan

## App shell

- `ExhibitionApp`
- `ProgressRail`
- `Chapter`
- `ObjectStory`

## Core visual components

- `HeroObject`
- `ObjectField`
- `ObjectCluster`
- `TimelineField`
- `CreatorField`
- `PlaceField`
- `ArchiveContactSheet`
- `MissingnessField`
- `EndingObject`

## Data components

- `useMuseumData`
- `resolveMedia`
- `resolveSource`
- `resolveRelatedObjects`
- `getChapterData`
- `formatMuseumLabel`

## Object Story subcomponents

- `ObjectHeader`
- `ObjectImage`
- `MetadataList`
- `ThenSection`
- `NowSection`
- `LookCloserSection`
- `RelatedObjects`
- `SourceLink`

## UX components

- `CloseButton`
- `FocusRing`
- `ReducedMotionToggle` if needed
- `NoImageState`
- `LoadingState`

## Rules

The visualisation components should not contain museum-specific field names. They receive canonical objects and chapter configuration.
