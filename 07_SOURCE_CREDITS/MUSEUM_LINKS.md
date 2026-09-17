# Museum Links

## Source institutions represented in the package

### Art Institute of Chicago
The supplied AIC file contains an `api_link` for every parsed record. These are API record URLs, not counted as human-facing object pages in this dossier.

### Carnegie Museum of Art
The supplied CMOA file contains a `web_url` for every parsed record.

### Teenie Harris Archive
The supplied Teenie file contains a `web_url` for every parsed record.

### National Gallery of Art
The supplied NGA object table does not contain a human-facing collection object URL field. It contains 307 `customprinturl` values; these are not treated as object-page links.

### The Museum of Modern Art
The supplied MoMA file contains a `URL` field for 99,424 records.

## URL policy

Use the exact supplied URL.

Never create an object URL from a guessed pattern.

See `SOURCE_MANIFEST.csv` for record-level mappings.
