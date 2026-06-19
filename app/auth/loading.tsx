import "@/styles/mobile.css";

export default function AuthLoading() {
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex flex-col items-center justify-center px-margin-mobile py-16 min-h-dvh">
          <div className="w-48 h-12 shimmer rounded mb-12" />
          <div className="w-full max-w-sm">
            <div className="flex border-b border-surface-container mb-8">
              <div className="flex-1 h-8 shimmer rounded" />
              <div className="flex-1 h-8 shimmer rounded ml-4" />
            </div>
            <div className="space-y-6">
              <div className="h-4 w-24 shimmer rounded mb-3" />
              <div className="h-12 w-full shimmer rounded" />
              <div className="h-4 w-20 shimmer rounded mb-3" />
              <div className="h-12 w-full shimmer rounded" />
              <div className="h-12 w-full shimmer rounded mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 min-h-dvh">
        <div className="w-1/2 bg-primary p-16">
          <div className="h-4 w-20 shimmer rounded mb-6" style={{ opacity: 0.5 }} />
          <div className="h-16 w-64 shimmer rounded" />
        </div>
        <div className="flex-1 flex items-center justify-center p-16">
          <div className="w-full max-w-sm">
            <div className="flex border-b border-surface-container mb-8">
              <div className="flex-1 h-8 shimmer rounded" />
              <div className="flex-1 h-8 shimmer rounded ml-4" />
            </div>
            <div className="space-y-6">
              <div className="h-4 w-24 shimmer rounded mb-3" />
              <div className="h-12 w-full shimmer rounded" />
              <div className="h-4 w-20 shimmer rounded mb-3" />
              <div className="h-12 w-full shimmer rounded" />
              <div className="h-12 w-full shimmer rounded mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
