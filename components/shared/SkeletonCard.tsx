export default function SkeletonCard() {
  return (
    <article className="flex flex-col gap-4 animate-pulse">
      <div className="relative w-full aspect-4-5 bg-surface-container-high rounded-lg overflow-hidden shimmer" />
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
  );
}
