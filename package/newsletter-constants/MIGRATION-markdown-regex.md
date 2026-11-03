# Migrating atherdon-newsletter-constants → markdown-regex@^2.1.1

## Why

`markdown-regex` `^1.0.1` is far behind the current TypeScript release line (`2.1.1+`).
This bump keeps the nested `atherdon-newsletter-constants` package on a supported regex set.

## Breaking / behavior notes (1.x → 2.x)

| Area | Change |
| --- | --- |
| Module format | Dual ESM/CJS + types; Node **>= 20** |
| `REGEXP_HR` | Whole line of 5+ `-` / `*` / `_` (not only `\n-----`) |
| Cleanup helpers | Still on the root export; prefer `markdown-regex/cleanup` for tree-shaking |
| New subpaths | `markdown-regex/frontmatter`, `/blocks`, `/email` (optional) |

Public `REGEXP_*` names used by newsletter parsers remain stable. Prefer `extract()` / factory helpers for new code so `.lastIndex` is not shared.

## Install

```bash
cd package/newsletter-constants
npm install markdown-regex@^2.1.1
```

After the markdown-regex stacked PRs publish a newer minor, bump the range again (changesets fixed group).
