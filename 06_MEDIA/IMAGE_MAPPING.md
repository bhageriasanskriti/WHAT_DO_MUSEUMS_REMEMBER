# Image Mapping

The canonical image mapping is machine-readable in:

`03_DATA/processed/combined_objects.csv`

Key fields:
- `id`
- `dataset`
- `image_url`
- `local_image`

Current status:
- no local website image assets were supplied;
- image URLs are retained from the source datasets;
- `local_image` is null for the current build table.

For the website, resolve media through `image_url` first and then `local_image` when local assets are added.

Never manufacture a museum image URL.
