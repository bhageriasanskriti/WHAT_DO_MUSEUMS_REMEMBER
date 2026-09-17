# Credit Policy

## Rules

1. Preserve museum/institution name.
2. Preserve supplied credit line.
3. Preserve source dataset.
4. Preserve source image URL.
5. Preserve specific object URL when supplied.
6. Never invent an image credit.
7. Never infer a license from image availability.
8. Treat `is_public_domain` in AIC as source artwork-status metadata, not as blanket image licensing.
9. If no license is supplied, leave `license_if_known` blank.
10. Object Story should provide a source link whenever `object_url` is present.

## Source manifest

`SOURCE_MANIFEST.csv` contains one row per canonical object record and includes:
- object_id
- dataset
- museum
- object_url
- image_url
- image_credit
- license_if_known
- data_source
- record_source_url
- credit_line
