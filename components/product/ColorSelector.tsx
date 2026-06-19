type Color = { name: string; hex: string };

type Props = {
  colors: Color[];
  selectedColor: string;
  onChange: (name: string) => void;
};

export default function ColorSelector({ colors, selectedColor, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-label-sm text-label-sm uppercase text-secondary">
        Color: <span className="text-primary ml-1">{selectedColor}</span>
      </span>
      <div className="flex gap-3">
        {colors.map((c) => (
          <div key={c.name} className="relative">
            <input
              type="radio"
              name="color"
              id={`color-${c.name}`}
              value={c.name}
              checked={selectedColor === c.name}
              onChange={() => onChange(c.name)}
              className="peer sr-only"
            />
            <label
              htmlFor={`color-${c.name}`}
              className="color-swatch block w-8 h-8 rounded-full cursor-pointer border transition-all hover:scale-110 flex items-center justify-center p-0.5"
              style={{
                borderColor: selectedColor === c.name ? "#000000" : "transparent",
              }}
            >
              <span className="block w-full h-full rounded-full" style={{ backgroundColor: c.hex }} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
