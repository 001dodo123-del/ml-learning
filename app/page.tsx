import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-display text-sm tracking-wide text-muted mb-3">
          Learning flow maps
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-4">
          Trace a field, topic by topic.
        </h1>
        <p className="text-muted text-base sm:text-lg mb-8">
          Each map branches from a few foundational trunks into the specific
          topics that make up a field — click any topic to see what to learn
          and where to learn it.
        </p>
        <Link
          href="/machine-learning"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas font-medium px-6 py-3 hover:bg-white transition-colors"
        >
          Open the Machine Learning map
        </Link>
      </div>
    </main>
  );
}
