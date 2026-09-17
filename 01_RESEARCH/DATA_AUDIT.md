# Data Audit

## Uploaded archives

Four ZIP archives were supplied. They contained five distinct museum datasets.

### Successfully analysed

| Institution | Original file/folder | Format | Parsed rows | Columns | Key evidence | Qualitative value |
| --- | --- | --- | --- | --- | --- | --- |
| Art Institute of Chicago | artic_allArtworks_expanded.csv | CSV | 122435 | 28 | images: 112,530; API links: 122,435 | strong |
| Carnegie Museum of Art | cmoa.csv | CSV | 28269 | 29 | images: 19,241; object pages: 28,269; provenance: 25,415 | strong |
| Teenie Harris Archive / CMOA | teenie.csv | CSV | 59031 | 29 | images: 59,031; object pages: 59,031; long descriptive titles | very strong for archive story |
| National Gallery of Art | opendata-main/data/*.csv + docs/SQL | CSV + TXT + SQL + PDF | multiple tables; objects=138,698 | 30 object fields + relational tables | images for 101,846 objects; provenance 72,256; inscriptions 76,991; text 73,560 | very strong for Object Story |
| The Museum of Modern Art (MoMA) | Artworks.csv | CSV | 155916 | 30 | images: 89,817; object pages: 99,424; Indian-nationality creator subset: 229 | strong; not a Met India dataset |


## National Gallery of Art relational inventory

| File | Parsed rows | Columns | First fields |
| --- | --- | --- | --- |
| object_associations.csv | 25132 | 3 | parentobjectid, childobjectid, relationship |
| preferred_locations.csv | 320 | 8 | locationkey, locationtype, description, ispublicvenue, mapimageurl, mapshapetype, mapshapecoords, partof |
| objects_terms.csv | 394957 | 6 | termid, objectid, termtype, term, visualbrowsertheme, visualbrowserstyle |
| objects_dimensions.csv | 210770 | 5 | objectid, element, dimensiontype, dimension, unitname |
| published_images.csv | 106609 | 12 | uuid, iiifurl, iiifthumburl, viewtype, sequence, width, height, maxpixels |
| constituents_text_entries.csv | 6896 | 4 | constituentid, text, texttype, year |
| objects_constituents.csv | 803134 | 12 | objectid, constituentid, displayorder, roletype, role, prefix, suffix, displaydate |
| alternative_identifiers.csv | 210761 | 3 | uuid, idschemelabel, identifier |
| media_relationships.csv | 2983 | 3 | mediaid, relatedid, relatedentity |
| preferred_locations_tms_locations.csv | 1042 | 2 | preferredlocationkey, tmslocationid |
| constituents_altnames.csv | 33169 | 6 | altnameid, constituentid, lastname, displayname, forwarddisplayname, nametype |
| constituents.csv | 26234 | 14 | constituentid, ulanid, preferreddisplayname, forwarddisplayname, lastname, displaydate, artistofngaobject, beginyear |
| locations.csv | 1039 | 6 | locationid, site, room, publicaccess, description, unitposition |
| objects_text_entries.csv | 211762 | 4 | objectid, text, texttype, year |
| objects_historical_data.csv | 5348 | 7 | datatype, objectid, displayorder, forwardtext, invertedtext, remarks, effectivedate |
| objects.csv | 138698 | 30 | objectid, accessioned, accessionnum, locationid, title, displaydate, beginyear, endyear |
| media_items.csv | 2676 | 15 | mediaid, mediatype, title, description, duration, language, thumbnailurl, playurl |


The NGA archive also contains:
- README documentation
- Data Dictionary
- relationship PDF
- SQL table definitions
- refresh script

These were preserved as supplied.

## Important identity correction

The file `Artworks.csv` contains MoMA object URLs such as `https://www.moma.org/collection/works/...` and MoMA-specific departments. It is therefore treated as **The Museum of Modern Art (MoMA)** data.

No dedicated Metropolitan Museum India metadata file was present.

## Parsed row counts

Row counts are based on parsed CSV records, not physical newline counts. Some CSVs contain quoted multiline text, so raw line counts can be higher than logical row counts.

## Data relationships

NGA:
- `objects.objectid` → `objects_constituents.objectid`
- `objects_constituents.constituentid` → `constituents.constituentid`
- `objects.objectid` → `objects_terms.objectid`
- `objects.objectid` → `objects_text_entries.objectid`
- `objects.objectid` → `objects_historical_data.objectid`
- `objects.objectid` → `published_images.depictstmsobjectid`

Other supplied datasets are principally flat object tables.

## Missing supplied asset

`met_india_metadata.csv` was not supplied. The placeholder directory is retained at `03_DATA/raw/met_india/`.
