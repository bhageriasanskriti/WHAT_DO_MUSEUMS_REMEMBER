# Scroll Behaviour

## Core principle

Scroll is the exhibition's narrative clock.

It should not simply move the page vertically while unrelated animations play.

## State machine

```text
ROOM_ENTER
  ↓
OBJECT_FIELD
  ↓
PATTERN_REORGANISE
  ↓
FOCUS_OBJECT
  ↓
OBJECT_STORY_OPTIONAL
  ↓
NEXT_ROOM
```

## Motion rules

- Use transforms and opacity for most motion.
- Prefer CSS/Web Animations/GSAP-style timeline orchestration over per-element layout thrashing.
- Avoid animating `top`, `left`, width or height for thousands of objects.
- Use IntersectionObserver or a scroll progress driver to activate room-level states.
- Use virtualised rendering for dense object fields.
- Do not bind expensive computations to every raw scroll event.

## Motion language

### Collection growth
Scale/density increase, not a sudden count-up.

### Category transition
Objects glide/recluster into place.

### Timeline
Objects move along a vertical spatial axis.

### People
Creator labels emerge as an index around objects.

### Geography
Objects migrate between restrained place labels.

### Teenie
Contact-sheet cells rearrange; caption fragments surface.

### Missingness
Objects fade/blank one field at a time.

### Ending
Everything slows and collapses to one object.

## Reduced motion

In reduced-motion mode:
- disable parallax;
- replace morphing with instant state changes;
- retain sequence and hierarchy;
- keep Object Story fully functional.
