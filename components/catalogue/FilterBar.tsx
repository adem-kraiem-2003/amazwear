import PhosphorIcon from "@/components/shared/PhosphorIcon";

export default function FilterBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-outline-variant">
      <div className="flex gap-8">
        <button className="flex items-center gap-2 font-body-md text-secondary hover:text-primary transition-colors">
          Category <PhosphorIcon icon="keyboard_arrow_down" size={20} />
        </button>
        <button className="flex items-center gap-2 font-body-md text-secondary hover:text-primary transition-colors">
          Size <PhosphorIcon icon="keyboard_arrow_down" size={20} />
        </button>
        <button className="flex items-center gap-2 font-body-md text-secondary hover:text-primary transition-colors">
          Color <PhosphorIcon icon="keyboard_arrow_down" size={20} />
        </button>
        <button className="flex items-center gap-2 font-body-md text-secondary hover:text-primary transition-colors">
          Price <PhosphorIcon icon="keyboard_arrow_down" size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Sort by:</span>
        <button className="flex items-center gap-2 font-body-md text-primary font-medium">
          Featured <PhosphorIcon icon="keyboard_arrow_down" size={20} />
        </button>
      </div>
    </div>
  );
}
