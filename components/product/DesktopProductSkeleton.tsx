export default function DesktopProductSkeleton() {
  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12">
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-7 flex gap-4 h-[819px]">
          <div className="flex flex-col gap-4 w-24">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full aspect-4-5 shimmer rounded" />
            ))}
          </div>
          <div className="flex-grow shimmer rounded" />
        </div>
        <div className="col-span-5 pl-12 space-y-8">
          <div className="space-y-4">
            <div className="h-8 w-3/4 shimmer rounded" />
            <div className="h-6 w-1/4 shimmer rounded" />
          </div>
          <div className="space-y-4">
            <div className="h-4 w-16 shimmer rounded" />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 shimmer rounded-full" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-12 shimmer rounded" />
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 shimmer rounded" />
              ))}
            </div>
          </div>
          <div className="h-14 w-full shimmer rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full shimmer rounded" />
            <div className="h-4 w-5/6 shimmer rounded" />
            <div className="h-4 w-4/6 shimmer rounded" />
          </div>
        </div>
      </div>
    </main>
  );
}
