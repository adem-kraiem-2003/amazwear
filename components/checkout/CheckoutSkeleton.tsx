export default function CheckoutSkeleton() {
  return (
    <div className="w-full space-y-8 p-4">
      <div className="h-4 w-32 shimmer rounded" />
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 shimmer rounded" />
        ))}
      </div>
      <div className="w-full h-px bg-surface-container" />
      <div className="bg-surface-container-low rounded-lg p-6 space-y-4">
        <div className="h-4 w-28 shimmer rounded" />
        <div className="flex gap-4">
          <div className="w-20 h-24 shimmer rounded" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 shimmer rounded" />
            <div className="h-3 w-24 shimmer rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
