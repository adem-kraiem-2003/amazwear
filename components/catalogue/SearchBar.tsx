import PhosphorIcon from "@/components/shared/PhosphorIcon";

export default function SearchBar() {
  return (
    <div className="w-full bg-surface-container-low rounded-lg h-12 flex items-center px-4 border border-surface-container hover:border-outline-variant transition-colors group">
      <PhosphorIcon icon="search" className="text-secondary mr-2" />
      <input
        className="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-primary placeholder-secondary outline-none"
        placeholder="Search collection..."
        type="text"
      />
    </div>
  );
}
