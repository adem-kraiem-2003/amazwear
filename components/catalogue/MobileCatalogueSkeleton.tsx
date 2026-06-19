export default function MobileCatalogueSkeleton() {
  return (
    <main className="px-margin-mobile pt-6 flex flex-col gap-8">
      <div className="w-full h-12 shimmer rounded-lg" />
      <div className="flex flex-col gap-10">
        {[1, 2, 3].map((i) => (
          <article key={i} className="flex flex-col gap-4 animate-pulse">
            <div className="relative w-full aspect-4-5 bg-surface-container-high rounded-lg shimmer" />
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-surface-container-high rounded w-3/4 shimmer" />
              <div className="h-4 bg-surface-container-high rounded w-1/4 shimmer" />
              <div className="flex gap-2 mt-1">
                <div className="w-4 h-4 rounded-full bg-surface-container-high shimmer" />
                <div className="w-4 h-4 rounded-full bg-surface-container-high shimmer" />
              </div>
              <div className="mt-2 h-3 bg-surface-container-high rounded w-20 shimmer" />
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 py-8">
        <div className="w-10 h-10 shimmer rounded-full" />
        <div className="w-12 h-4 shimmer rounded" />
        <div className="w-10 h-10 shimmer rounded-full" />
      </div>
    </main>
  );
}
