"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import DesktopImageGallery from "./DesktopImageGallery";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButton";
import DesktopRelatedProducts from "./DesktopRelatedProducts";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  product: Product;
  relatedProducts: Product[];
};

export default function DesktopProductDetail({ product, relatedProducts }: Props) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");
  const [imageIndexState, setImageIndexState] = useState(0);

  const [lastColorForIndex, setLastColorForIndex] = useState(selectedColor);
  const imageIndex = lastColorForIndex === selectedColor ? imageIndexState : 0;
  const setImageIndex = (idx: number) => {
    setLastColorForIndex(selectedColor);
    setImageIndexState(idx);
  };

  const colorImgs = selectedColor ? product.colorImages?.[selectedColor] : undefined;
  const galleryImages: string[] = colorImgs?.length ? colorImgs : product.images;
  const cartImage = galleryImages[0] ?? product.images[0];

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12">
      <div className="grid grid-cols-12 gap-gutter">
        <DesktopImageGallery images={galleryImages} alt={product.name} selectedIndex={imageIndex} onSelect={setImageIndex} />
        <div className="col-span-12 md:col-span-5 md:pl-12 lg:pl-16 relative">
          <div className="sticky top-32 flex flex-col pt-8 md:pt-0">
            <div className="mb-8">
              <h1 className="font-headline-md text-headline-md text-primary mb-2">{product.name}</h1>
              <p className="font-body-lg text-body-lg text-secondary">{product.currency}{product.price.toFixed(2)}</p>
            </div>
            <div className="mb-8">
              <ColorSelector colors={product.colors} selectedColor={selectedColor} onChange={setSelectedColor} />
            </div>
            <div className="mb-10">
              <SizeSelector sizes={product.sizes ?? []} selectedSize={selectedSize} onChange={setSelectedSize} />
            </div>
            <AddToCartButton
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productImage={cartImage}
              selectedColor={selectedColor}
              selectedColorHex={product.colors.find((c) => c.name === selectedColor)?.hex}
              selectedSize={selectedSize}
            />
            <div className="border-t border-outline-variant py-4 mt-8">
              <button className="w-full flex justify-between items-center py-2 text-left group">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Description</span>
                <PhosphorIcon icon="add" className="text-secondary group-hover:text-primary transition-colors" />
              </button>
              <div className="pt-2 pb-4 text-secondary font-body-md text-body-md">
                {product.description}
              </div>
            </div>
            <div className="border-t border-b border-outline-variant py-4">
              <button className="w-full flex justify-between items-center py-2 text-left group">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Shipping &amp; Returns</span>
                <PhosphorIcon icon="add" className="text-secondary group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DesktopRelatedProducts relatedProducts={relatedProducts} />
    </main>
  );
}
