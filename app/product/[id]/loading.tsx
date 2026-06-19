export default function ProductLoading() {
  return (
    <>
      <div className="block lg:hidden">
        <header className="bg-background/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16">
          <div className="w-6 h-6 shimmer rounded" />
          <div className="w-16 h-6 shimmer rounded" />
          <div className="w-6 h-6 shimmer rounded" />
        </header>
        <main className="pt-16">
          <div className="w-full aspect-[4/5] shimmer" />
          <div className="px-margin-mobile py-6 space-y-4">
            <div className="h-8 w-3/4 shimmer rounded" />
            <div className="h-6 w-1/4 shimmer rounded" />
          </div>
          <div className="px-margin-mobile space-y-3">
            <div className="h-4 w-1/3 shimmer rounded" />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 shimmer rounded-full" />
              ))}
            </div>
          </div>
          <div className="px-margin-mobile py-6 space-y-3">
            <div className="h-4 w-1/4 shimmer rounded" />
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 shimmer rounded" />
              ))}
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:block">
        <header className="w-full bg-surface sticky top-0 z-50">
          <div className="flex justify-between items-center w-full px-margin-desktop py-8 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-8">
              <div className="w-16 h-4 shimmer rounded" />
              <div className="w-24 h-4 shimmer rounded" />
              <div className="w-16 h-4 shimmer rounded" />
            </div>
            <div className="w-20 h-8 shimmer rounded" />
            <div className="w-8 h-8 shimmer rounded" />
          </div>
        </header>
        <main className="max-w-[1280px] mx-auto px-margin-desktop py-12">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-7 flex gap-4 h-[819px]">
              <div className="flex flex-col gap-4 w-24">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-full aspect-4-5 shimmer rounded" />
                ))}
              </div>
              <div className="flex-grow shimmer rounded" />
            </div>
            <div className="col-span-5 pl-12 space-y-6">
              <div className="h-8 w-3/4 shimmer rounded" />
              <div className="h-6 w-1/4 shimmer rounded" />
              <div className="h-4 w-1/3 shimmer rounded" />
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 shimmer rounded-full" />
                ))}
              </div>
              <div className="h-4 w-1/4 shimmer rounded" />
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 shimmer rounded" />
                ))}
              </div>
              <div className="h-12 w-full shimmer rounded" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
