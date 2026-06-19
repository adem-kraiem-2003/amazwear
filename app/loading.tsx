import "@/styles/mobile.css";

export default function Loading() {
  return (
    <>
      <div className="block lg:hidden">
        <header className="bg-background/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 max-w-7xl mx-auto">
          <div className="w-6 h-6 shimmer rounded" />
          <div className="w-16 h-6 shimmer rounded" />
          <div className="w-6 h-6 shimmer rounded" />
        </header>
        <main className="px-margin-mobile pt-24 pb-24 flex flex-col gap-8">
          <div className="w-full h-12 shimmer rounded-lg" />
          <div className="flex flex-col gap-10">
            {[1, 2, 3].map((i) => (
              <article key={i} className="flex flex-col gap-4 animate-pulse">
                <div className="relative w-full aspect-4-5 bg-surface-container-high rounded-lg shimmer" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-surface-container-high rounded w-3/4 shimmer" />
                  <div className="h-4 bg-surface-container-high rounded w-1/4 shimmer" />
                </div>
              </article>
            ))}
          </div>
        </main>
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-background border-t border-surface-container z-50 px-margin-mobile">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-6 shimmer rounded-full" />
          ))}
        </nav>
      </div>
      <div className="hidden lg:block">
        <header className="w-full bg-surface z-50 sticky top-0">
          <div className="flex justify-between items-center w-full px-margin-desktop py-8 max-w-[1440px] mx-auto">
            <div className="w-64 h-6 shimmer rounded" />
            <div className="w-20 h-8 shimmer rounded" />
            <div className="w-64 h-6 shimmer rounded" />
          </div>
        </header>
        <main className="max-w-[1280px] mx-auto px-margin-desktop py-12 flex flex-col gap-12">
          <div className="h-12 w-96 shimmer rounded" />
          <div className="h-8 w-full shimmer rounded" />
          <div className="grid grid-cols-4 gap-x-gutter gap-y-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-full aspect-4-5 shimmer rounded-lg" />
                <div className="h-4 w-3/4 shimmer rounded" />
                <div className="h-4 w-1/4 shimmer rounded" />
              </div>
            ))}
          </div>
        </main>
        <footer className="w-full bg-surface border-t border-outline-variant mt-auto">
          <div className="flex justify-between items-center w-full px-margin-desktop py-12 max-w-[1440px] mx-auto">
            <div className="h-8 w-20 shimmer rounded" />
            <div className="h-4 w-64 shimmer rounded" />
            <div className="h-4 w-48 shimmer rounded" />
          </div>
        </footer>
      </div>
    </>
  );
}
