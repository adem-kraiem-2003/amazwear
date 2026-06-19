import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "data", "products.json");

const EXISTING = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3y54VqJ1eSrR3HdlTxQ4x13xs-dLguMfsyChYue6SPp1xnFEprfnBZOHwKxweH2XUJjfmz21lLLG7QHkog-HGjUhuiDgD2v5WLAS1whmjYh2jWx7jskqvGwZB-orizVLnDxg4vjEcPT3KiEKZet7UYIxdj1GcjYV2uQbBj9qBXgHzmSIh1sZNKPvthqZJl9alywYRnfpWXxVueVZnkPzVMgFxCGgO8e8ZJa3XR8Ga-WuVtNvVHZ0eGb9sOWpAP1tDetKJUKnN6jc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB7zHrFhVHCmrHv_yar1j3P8ekA4xrchdWo4Nk3notLNKfkHJGpGD4dYyNQPtXR41qeGsiXWHObapvkftBfz7lV-53dgqg_ob39BavsDy-AXkSV2Ym2F_b1mzrJ0OLCpUyvBQg6I4CBsAm-0no9CGBLxEsqxoJTbtoOcDQUa6zG9K8QPIV7F0Rg-7IIYg8O5ofBqotYXLEMnkdIxAkhu6uGq6ndWkaLUX042ndUCqxPcNwFEHdkRl9QsVXTO4e4pcPTO2oFge2ce_c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDbPcGRtCUtaES7zpsffORF1ESVjS_hDhuJQBC6JrCeRb3CTrTyO2pe7-8MpGyJm39CWRRcLyvi8fZ9BNY4BsPNXpZU5uxFuv0hAr3xITu63jwYKCfNyW3rUpgFTu_ZPbQhTv7mL0PvNMHAIZzGySfpUPI04G_L6D9PTsijaB7lQzkaPpVP2b7uNGOrqUcYe4bvD-zvyAFlGXp6DUiAmxwI7i6GMQ8nfYYlPyK4zEbAj2aLMEm-SNUfTD15ZrzAOMZT9ZOncSiWc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVqIXi1jdtYfVcj4GQD7FD7qFxLDnXfOwmBGZKQjAcmacD6sQ56crbHtWCyvLOskuFGVN_hmKgbxEX5D46p_ZWQWu59fKRgvzlO5CE77FN7SErbPqJlgEFg0EbYBTGJJ71rC2ZCdXf6JEeVh580tBPkMachDXlehW3DHpLGDVBsjU0SfFumHWgItkQ9ILhssm3EmuEDCD_EZ7Lwc4vMXDE6Ni_nx197IlufbKbgipf8pwdcOY-S3DBMvQ9DZ7ByYfJob_EXvf8YSU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUn2jWiHf56qxVCxUiBzLTRolIFQnXpNyoqxUUiVhBx9R5f8OI7xInvoF31kAoeiKUMQDrr5yKU9pd_4CeEo8RFVEGCJaO3b1d9aoBJ-PFxSJYlHsA5v3DrtUhtVl9twcvwpQanigoOSviu-uG0-PCxqJuPdKuPeNlt0Q4XsgDmp3pjamk_ZDcTJThDjLJ81WaSp2pN9konLt0tTUP9f-htzu1brCkNGTO-E0FAhZn2cLwcwNIo1Fri1yxM6QnvO9My9W4RfqiOvc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiNILSoY9vWUw-tx99B2zMSPl8jNyIwvFo7FTvjfVJYDmtX6HlZfQ3wT3ypHuiYm3JiOs-63BC7hR9ES6Aks7Pb7bYB4VejYbYebX-XN_qP3r5PYAlWkHip5rg40234ob1bRzDoPzATrNMfDFDOIENdCGoAsz-dfX5caVjRrocWi6yNePK2mxZtIp2xTrjFWq-6qf0rOJofAp_yPLT1f1L1qiFZf30Uxu-VTjxqJKLk8xVEPEjxMihLcgFy4KavllV6FhsAtUfe9E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgNuVvbS4n7TL9v5ZR_WMuivKb4kXEP6frWIV7w7PQVVvblYmyTBcux_Fvxna2KNSLsGkVMHfno0Qqj8mTTY8-bNp2GhLfmBHCv9nYhpvlM2kOXBspXSqENc1z-57b-EXEcUxgRlAVz3xVamk91hjT1forrYg763Lsu6hap39eMQLPMWCVVXFUyKlDR3Lfn1y1bdFs1F0Itc9-tGmIQbMBMKEIoN3tjrEr8pmZMPzGyKHVWGEFqOVaj7-iP9OvLpzKpJ8vutF9J0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbzt_t31ar2DL_dKoRe9Ow280OKV1NdBYv6dhrFCB67OKGkS_jhDg5ZoxfmnKq7r91y3US-8qmULBGOZR7-NpS9xi6TKnpG-9A4hKdgCnoAxdYG2ta1Nk-lYcrFrqg-QzZRpeSDuEZy0lfvojWkb6vGRdWBKXQWFuNOWiw42_7ZVNI4nXsxZGAuFbI4NwhBupUY-LrkXXttjdBSrYVFwNCv1qcn0YRK_xq4wOQ3DjSLeLPLEqBaCDk1KuHW1YfsmzEQFZ432hyBqA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcUFOqp3M_FtnAYvxWV8gA0TIv1XNKjvftQgwJyZB_-k3sw4vh6cMdHpBedJXasxMCKSZSKi45gjRC9uhnIYAW-DM9Ik_pkUC4HK1QPe1mjnflIIKjZHmwy6G5cYTwr1QVHH4d34S9ig-0IZRXfAIjb8RWgh-40ilffZ95RdGk_twnTrQJADCZdz6zWwk7Al-Sy2xnip5cGK_GwDgU4g7RSCKewJ6qBQA9jN6fKtHAONSm1WqUGqpilZl6ztCiCdmmYu9CSu7m2n0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeQaQS5QzDIwrOelYyepMjtUd8BZy7a70mx_qYE7PP_bOk9N9SE1FVYtMlucGkIF_JC-CgJAYEf7C_buAsqzFeq6wHUBFd9hHGym2Zwytqfljg3FfydeMVI4dEcgAbGA4OahtyyLvyJ_zwQTAEZOojati14OSoXf9_ENkoz3TJqcpftXQSTwTGMR8JJgjT32816N7j9ERpgA9MwI2mwuAlszMVppA2bFkm4R5DUehhUXfvfNnjyU7x4Z07PiKU1sGJAJFsNGDJdx4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdcvS9U_BUlD3FXnRx792R_hxdme2Xx14HB4lTtqvkTTmhGrCmhab40nrUgfgYokvMa2xuG3L6nhRHslw1G0SzMEACFRgYekR9WDDDfa2qH26FvCCFDaZOtID8K8bgTPWF0VWRk73PVGeB00sbdMRJbMj07n6sp_Jzs4M7JW5oYeytY0HrfYJSneQKfGp8bw4M6RBFXckjGSfNJMaCWbO8HhUEm59lE7NZG4wwvMh4jwiwImKF3-xj48ozvPOv2Kyb4rvxf-fNl_c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAaXJUZHLICctFhKPCBVLrvwPCf4NX3XaK-IrQrZtewTrxlYr5rCiZa3kWgpOSqvY-BmowGCVhN5F72OKGe2pdYWAP4a3LXfahnA6XY4c5JSYmwHZU2Plfwx2rZT8frssoNmxdtobnxwVvaFZkdRv0wfMVmrVZf1O2BF1pqTm6ubZgfgaCeTf-px0qonPOU_l-KpbOsU7mJLk-BkU3c4whcA90g49WxnaXAY9egV0PuaBKVPKPhjldQi5lZPLzBq4Vfsn7_0XEbAeo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkM7Zsvu_Y4GGT-Hbo5cLSkTaahPw6KpxqkBAo6BytC0gVcc1nj-RV6bfancXmXMUHjS5nkTySnefHoRwdnzcLgYrxTJBV8UVQkaS_NyIXxtCEYG5OIigZjoiQc2S9-LB8jd5s84zqyTVhkN0mQOCxlvSORWaGpX8KLdQKF4VYdSAC7LS4Yg9HK1627vKslrnKQ7pF9qrY5vRYSwO_sGNuTAd86Kd0ew_ASvG_yqYtNCv4Lp_nViPDAws8AWSmO80nbyVz-WMCb1o",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBy0zO-Ymg8xTdO_o3wuCn0pZtuFg2GX9EE0NXW0cohvpicdHzsMAKyB8AmX8G2NS8xAO824eCeux6QHIFy0z_MIVMBMrByaUAdNEbnQ0U0L95lr9fN6Ifxw5so4I0Odap7-5fayDPGErjGmUFRjlCO-dFS8R6O5oz0FYRDqTXUVeX-exOkBCWeW_H0_FgJRGAuRdB4y9JglNEjHHDNNhnZZ1DSqF2edRH09ojtyPfBnEEQHKDcgje3wemNNYTVcKCOCKdRgq1uN24",
];

