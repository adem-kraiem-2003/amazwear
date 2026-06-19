import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  name: string;
  price: number;
  currency: string;
  description?: string;
  details?: string[];
};

export default function ProductInfo({ name, price, currency, description, details }: Props) {
  return (
    <>
      <div className="px-margin-mobile py-6 flex flex-col gap-unit">
        <div className="flex justify-between items-start">
          <h1 className="font-headline-md text-headline-md text-primary">{name}</h1>
          <button className="text-secondary hover:text-primary transition-colors">
            <PhosphorIcon icon="favorite_border" />
          </button>
        </div>
        <p className="font-body-lg text-body-lg text-secondary">{currency} {price.toFixed(2)}</p>
      </div>
      <div className="w-full h-px bg-surface-container px-margin-mobile" />
      {description && (
        <section className="px-margin-mobile py-6 flex flex-col gap-4 bg-surface-container-low">
          <h2 className="font-label-sm text-label-sm uppercase text-primary">Details</h2>
          <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
            <p>{description}</p>
            {details && (
              <ul className="list-disc pl-4 space-y-1 text-secondary">
                {details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </>
  );
}
