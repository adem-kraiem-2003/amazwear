import "@/styles/desktop.css";

type Props = {
  images: string[];
  alt: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function DesktopImageGallery({ images, alt, selectedIndex, onSelect }: Props) {
  return (
    <div className="col-span-12 md:col-span-7 flex gap-4 h-[819px]">
      <div className="hidden md:flex flex-col gap-4 overflow-y-auto no-scrollbar w-24 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-full aspect-4-5 relative border transition-colors group ${
              selectedIndex === i ? "border-outline" : "border-transparent hover:border-outline"
            }`}
          >
            <img alt={`${alt} thumbnail ${i + 1}`} className="w-full h-full object-cover" src={img} loading="lazy" />
            <div className="absolute inset-0 bg-surface/10 group-hover:bg-transparent transition-colors" />
          </button>
        ))}
      </div>
      <div className="flex-grow h-full relative bg-surface-container-low overflow-hidden">
        <img alt={alt} className="w-full h-full object-cover" src={images[selectedIndex]} />
      </div>
    </div>
  );
}
