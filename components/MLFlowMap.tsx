"use client";

import { useMemo, useState } from "react";
import { roots, topics, type Topic } from "@/data/mlTopics";

const ROW_HEIGHT = 34;
const ROOT_GAP = 18;
const TOP_PAD = 40;
const BOTTOM_PAD = 40;
const TRUNK_X0 = 12;
const TRUNK_X1 = 38;
const NODE_X = 560;
const VIEW_WIDTH = 980;

type Row = {
  topic: Topic;
  y0: number;
  y1: number;
  color: string;
};

type RootBand = {
  id: string;
  title: string;
  color: string;
  y0: number;
  y1: number;
};

function ribbonPath(x0: number, y0a: number, y0b: number, x1: number, y1a: number, y1b: number) {
  const cx = x0 + (x1 - x0) / 2;
  return `M${x0},${y0a} C${cx},${y0a} ${cx},${y1a} ${x1},${y1a} L${x1},${y1b} C${cx},${y1b} ${cx},${y0b} ${x0},${y0b} Z`;
}

export default function MLFlowMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusRoot, setFocusRoot] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const { rows, bands, height } = useMemo(() => {
    const rows: Row[] = [];
    const bands: RootBand[] = [];
    let cursor = TOP_PAD;

    roots.forEach((root) => {
      const rootTopics = topics.filter((t) => t.rootId === root.id);
      const bandStart = cursor;
      rootTopics.forEach((topic) => {
        const y0 = cursor;
        const y1 = cursor + ROW_HEIGHT;
        rows.push({ topic, y0, y1, color: root.color });
        cursor = y1;
      });
      bands.push({ id: root.id, title: root.title, color: root.color, y0: bandStart, y1: cursor });
      cursor += ROOT_GAP;
    });

    return { rows, bands, height: cursor - ROOT_GAP + BOTTOM_PAD };
  }, []);

  const selected = topics.find((t) => t.id === selectedId) ?? null;
  const normalizedQuery = query.trim().toLowerCase();

  const isDimmed = (row: Row) => {
    if (focusRoot && row.topic.rootId !== focusRoot) return true;
    if (normalizedQuery && !row.topic.title.toLowerCase().includes(normalizedQuery)) return true;
    return false;
  };

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter topics…"
          className="w-full sm:w-64 rounded-lg bg-surface border border-line px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink/30"
        />
        <div className="flex flex-wrap gap-2">
          {roots.map((r) => (
            <button
              key={r.id}
              onClick={() => setFocusRoot((prev) => (prev === r.id ? null : r.id))}
              className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
              style={{
                borderColor: focusRoot === r.id ? r.color : "#242C3B",
                color: focusRoot === r.id ? r.color : "#8993A6",
                backgroundColor: focusRoot === r.id ? `${r.color}1A` : "transparent",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: r.color }} />
              {r.title}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto thin-scroll rounded-2xl border border-line bg-surface/40">
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
          width="100%"
          style={{ minWidth: 760, display: "block" }}
        >
          {/* root trunks */}
          {bands.map((b) => (
            <g key={b.id} onClick={() => setFocusRoot((prev) => (prev === b.id ? null : b.id))} className="cursor-pointer">
              <rect
                x={TRUNK_X0}
                y={b.y0}
                width={TRUNK_X1 - TRUNK_X0}
                height={b.y1 - b.y0}
                rx={4}
                fill={b.color}
                opacity={focusRoot && focusRoot !== b.id ? 0.25 : 0.9}
              />
              <text
                x={TRUNK_X0}
                y={b.y0 - 8}
                fontSize={12}
                fontWeight={600}
                fill={b.color}
                className="font-display"
              >
                {b.title}
              </text>
            </g>
          ))}

          {/* ribbons */}
          {rows.map((row) => {
            const dimmed = isDimmed(row);
            const isSelected = row.topic.id === selectedId;
            return (
              <path
                key={row.topic.id}
                d={ribbonPath(TRUNK_X1, row.y0, row.y1, NODE_X, row.y0, row.y1)}
                fill={row.color}
                opacity={dimmed ? 0.06 : isSelected ? 0.55 : 0.22}
                style={{ transition: "opacity 150ms ease" }}
              />
            );
          })}

          {/* topic nodes + labels */}
          {rows.map((row) => {
            const dimmed = isDimmed(row);
            const yMid = (row.y0 + row.y1) / 2;
            const isSelected = row.topic.id === selectedId;
            return (
              <g
                key={row.topic.id}
                onClick={() => setSelectedId(row.topic.id)}
                className="cursor-pointer"
                opacity={dimmed ? 0.3 : 1}
                style={{ transition: "opacity 150ms ease" }}
              >
                <rect
                  x={NODE_X - 2}
                  y={row.y0 + 4}
                  width={10}
                  height={ROW_HEIGHT - 8}
                  rx={2}
                  fill={row.color}
                  stroke={isSelected ? "#E8ECF1" : "none"}
                  strokeWidth={isSelected ? 1.5 : 0}
                />
                <text
                  x={NODE_X + 18}
                  y={yMid + 4}
                  fontSize={13}
                  fill={isSelected ? "#E8ECF1" : "#C4CAD6"}
                  fontWeight={isSelected ? 600 : 400}
                >
                  {row.topic.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted">
        Structure inspired by roadmap.sh · topic-linked resources in the spirit of learn-anything.xyz ·
        click a category label to isolate it, click a topic to see resources.
      </p>

      {/* Detail panel */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            onClick={() => setSelectedId(null)}
          />
          <aside
            className="fixed z-50 bg-surface border-line thin-scroll overflow-y-auto
                       inset-x-0 bottom-0 max-h-[70vh] rounded-t-2xl border-t p-6
                       sm:inset-auto sm:top-0 sm:right-0 sm:h-full sm:w-96 sm:max-h-none sm:rounded-none sm:border-l sm:border-t-0"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                  style={{
                    color: roots.find((r) => r.id === selected.rootId)?.color,
                    backgroundColor: `${roots.find((r) => r.id === selected.rootId)?.color}1A`,
                  }}
                >
                  {roots.find((r) => r.id === selected.rootId)?.title}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-muted hover:text-ink text-sm shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-muted mb-6">{selected.description}</p>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              {selected.resources.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5 text-sm text-ink hover:border-ink/40 transition-colors"
                  >
                    <span>{r.title}</span>
                    <span className="text-[10px] uppercase tracking-wide text-muted shrink-0">
                      {r.kind}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </div>
  );
}
