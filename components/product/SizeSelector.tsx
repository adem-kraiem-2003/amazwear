type Props = {
  sizes: string[];
  selectedSize: string;
  onChange: (size: string) => void;
};

export default function SizeSelector({ sizes, selectedSize, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="font-label-sm text-label-sm uppercase text-secondary">Size</span>
        <a href="#" className="font-label-sm text-label-sm text-primary underline decoration-1 underline-offset-4">
          Size Guide
        </a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {sizes.map((s) => (
          <div key={s}>
            <input
              type="radio"
              name="size"
              id={`size-${s}`}
              value={s}
              checked={selectedSize === s}
              onChange={() => onChange(s)}
              className="peer sr-only"
            />
            <label
              htmlFor={`size-${s}`}
              className={`size-swatch block w-full py-3 text-center border font-body-md text-body-md cursor-pointer transition-colors ${
                selectedSize === s
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant text-primary hover:border-primary"
              }`}
            >
              {s}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
