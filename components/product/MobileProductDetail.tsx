"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import "@/styles/mobile.css";
import ImageGallery from "./ImageGallery";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButton";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";

type Props = {
  product: Product;
  relatedProducts: Product[];
};

export default function MobileProductDetail({ product, relatedProducts }: Props) {
  const [colorState, setColorState] = useState({ productId: product.id, color: product.colors[0]?.name ?? "" });
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");

  const selectedColor = colorState.productId === product.id
    ? colorState.color
    : product.colors[0]?.name ?? "";
  const setSelectedColor = (color: string) => setColorState({ productId: product.id, color });

  const colorImgs = selectedColor ? product.colorImages?.[selectedColor] : undefined;
  const galleryImages: string[] = colorImgs?.length ? colorImgs : product.images;
  const cartImage = galleryImages[0] ?? product.images[0];

  return (
    <main className="flex-grow pt-16">
      <section className="w-full relative aspect-[4/5] bg-surface-container-lowest">
        <ImageGallery images={galleryImages} alt={product.name} />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-surface-variant"}`} />
          ))}
        </div>
      </section>
      <ProductInfo
        name={product.name}
        price={product.price}
        currency={product.currency}
        description={product.description ?? ""}
        details={product.details ?? []}
      />
      <section className="px-margin-mobile py-6 flex flex-col gap-6">
        <ColorSelector colors={product.colors} selectedColor={selectedColor} onChange={setSelectedColor} />
        <SizeSelector sizes={product.sizes ?? []} selectedSize={selectedSize} onChange={setSelectedSize} />
      </section>
      <RelatedProducts relatedProducts={relatedProducts} />
      <div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-md border-t border-surface-container p-4 pb-6 z-50">
        <AddToCartButton
          productId={product.id}
          productName={product.name}
          productPrice={product.price}
          productImage={cartImage}
          selectedColor={selectedColor}
          selectedColorHex={product.colors.find((c) => c.name === selectedColor)?.hex}
          selectedSize={selectedSize}
        />
      </div>
    </main>
  );
}
