import "@/styles/mobile.css";

export default function AccountLoading() {
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex flex-col gap-6 p-4 pt-24">
          <div className="h-10 w-48 shimmer rounded mb-4" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-surface-container">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 shimmer rounded" />
                  <div className="h-4 w-40 shimmer rounded" />
                </div>
                <div className="w-5 h-5 shimmer rounded" />
              </div>
            ))}
          </div>
          <div className="mt-8 h-12 shimmer rounded" />
        </div>
      </div>
      <div className="hidden lg:block">
        <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop h-20">
          <nav className="flex gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-20 shimmer rounded" />
            ))}
          </nav>
          <div className="h-6 w-20 shimmer rounded" />
          <div className="flex gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 shimmer rounded" />
            ))}
          </div>
        </header>
        <div className="flex">
          <aside className="w-64 border-r border-outline-variant p-8">
            <div className="w-16 h-16 shimmer rounded-full mb-4" />
            <div className="h-6 w-28 shimmer rounded mb-1" />
            <div className="h-4 w-24 shimmer rounded mb-12" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-full shimmer rounded" />
              ))}
            </div>
            <div className="mt-8 h-11 w-full shimmer rounded" />
          </aside>
          <main className="flex-1 p-12">
            <div className="h-12 w-96 shimmer rounded mb-4" />
            <div className="h-4 w-64 shimmer rounded mb-16" />
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 space-y-6">
                <div className="h-6 w-32 shimmer rounded" />
                <div className="h-40 w-full shimmer rounded" />
              </div>
              <div className="col-span-4 space-y-6">
                <div className="h-6 w-32 shimmer rounded" />
                <div className="h-48 w-full shimmer rounded" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
