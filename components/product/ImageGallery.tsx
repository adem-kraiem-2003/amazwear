import "@/styles/mobile.css";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  return (
    <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
      {images.map((img, i) => (
        <img
          key={i}
          alt={`${alt} ${i + 1}`}
          className="w-full h-full object-cover snap-center flex-shrink-0"
          src={img}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
