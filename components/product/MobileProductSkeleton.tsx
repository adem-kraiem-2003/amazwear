export default function MobileProductSkeleton() {
  return (
    <main className="flex-grow pt-16">
      <div className="w-full aspect-[4/5] shimmer" />
      <div className="px-margin-mobile py-6 space-y-4">
        <div className="h-8 w-3/4 shimmer rounded" />
        <div className="h-6 w-1/4 shimmer rounded" />
      </div>
      <div className="px-margin-mobile py-6 space-y-6">
        <div className="space-y-3">
          <div className="h-4 w-16 shimmer rounded" />
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 shimmer rounded-full" />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 w-12 shimmer rounded" />
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 shimmer rounded" />
            ))}
          </div>
        </div>
      </div>
      <div className="px-margin-mobile py-6 space-y-3">
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-5/6 shimmer rounded" />
        <div className="h-4 w-4/6 shimmer rounded" />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-md border-t border-surface-container p-4 pb-6 z-50">
        <div className="w-full h-12 shimmer rounded-DEFAULT" />
      </div>
    </main>
  );
}
