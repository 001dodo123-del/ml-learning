# ML Learning Flow Map

A Next.js + Tailwind app that maps the Machine Learning field as a branching
flow diagram: a handful of category "trunks" (Math & Statistics, Programming
& Tools, Core ML, Deep Learning, Applied & Specializations) flow via curved
ribbons into individual topic nodes. Click a topic to open a panel with a
short description and curated resource links. Click a category label to
isolate its ribbons; use the filter box to search by topic name.

## Design intent

- **Structure**: branching topic tree, à la roadmap.sh.
- **Content model**: each topic node owns its own curated resource links,
  à la learn-anything.xyz.
- **Visual form**: sankey-style ribbons flowing from category trunks to leaf
  topics, per the reference layout supplied for this build.

`learn-anything.xyz` renders its topic pages client-side, so its live data
couldn't be scraped directly for this build. The topic list and resources in
`data/mlTopics.ts` were independently researched and curated to match each
topic accurately rather than copied — swap in different sources there any
time.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it links straight into `/machine-learning`.

## Where to edit things

- `data/mlTopics.ts` — the roots, topics, descriptions, and resource links.
  Add a topic by adding an entry with a `rootId` matching one of the `roots`.
- `components/MLFlowMap.tsx` — the SVG ribbon diagram and detail panel.
  Layout (row height, spacing, node position) is computed from the data, so
  adding/removing topics reflows automatically.
- `app/machine-learning/page.tsx` — page copy and heading.
