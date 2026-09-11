import MLFlowMap from "@/components/MLFlowMap";

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-sm tracking-wide text-muted mb-2">
          Learning flow map
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-3">
          Machine Learning
        </h1>
        <p className="text-muted max-w-2xl mb-10">
          Five foundations branch into the topics that make up the field. Each
          topic carries a short description and a couple of trusted places to
          actually learn it.
        </p>
        <MLFlowMap />
      </div>
    </main>
  );
}