const IMAGES = [...EXISTING];

function pick(arr, offset = 0) {
  return arr[(offset + Math.floor(Math.random() * 1000)) % arr.length];
}

function pickN(arr, n, offset = 0) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(arr[(offset + i * 7 + 13) % arr.length]);
  }
  return result;
}

// Colors available per category
const CATEGORY_COLORS = {
  "ready-to-wear": [
    { name: "Onyx", hex: "#1a1c1c" },
    { name: "Bone", hex: "#e1dfdf" },
    { name: "Charcoal", hex: "#4c4546" },
    { name: "Ivory", hex: "#fffff0" },
    { name: "Slate", hex: "#708090" },
  ],
  outerwear: [
    { name: "Onyx", hex: "#000000" },
    { name: "Camel", hex: "#c19a6b" },
    { name: "Olive", hex: "#556b2f" },
    { name: "Navy", hex: "#000080" },
  ],
  footwear: [
    { name: "Onyx", hex: "#000000" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Tan", hex: "#d2b48c" },
    { name: "White", hex: "#ffffff" },
  ],
  accessories: [
    { name: "Gold", hex: "#C9A84C" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Onyx", hex: "#000000" },
    { name: "Rose Gold", hex: "#b76e79" },
    { name: "Ivory", hex: "#fffff0" },
  ],
  home: [
    { name: "Matte Black", hex: "#000000" },
    { name: "Bone", hex: "#e1dfdf" },
    { name: "Terracotta", hex: "#e2725b" },
    { name: "Sage", hex: "#b2ac88" },
  ],
};

const CATEGORIES = {
  "ready-to-wear": { sizes: ["XS", "S", "M", "L"], name: "Ready to Wear" },
  outerwear: { sizes: ["XS", "S", "M", "L"], name: "Outerwear" },
  footwear: { sizes: ["36", "37", "38", "39", "40", "41"], name: "Footwear" },
  accessories: { sizes: ["One Size"], name: "Accessories" },
  home: { sizes: ["Standard"], name: "Home" },
};

const PRODUCT_TEMPLATES = [
  // Ready to Wear
  { name: "Tailored Wool Blazer", desc: "A masterclass in modern tailoring. Crafted from premium responsibly sourced wool with precise architectural lines and padded shoulders.", details: ["70% Wool, 30% Recycled Polyester", "Notched lapels", "Double-breasted fastening", "Dry clean only"], category: "ready-to-wear", price: 450, originalPrice: null },
  { name: "Slim Fit Trousers", desc: "Refined slim-fit trousers with a sharp crease. The perfect foundation for any sophisticated wardrobe.", details: ["100% Virgin Wool", "Slim fit", "Side pockets", "Dry clean only"], category: "ready-to-wear", price: 280, originalPrice: 340 },
  { name: "Silk Button-Up Shirt", desc: "Luxurious silk shirt with a relaxed collar and mother-of-pearl buttons. Effortlessly elegant for day or evening.", details: ["100% Mulberry Silk", "Mother-of-pearl buttons", "Relaxed fit", "Dry clean only"], category: "ready-to-wear", price: 195, originalPrice: null },
  { name: "Cashmere Turtleneck", desc: "Ultra-soft cashmere turtleneck with a fine-gauge knit. A timeless layering essential.", details: ["100% Cashmere", "Fine gauge knit", "Ribbed cuffs and hem", "Hand wash cold"], category: "ready-to-wear", price: 380, originalPrice: null },
  { name: "Linen Wide-Leg Pants", desc: "Effortless wide-leg pants in premium linen. Breezy silhouette perfect for warm-weather dressing.", details: ["100% Pure Linen", "Wide-leg cut", "Elastic waistband", "Machine wash gentle"], category: "ready-to-wear", price: 220, originalPrice: null },
  { name: "Merino Crew Neck Sweater", desc: "Fine merino wool crew neck with a clean finish. Versatile and breathable for year-round wear.", details: ["100% Merino Wool", "Crew neck", "Ribbed trim", "Dry clean recommended"], category: "ready-to-wear", price: 210, originalPrice: null },
  { name: "Pleated Mid Skirt", desc: "A graceful mid-length skirt with knife pleats that move beautifully. Feminine yet structured.", details: ["70% Polyester, 30% Viscose", "Knife pleats", "Mid-length", "Hidden back zip"], category: "ready-to-wear", price: 260, originalPrice: null },
  { name: "Relaxed Linen Blazer", desc: "An unstructured linen blazer with a relaxed silhouette. The perfect summer layering piece.", details: ["100% Linen", "Unstructured", "Patch pockets", "Dry clean only"], category: "ready-to-wear", price: 350, originalPrice: null },
  { name: "Silk Blend Camisole", desc: "A delicate silk camisole with adjustable spaghetti straps and a satin finish.", details: ["100% Mulberry Silk", "Adjustable straps", "Satin finish", "Dry clean only"], category: "ready-to-wear", price: 150, originalPrice: null },
  { name: "Wool Wide Leg Trousers", desc: "Dramatic wide-leg trousers in a luxe wool blend. Architectural volume meets refined tailoring.", details: ["70% Wool, 30% Recycled Polyester", "Wide leg", "Side pockets", "Dry clean only"], category: "ready-to-wear", price: 320, originalPrice: null },
  { name: "Cotton Poplin Shirt", desc: "Crisp cotton poplin shirt with a classic collar and barrel cuffs. A wardrobe foundation.", details: ["100% Egyptian Cotton", "Classic collar", "Barrel cuffs", "Machine wash"], category: "ready-to-wear", price: 175, originalPrice: null },
  { name: "Leather Biker Jacket", desc: "A sleek leather biker jacket with asymmetrical zip closure. Edgy yet sophisticated.", details: ["100% Lambskin Leather", "Asymmetrical zip", "Quilted shoulders", "Professional leather clean"], category: "ready-to-wear", price: 890, originalPrice: null },

  // Outerwear
  { name: "Structured Wool Coat", desc: "Tailored from premium Italian wool blend, this structured coat features sharp shoulders, an oversized fit, and tonal button closures.", details: ["70% Wool, 30% Recycled Polyester", "Notched lapels", "Double-breasted fastening", "Dry clean only"], category: "outerwear", price: 550, originalPrice: 680 },
  { name: "Oversized Trench Coat", desc: "An oversized take on the classic trench coat. Crafted from water-resistant cotton gabardine with storm flaps.", details: ["100% Cotton Gabardine", "Water-resistant finish", "Oversized fit", "Made in Italy"], category: "outerwear", price: 1100, originalPrice: null },
  { name: "Classic Peacoat", desc: "A double-breasted peacoat in heavyweight wool. Nautical heritage meets modern minimalism.", details: ["80% Wool, 20% Polyamide", "Double-breasted", "Horn buttons", "Dry clean only"], category: "outerwear", price: 680, originalPrice: null },
  { name: "Quilted Down Jacket", desc: "Lightweight quilted down jacket with a matte finish. Technical warmth without bulk.", details: ["100% Nylon shell", "Goose down fill", "Quilted stitch", "Machine wash"], category: "outerwear", price: 420, originalPrice: null },
  { name: "Long Cashmere Coat", desc: "A floor-length cashmere coat with a relaxed cut. The ultimate luxury statement piece.", details: ["100% Cashmere", "Floor-length", "Open front", "Dry clean only"], category: "outerwear", price: 1800, originalPrice: 2200 },
  { name: "Rain Parka", desc: "A minimalist rain parka with sealed seams and an adjustable hood. Functional design meets clean lines.", details: ["100% Recycled Polyester", "Waterproof", "Adjustable hood", "Machine wash"], category: "outerwear", price: 320, originalPrice: null },
  { name: "Shearling Bomber", desc: "A luxurious shearling bomber jacket with a relaxed fit and rich texture.", details: ["Shearling leather", "Zipper closure", "Ribbed cuffs", "Professional leather clean"], category: "outerwear", price: 1200, originalPrice: null },
  { name: "Lightweight Mac Coat", desc: "A lightweight mac coat in water-repellent cotton. The perfect transitional piece.", details: ["100% Cotton, Water-repellent", "Single-breasted", "Raglan sleeves", "Dry clean"], category: "outerwear", price: 480, originalPrice: null },

  // Footwear
  { name: "Leather Ankle Boots", desc: "Minimalist ankle boots crafted from calfskin leather with a pointed toe and sculptural block heel.", details: ["Calfskin Leather", "Leather sole", "Block heel 60mm", "Side zip closure"], category: "footwear", price: 680, originalPrice: null },
  { name: "Pointed Toe Pumps", desc: "Classic pointed toe pumps with a sleek stiletto heel. Timeless elegance.", details: ["Calfskin Leather", "Leather sole", "Stiletto heel 85mm", "Made in Italy"], category: "footwear", price: 520, originalPrice: null },
  { name: "Minimal Leather Loafer", desc: "Sleek leather loafers with a clean silhouette and premium calfskin.", details: ["Calfskin Leather", "Leather sole", "Hand-stitched details", "Made in Portugal"], category: "footwear", price: 320, originalPrice: null },
  { name: "Knee-High Leather Boot", desc: "Statement knee-high boots in supple calfskin leather with a low block heel.", details: ["Calfskin Leather", "Knee-high", "Block heel 40mm", "Inside zip"], category: "footwear", price: 850, originalPrice: null },
  { name: "Leather Mules", desc: "Sculptural leather mules with a curved block heel. Artisanal flair with modern comfort.", details: ["Calfskin Leather", "Open toe", "Block heel 55mm", "Leather sole"], category: "footwear", price: 450, originalPrice: null },
  { name: "Platform Oxfords", desc: "Chunky platform oxfords with a lug sole. A contemporary take on a classic silhouette.", details: ["Leather upper", "Rubber lug sole", "Lace-up closure", "Platform 40mm"], category: "footwear", price: 580, originalPrice: null },
  { name: "Slide Sandals", desc: "Minimalist leather slide sandals with a sculpted footbed. Understated summer luxury.", details: ["Calfskin Leather", "Sculpted footbed", "Rubber outsole", "Made in Spain"], category: "footwear", price: 250, originalPrice: null },
  { name: "Chelsea Boots", desc: "Sleek Chelsea boots in polished leather with elastic side panels. An everyday essential.", details: ["Polished Calfskin", "Elastic side panels", "Pull tab", "Leather sole"], category: "footwear", price: 590, originalPrice: null },

  // Accessories
  { name: "Minimalist Leather Tote", desc: "A sleek, minimalist leather handbag crafted from premium full-grain leather with clean lines.", details: ["100% Full-Grain Leather", "Gold-toned hardware", "Removable shoulder strap", "Interior zip pocket"], category: "accessories", price: 280, originalPrice: null },
  { name: "Sculptural Hoops", desc: "Thick sculptural hoop earrings with a polished high-shine finish.", details: ["18K Gold Plated", "Hypoallergenic", "Lever-back closure", "Weight: 12g each"], category: "accessories", price: 195, originalPrice: null },
  { name: "Mini Structured Tote", desc: "A sleek, structured mini tote in matte black leather with minimal hardware.", details: ["Full-Grain Leather", "Gold-toned hardware", "Removable strap", "Interior pocket"], category: "accessories", price: 320, originalPrice: null },
  { name: "Chain Link Belt", desc: "A chunky chain link belt with a polished buckle. Defines the waist with architectural precision.", details: ["Brass with Silver Finish", "Buckle closure", "Adjustable length", "Width: 15mm"], category: "accessories", price: 180, originalPrice: null },
  { name: "Woven Leather Belt", desc: "A hand-woven leather belt in soft calfskin. Artisanal craftsmanship meets everyday wear.", details: ["Braided Calfskin Leather", "Nickel-free buckle", "One size fits most", "Made in Italy"], category: "accessories", price: 210, originalPrice: null },
  { name: "Silk Twilly Scarf", desc: "A versatile silk twilly scarf with hand-rolled edges. Wear as a necktie, bag handle wrap, or hair accessory.", details: ["100% Silk Twill", "Hand-rolled edges", "Dimensions: 90×90cm", "Dry clean only"], category: "accessories", price: 145, originalPrice: null },
  { name: "Leather Card Holder", desc: "A slim card holder in pebbled leather with three card slots. Minimalist design for essential carry.", details: ["Pebbled Calfskin", "Three card slots", "Center pocket", "Made in Italy"], category: "accessories", price: 120, originalPrice: null },
  { name: "Gold Signet Ring", desc: "A substantial gold signet ring with a polished face. A modern heirloom piece.", details: ["18K Gold Plated", "Polished finish", "Adjustable band", "Width: 8mm"], category: "accessories", price: 165, originalPrice: null },
  { name: "Oversized Cashmere Scarf", desc: "An oversized cashmere scarf with fringed ends. Wraps in infinite ways for cozy luxury.", details: ["100% Cashmere", "Fringed ends", "Dimensions: 200×70cm", "Dry clean only"], category: "accessories", price: 295, originalPrice: null },
  { name: "Leather Crossbody Bag", desc: "A compact crossbody bag in textured leather with an adjustable strap. Hands-free elegance.", details: ["Textured Calfskin", "Adjustable crossbody strap", "Magnetic closure", "Interior zip pocket"], category: "accessories", price: 380, originalPrice: null },

  // Home
  { name: "Luxe Ceramic Cup", desc: "A minimalist matte black ceramic cup with clean geometric lines.", details: ["High-fired ceramic", "Matte black glaze", "Dishwasher safe", "350ml capacity"], category: "home", price: 45, originalPrice: null },
  { name: "Scented Candle Set", desc: "A set of three hand-poured soy wax candles in ceramic vessels. Notes of fig, cedar, and amber.", details: ["Soy wax blend", "Cotton wick", "Burn time: 45h each", "Hand-poured"], category: "home", price: 85, originalPrice: null },
  { name: "Stoneware Dinner Plate", desc: "Artisanal stoneware dinner plates with a reactive glaze finish. Each piece is unique.", details: ["Reactive glaze stoneware", "Dishwasher and microwave safe", "Set of 4", "Diameter: 27cm"], category: "home", price: 120, originalPrice: null },
  { name: "Linen Throw Blanket", desc: "A pure linen throw blanket with fringed ends. Lightweight yet warm for year-round use.", details: ["100% Pure Linen", "Fringed ends", "Dimensions: 130×180cm", "Machine wash gentle"], category: "home", price: 160, originalPrice: null },
  { name: "Marble Coaster Set", desc: "A set of four marble coasters with cork backing. Natural stone, each with unique veining.", details: ["Natural Carrara Marble", "Cork backing", "Set of 4", "Diameter: 10cm"], category: "home", price: 55, originalPrice: null },
  { name: "Minimalist Vase", desc: "A sculptural ceramic vase with an organic silhouette. A statement piece for any surface.", details: ["Matte ceramic", "Organic shape", "Hand-finished", "Height: 25cm"], category: "home", price: 95, originalPrice: null },
  { name: "Wool Throw Pillow", desc: "A textured wool pillow with a hidden zip closure. Adds warmth and dimension.", details: ["Wool blend cover", "Down insert included", "Hidden zip", "Dimensions: 50×50cm"], category: "home", price: 75, originalPrice: null },
  { name: "Glass Decanter", desc: "A hand-blown glass decanter with a stopper. Functional art for your bar cart.", details: ["Hand-blown glass", "Crystal stopper", "Capacity: 750ml", "Hand wash only"], category: "home", price: 110, originalPrice: null },
  { name: "Bamboo Serving Board", desc: "A large bamboo serving board with a juice groove. Perfect for charcuterie and entertaining.", details: ["Organic Bamboo", "Juice groove", "Hand-wash only", "Dimensions: 40×25cm"], category: "home", price: 65, originalPrice: null },
  { name: "Cotton Percale Sheets", desc: "Premium cotton percale sheet set with a crisp, cool hand feel. The benchmark of quality bedding.", details: ["100% Long-Staple Cotton", "Percale weave, 300 thread count", "Set includes: flat, fitted, 2 pillowcases", "Machine wash"], category: "home", price: 210, originalPrice: null },
];

const CURRENCIES = ["€", "$", "€", "$", "£"];
const RANDOM_CURRENCIES = [true, false, false, false, false, false];

function randomPrice(base) {
  const variation = base * (0.9 + Math.random() * 0.2);
  return Math.round(variation / 5) * 5;
}

function generateProduct(index) {
  const tpl = PRODUCT_TEMPLATES[index % PRODUCT_TEMPLATES.length];
  const category = tpl.category;
  const cat = CATEGORIES[category];
  const colors = CATEGORY_COLORS[category];
  const numColors = Math.min(1 + Math.floor(Math.random() * colors.length), colors.length);
  const selectedColors = colors.slice(0, Math.max(1, Math.min(numColors, colors.length))).sort(() => Math.random() - 0.5);

  const price = tpl.price;
  const originalPrice = tpl.originalPrice;

  // Build images: 3 images per product
  const baseIdx = index * 7;
  const images = [
    IMAGES[(baseIdx) % IMAGES.length],
    IMAGES[(baseIdx + 3) % IMAGES.length],
    IMAGES[(baseIdx + 7) % IMAGES.length],
  ];

  // Build colorImages: each color gets 2 images from a shifted index
  const colorImages = {};
  selectedColors.forEach((color, ci) => {
    const shift = index * 5 + ci * 11;
    colorImages[color.name] = [
      IMAGES[(shift) % IMAGES.length],
      IMAGES[(shift + 2) % IMAGES.length],
    ];
  });

  const currency = ["$", "€", "€", "$", "£", "$"][index % 6];

  // Generate product id
  const slug = tpl.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const id = `${slug}-${index + 1}`;

  return {
    id,
    name: tpl.name,
    price,
    originalPrice,
    currency,
    description: tpl.desc,
    details: tpl.details,
    category,
    isNew: index < 6,
    colors: selectedColors,
    sizes: [...cat.sizes],
    images,
    colorImages,
    relatedIds: [],
  };
}

function assignRelatedIds(products) {
  for (const p of products) {
    const sameCategory = products.filter(
      (x) => x.category === p.category && x.id !== p.id
    );
    const shuffled = [...sameCategory].sort(() => Math.random() - 0.5);
    p.relatedIds = shuffled.slice(0, 4).map((x) => x.id);
  }
}

// Generate 72 products (multiple of 6 for mobile pagination, multiple of 12 for desktop)
const TOTAL = 72;
const products = [];
for (let i = 0; i < TOTAL; i++) {
  products.push(generateProduct(i));
}

assignRelatedIds(products);

writeFileSync(outPath, JSON.stringify(products, null, 2), "utf-8");
console.log(`Generated ${products.length} products → data/products.json`);
