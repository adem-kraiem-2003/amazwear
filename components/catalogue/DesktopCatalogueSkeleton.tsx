export default function DesktopCatalogueSkeleton() {
  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12 flex flex-col gap-12">
      <div className="h-12 w-96 shimmer rounded" />
      <div className="h-8 w-full shimmer rounded" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="w-full aspect-4-5 shimmer rounded-lg" />
            <div className="h-4 w-3/4 shimmer rounded" />
            <div className="h-4 w-1/4 shimmer rounded" />
          </div>
        ))}
      </section>
    </main>
  );
}
