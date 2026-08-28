export type Product = {
  id: string
  slug: string
  seller: string
  name: string
  rating: string
  reviews: string
  price: string
  was: string
  badge: string
  img: string
}

function img(name: string) {
  return `/images/storefront/${name}.jpg`
}

export const NAV_CATS = [
  "Skincare",
  "Haircare",
  "Makeup",
  "Fragrance",
  "Personal care",
  "Mother & baby",
  "Health & wellness",
  "Home",
  "Electronics",
]

export const SIDE_CATS = [
  "Skincare",
  "Haircare",
  "Makeup & cosmetics",
  "Fragrance",
  "Personal care",
  "Health & wellness",
  "Mother & baby",
  "Home & living",
  "Groceries",
  "Electronics",
  "Fashion",
  "Sports & outdoor",
]

export const GATEWAYS = [
  "PayHere",
  "OnePay",
  "iPay",
  "PayPal",
  "HNB",
  "Commercial",
  "Seylan",
  "Sampath",
  "Koko",
]

export const TRUST = [
  {
    icon: "⚡",
    title: "Same-day dispatch",
    sub: "Order before 2pm, Colombo & suburbs",
  },
  { icon: "↩", title: "7-day returns", sub: "Free pickup by Fardar Express" },
  {
    icon: "✓",
    title: "Verified sellers only",
    sub: "KYC checked, agreement signed",
  },
  { icon: "✈", title: "Ships worldwide", sub: "Sri Lanka Post groups A–H" },
]

export const TILES = [
  { name: "Skincare", n: "3,240", img: "cat-1" },
  { name: "Haircare", n: "1,880", img: "cat-2" },
  { name: "Makeup", n: "2,410", img: "cat-3" },
  { name: "Fragrance", n: "760", img: "cat-4" },
  { name: "Supplements", n: "1,120", img: "cat-5" },
  { name: "Mother & baby", n: "940", img: "cat-6" },
  { name: "Ayurveda", n: "1,560", img: "cat-7" },
  { name: "Home & living", n: "4,300", img: "cat-8" },
]

export const FLASH_ITEMS = [
  {
    name: "Kumkumadi Radiance Oil 15ml",
    price: "2,450",
    was: "3,900",
    sold: "78%",
    left: "12",
    img: "flash-1",
  },
  {
    name: "Aloe & Cucumber Gel 200g",
    price: "890",
    was: "1,350",
    sold: "64%",
    left: "31",
    img: "flash-2",
  },
  {
    name: "SPF 50 Mineral Sunscreen",
    price: "3,180",
    was: "4,600",
    sold: "91%",
    left: "4",
    img: "flash-3",
  },
  {
    name: "Ceylon Cinnamon Body Butter",
    price: "1,740",
    was: "2,300",
    sold: "45%",
    left: "55",
    img: "flash-4",
  },
  {
    name: "Charcoal Detox Face Wash",
    price: "1,090",
    was: "1,700",
    sold: "82%",
    left: "9",
    img: "flash-5",
  },
]

export const PRODUCTS: Product[] = [
  {
    id: "AYU-VITC-30",
    slug: "vitamin-c-brightening-serum",
    seller: "AYURMA HERBALS",
    name: "10% Vitamin C Brightening Serum 30ml",
    rating: "4.8",
    reviews: "1,204",
    price: "4,850",
    was: "6,200",
    badge: "-22%",
    img: "product-1",
  },
  {
    id: "CGL-COCO-200",
    slug: "virgin-coconut-hair-oil",
    seller: "CEYLON GLOW",
    name: "Virgin Coconut Hair Oil 200ml, cold pressed",
    rating: "4.7",
    reviews: "862",
    price: "1,290",
    was: "1,650",
    badge: "-21%",
    img: "product-2",
  },
  {
    id: "NIM-NIAC-30",
    slug: "niacinamide-zinc-serum",
    seller: "NIMNA COSMETICS",
    name: "Niacinamide 5% + Zinc Blemish Serum",
    rating: "4.6",
    reviews: "540",
    price: "3,600",
    was: "4,300",
    badge: "NEW",
    img: "product-3",
  },
  {
    id: "KAN-SAND-150",
    slug: "sandalwood-turmeric-face-wash",
    seller: "KANDY HERBALS",
    name: "Sandalwood & Turmeric Face Wash 150ml",
    rating: "4.9",
    reviews: "2,077",
    price: "980",
    was: "1,250",
    badge: "BEST",
    img: "product-4",
  },
  {
    id: "VIT-D3-60",
    slug: "vitamin-d3-capsules",
    seller: "VITHANAGE PHARMA",
    name: "Vitamin D3 2000 IU · 60 capsules",
    rating: "4.5",
    reviews: "318",
    price: "2,750",
    was: "3,100",
    badge: "-11%",
    img: "product-5",
  },
  {
    id: "CGL-HYAL-50",
    slug: "hyaluronic-hydra-boost-moisturiser",
    seller: "CEYLON GLOW",
    name: "Hyaluronic Hydra Boost Moisturiser 50g",
    rating: "4.7",
    reviews: "705",
    price: "3,950",
    was: "4,900",
    badge: "-19%",
    img: "product-6",
  },
  {
    id: "AYU-TONR-120",
    slug: "neem-tea-tree-toner",
    seller: "AYURMA HERBALS",
    name: "Neem & Tea Tree Anti-acne Toner 120ml",
    rating: "4.4",
    reviews: "221",
    price: "1,480",
    was: "1,900",
    badge: "-22%",
    img: "product-7",
  },
  {
    id: "LOT-ROSE-100",
    slug: "rose-water-facial-mist",
    seller: "LOTUS LANKA",
    name: "Rose Water Facial Mist, steam distilled",
    rating: "4.8",
    reviews: "1,530",
    price: "760",
    was: "990",
    badge: "BEST",
    img: "product-8",
  },
  {
    id: "NIM-LIPS-01",
    slug: "matte-liquid-lipstick",
    seller: "NIMNA COSMETICS",
    name: "Matte Liquid Lipstick — Kurunegala Clay",
    rating: "4.3",
    reviews: "188",
    price: "1,650",
    was: "2,100",
    badge: "NEW",
    img: "product-9",
  },
  {
    id: "VIT-EFFC-20",
    slug: "zinc-vitamin-c-effervescent",
    seller: "VITHANAGE PHARMA",
    name: "Zinc + Vitamin C Effervescent · 20 tabs",
    rating: "4.6",
    reviews: "412",
    price: "1,120",
    was: "1,400",
    badge: "-20%",
    img: "product-10",
  },
]

export const PDP_PRODUCT = PRODUCTS[0]

export const RECENT = [
  { name: "Argan Repair Hair Mask 250g", price: "2,190", img: "recent-1" },
  { name: "Green Tea Clay Mask 100g", price: "1,340", img: "recent-2" },
  { name: "Baby Gentle Wash 400ml", price: "1,880", img: "recent-3" },
  { name: "Retinol 0.3% Night Serum", price: "5,400", img: "recent-4" },
  { name: "Herbal Hair Growth Tonic", price: "2,650", img: "recent-5" },
  { name: "Bamboo Charcoal Soap ×3", price: "690", img: "recent-6" },
]

export const FOOTER_COLS = [
  {
    title: "Shop",
    links: [
      "All categories",
      "Flash sale",
      "New arrivals",
      "Best sellers",
      "Gift vouchers",
    ],
  },
  {
    title: "Customer care",
    links: [
      "Help centre",
      "Track your order",
      "Returns & refunds",
      "Shipping & delivery",
      "Contact us",
    ],
  },
  {
    title: "Company",
    links: [
      "About Koshima",
      "Sell on Koshima",
      "Blog & news",
      "Terms of service",
      "Privacy policy",
    ],
  },
]

export function storefrontImg(name: string) {
  return img(name)
}

// ---------- Category / search ----------

export const SUB_CATS = [
  "Serums & essences",
  "Cleansers",
  "Moisturisers",
  "Sunscreen",
  "Masks & exfoliants",
  "Eye care",
  "Ayurvedic",
  "Acne care",
]

export const SORT_OPTS = [
  "Best match",
  "Price low–high",
  "Price high–low",
  "Customer review",
  "Newest arrivals",
  "Best sellers",
]

export const FACETS = [
  {
    name: "Brand / seller",
    options: [
      { label: "Ayurma Herbals", n: "412", on: true },
      { label: "Ceylon Glow", n: "288", on: false },
      { label: "Nimna Cosmetics", n: "176", on: false },
      { label: "Kandy Herbals", n: "155", on: false },
    ],
  },
  {
    name: "Skin concern",
    options: [
      { label: "Brightening", n: "640", on: true },
      { label: "Acne & blemish", n: "512", on: false },
      { label: "Anti-ageing", n: "380", on: false },
      { label: "Hydration", n: "720", on: false },
    ],
  },
  {
    name: "Skin type",
    options: [
      { label: "Oily", n: "480", on: false },
      { label: "Dry", n: "355", on: false },
      { label: "Combination", n: "610", on: false },
      { label: "Sensitive", n: "290", on: false },
    ],
  },
  {
    name: "Rating",
    options: [
      { label: "★★★★☆ 4 & up", n: "1,980", on: true },
      { label: "★★★☆☆ 3 & up", n: "2,640", on: false },
    ],
  },
  {
    name: "Availability",
    options: [
      { label: "In stock only", n: "2,904", on: true },
      { label: "Same-day dispatch", n: "1,120", on: false },
    ],
  },
]

export const SUGGESTIONS = [
  { q: "vitamin c serum", n: "148 products" },
  { q: "vitamin c serum 20%", n: "32 products" },
  { q: "vitamin c serum for oily skin", n: "54 products" },
  { q: "vitamin c + niacinamide", n: "76 products" },
  { q: "vitamin c සෙරම්", n: "61 products" },
  { q: "vitamin c face wash", n: "43 products" },
]

export const SUGGEST_PRODUCTS = [
  {
    name: "10% Vitamin C Brightening Serum 30ml",
    seller: "AYURMA HERBALS",
    price: "4,850",
    img: "product-1",
  },
  {
    name: "Vitamin C + Ferulic Day Serum 20ml",
    seller: "CEYLON GLOW",
    price: "6,200",
    img: "product-7",
  },
  {
    name: "Vitamin C Effervescent · 20 tabs",
    seller: "VITHANAGE PHARMA",
    price: "1,120",
    img: "product-10",
  },
]

// ---------- PDP ----------

export const SPECS = [
  { k: "Brand", v: "Ayurma Herbals" },
  { k: "SKU", v: "AYU-VITC-30" },
  { k: "Volume", v: "30 ml" },
  { k: "Skin type", v: "All, incl. sensitive" },
  { k: "Key actives", v: "L-ascorbic acid 10%" },
  { k: "Concern", v: "Brightening, dullness" },
  { k: "Formulation", v: "Water-based serum" },
  { k: "Country of origin", v: "Sri Lanka" },
  { k: "Shelf life", v: "24 months" },
  { k: "Warranty", v: "Damage on arrival, 7 days" },
  { k: "Package weight", v: "0.18 kg" },
  { k: "Dimensions (L×W×H)", v: "4 × 4 × 11 cm" },
]

// ---------- Reviews ----------

export const RATING_BARS = [
  { star: "5", pct: "84%", n: "1,012" },
  { star: "4", pct: "9%", n: "108" },
  { star: "3", pct: "4%", n: "48" },
  { star: "2", pct: "2%", n: "24" },
  { star: "1", pct: "1%", n: "12" },
]

export const REVIEW_LIST = [
  {
    initials: "DS",
    name: "Dilini S.",
    verified: true,
    meta: "30ml · 10% · 12 July 2026",
    stars: "★★★★★",
    body: "Three weeks in and the dullness around my cheeks has genuinely lifted. It does not pill under sunscreen, which was my problem with the two imported serums I tried before. Packaging arrived sealed and boxed properly.",
    helpful: "48",
    hasPhotos: true,
    hasReply: true,
  },
  {
    initials: "RP",
    name: "Ravindu P.",
    verified: true,
    meta: "50ml · 20% · 4 July 2026",
    stars: "★★★★☆",
    body: "Good value against imported equivalents. Slight tingle for the first few days on the 20%. Delivery to Matara took three days.",
    helpful: "21",
    hasPhotos: false,
    hasReply: false,
  },
  {
    initials: "AF",
    name: "Aisha F.",
    verified: true,
    meta: "30ml · 10% · 28 June 2026",
    stars: "★★★★★",
    body: "Bought two more for my sisters. The dropper is glass and the bottle is amber so it actually keeps.",
    helpful: "15",
    hasPhotos: true,
    hasReply: false,
  },
  {
    initials: "MK",
    name: "Mohamed K.",
    verified: false,
    meta: "19 June 2026",
    stars: "★★★☆☆",
    body: "Works, but I expected a pump rather than a dropper at this price.",
    helpful: "6",
    hasPhotos: false,
    hasReply: false,
  },
]

// ---------- Compare ----------

export const COMPARE_COLS = [
  {
    seller: "AYURMA HERBALS",
    name: "10% Vitamin C Brightening Serum 30ml",
    price: "4,850",
    img: "product-1",
  },
  {
    seller: "CEYLON GLOW",
    name: "Vitamin C + Ferulic Day Serum 20ml",
    price: "6,200",
    img: "product-7",
  },
  {
    seller: "NIMNA COSMETICS",
    name: "Niacinamide 5% + Zinc Serum 30ml",
    price: "3,600",
    img: "product-3",
  },
]

export const COMPARE_ROWS = [
  { label: "Rating", a: "★ 4.8 (1,204)", b: "★ 4.6 (388)", c: "★ 4.6 (540)" },
  {
    label: "Key active",
    a: "L-ascorbic acid 10%",
    b: "L-ascorbic 15% + ferulic",
    c: "Niacinamide 5% + zinc",
  },
  { label: "Volume", a: "30 ml", b: "20 ml", c: "30 ml" },
  { label: "Price per ml", a: "Rs 161.67", b: "Rs 310.00", c: "Rs 120.00" },
  {
    label: "Skin type",
    a: "All, incl. sensitive",
    b: "Normal to oily",
    c: "Oily, acne-prone",
  },
  { label: "Fragrance free", a: "Yes", b: "No", c: "Yes" },
  { label: "Origin", a: "Sri Lanka", b: "Sri Lanka", c: "Sri Lanka" },
  { label: "Package weight", a: "0.18 kg", b: "0.14 kg", c: "0.19 kg" },
  {
    label: "Ships internationally",
    a: "Yes — all groups",
    b: "Yes — groups A–E",
    c: "Yes — all groups",
  },
  {
    label: "Availability",
    a: "In stock",
    b: "In stock",
    c: "Low stock — 6 left",
  },
]

// ---------- Wishlist ----------

export const WISH_ITEMS = [
  {
    seller: "AYURMA HERBALS",
    name: "10% Vitamin C Brightening Serum 30ml",
    saved: "12 July",
    price: "4,850",
    delta: "↓ Rs 350",
    stock: "In stock",
    stockOk: true,
    btn: "Add to cart",
    img: "product-1",
  },
  {
    seller: "CEYLON GLOW",
    name: "Hyaluronic Hydra Boost Moisturiser 50g",
    saved: "9 July",
    price: "3,950",
    delta: "",
    stock: "In stock",
    stockOk: true,
    btn: "Add to cart",
    img: "product-6",
  },
  {
    seller: "NIMNA COSMETICS",
    name: "Matte Liquid Lipstick — Kurunegala Clay",
    saved: "2 July",
    price: "1,650",
    delta: "↓ Rs 450",
    stock: "Low stock — 6 left",
    stockOk: false,
    btn: "Add to cart",
    img: "product-9",
  },
  {
    seller: "KANDY HERBALS",
    name: "Sandalwood & Turmeric Face Wash 150ml",
    saved: "28 June",
    price: "980",
    delta: "",
    stock: "Out of stock",
    stockOk: false,
    btn: "Notify me",
    img: "product-4",
  },
  {
    seller: "VITHANAGE PHARMA",
    name: "Vitamin D3 2000 IU · 60 capsules",
    saved: "21 June",
    price: "2,750",
    delta: "",
    stock: "In stock",
    stockOk: true,
    btn: "Add to cart",
    img: "product-5",
  },
  {
    seller: "LOTUS LANKA",
    name: "Rose Water Facial Mist 100ml",
    saved: "14 June",
    price: "760",
    delta: "",
    stock: "In stock",
    stockOk: true,
    btn: "Add to cart",
    img: "product-8",
  },
]

// ---------- Cart ----------

export const CART_GROUPS = [
  {
    seller: "Ayurma Herbals",
    location: "KURUNEGALA",
    ship: "Free shipping unlocked",
    shipOk: true,
    note: "Dispatched by Fardar Express · estimated arrival Wed 30 Jul",
    items: [
      {
        name: "10% Vitamin C Brightening Serum 30ml",
        variant: "30ml · 10% strength",
        sku: "AYU-VITC-30",
        weight: "0.18 kg",
        qty: 2,
        total: "9,700",
        was: "12,400",
        img: "product-1",
      },
      {
        name: "Neem & Tea Tree Anti-acne Toner 120ml",
        variant: "120ml",
        sku: "AYU-TONR-120",
        weight: "0.24 kg",
        qty: 1,
        total: "1,480",
        was: "1,900",
        img: "product-7",
      },
    ],
  },
  {
    seller: "Ceylon Glow",
    location: "COLOMBO 05",
    ship: "Rs 300 shipping",
    shipOk: false,
    note: "Add Rs 6,050 more from this seller for free shipping",
    items: [
      {
        name: "Hyaluronic Hydra Boost Moisturiser 50g",
        variant: "50g jar",
        sku: "CGL-HYAL-50",
        weight: "0.22 kg",
        qty: 1,
        total: "3,950",
        was: "4,900",
        img: "product-6",
      },
    ],
  },
]

export const CART_SUMMARY = [
  { k: "Subtotal (3 items)", v: "Rs 15,130", positive: false },
  { k: "Seller discounts", v: "− Rs 2,270", positive: true },
  { k: "Voucher KOSHIMA500", v: "− Rs 500", positive: true },
  { k: "Shipping (2 sub-orders)", v: "Rs 300", positive: false },
  { k: "VAT 18% (charged separately)", v: "Rs 2,660", positive: false },
]

export const MINI_CART = [
  {
    name: "10% Vitamin C Serum 30ml",
    seller: "AYURMA HERBALS",
    qty: "2",
    total: "9,700",
    img: "product-1",
  },
  {
    name: "Neem & Tea Tree Toner 120ml",
    seller: "AYURMA HERBALS",
    qty: "1",
    total: "1,480",
    img: "product-7",
  },
  {
    name: "Hydra Boost Moisturiser 50g",
    seller: "CEYLON GLOW",
    qty: "1",
    total: "3,950",
    img: "product-6",
  },
]

// ---------- Checkout: address ----------

export const ADDRESSES = [
  {
    name: "Nimasha Perera — Home",
    tag: "DEFAULT",
    tagTone: "blue",
    line: "No. 42/3, Kandy Road, Wehera, Kurunegala 60000, North Western, Sri Lanka",
    phone: "+94 77 412 8890",
    selected: true,
  },
  {
    name: "Nimasha Perera — Office",
    tag: "WORK",
    tagTone: "gray",
    line: "Level 6, Access Tower II, 278 Union Place, Colombo 02, Western, Sri Lanka",
    phone: "+94 11 730 5500",
    selected: false,
  },
  {
    name: "Sanduni Perera — London",
    tag: "INTERNATIONAL",
    tagTone: "amber",
    line: "18 Marchmont Street, Bloomsbury, London WC1N 1AP, United Kingdom",
    phone: "+44 7700 900412",
    selected: false,
  },
]

export const ADDRESS_FIELDS = [
  { label: "Full name", value: "Nimasha Perera", wide: false, select: false },
  {
    label: "Mobile number",
    value: "+94 77 412 8890",
    wide: false,
    select: false,
  },
  { label: "Country", value: "Sri Lanka", wide: false, select: true },
  { label: "Province", value: "North Western", wide: false, select: true },
  { label: "District", value: "Kurunegala", wide: false, select: true },
  { label: "City / town", value: "Wehera", wide: false, select: true },
  {
    label: "Address line",
    value: "No. 42/3, Kandy Road",
    wide: true,
    select: false,
  },
  { label: "Postal code", value: "60000", wide: false, select: false },
  {
    label: "Delivery note (optional)",
    value: "Leave with security if not home",
    wide: false,
    select: false,
  },
]

// ---------- Checkout: shipping (Fardar Express only) ----------

export const SHIP_OPTIONS = [
  {
    name: "Fardar Express — standard",
    tag: "PRIMARY COURIER",
    detail:
      "2–3 working days · tracked · pickup auto-requested when the order is approved",
    price: "FREE",
    free: true,
    selected: true,
  },
  {
    name: "Fardar Express — next day",
    tag: "",
    detail:
      "Ordered before 2pm, delivered next working day to Kurunegala district",
    price: "Rs 550",
    free: false,
    selected: false,
  },
]

export const SHIP_SUBORDER_2 = {
  name: "Fardar Express — standard",
  detail: "2–3 working days · pickup auto-requested on approval",
  price: "Rs 300",
}

// ---------- Checkout: international ----------

export const INTL_SERVICES = [
  {
    name: "EMS — merchandise",
    tag: "FASTEST",
    tagTone: "blue",
    detail: "Tracked end to end, signature on delivery, max 20 kg to UK",
    basis: "first 500 g Rs 3,150 + Rs 640 per additional 500 g",
    price: "Rs 3,790",
    days: "4–6 days",
    selected: true,
  },
  {
    name: "Air Parcel",
    tag: "",
    tagTone: "gray",
    detail: "Tracked to destination country, max 20 kg",
    basis: "first 500 g Rs 2,180 + Rs 480 per additional 500 g",
    price: "Rs 2,660",
    days: "7–12 days",
    selected: false,
  },
  {
    name: "Foreign Airmail — U-packet",
    tag: "GROUP E",
    tagTone: "gray",
    detail: "Untracked unless registration is added below, max 2 kg",
    basis: "first 50 g Rs 150 + Rs 50 per additional 50 g",
    price: "Rs 950",
    days: "10–18 days",
    selected: false,
  },
  {
    name: "Sea Parcel",
    tag: "CHEAPEST",
    tagTone: "green",
    detail: "Surface mail, no tracking beyond dispatch, max 20 kg",
    basis: "first 1 kg Rs 1,240 + Rs 380 per additional kg",
    price: "Rs 1,240",
    days: "6–10 weeks",
    selected: false,
  },
]

export const SPECIAL_FEES = [
  { name: "Registration", fee: "870", on: true },
  { name: "Insured", fee: "1,050", on: false },
  { name: "Advice of delivery", fee: "460", on: false },
  { name: "Delivery handling — parcel", fee: "250", on: false },
]

export const INTL_SUMMARY = [
  { k: "Subtotal (3 items)", v: "Rs 15,130", tone: "" },
  { k: "Discounts", v: "− Rs 2,770", tone: "green" },
  { k: "EMS to United Kingdom", v: "Rs 3,790", tone: "" },
  { k: "Registration fee", v: "Rs 870", tone: "" },
  { k: "VAT 18%", v: "Rs 2,660", tone: "" },
  { k: "Import duty (UK)", v: "Paid on delivery", tone: "amber" },
]

// ---------- Checkout: payment ----------

export const PAY_GROUPS = [
  {
    label: "PAYMENT GATEWAYS",
    methods: [
      {
        name: "PayHere",
        sub: "Card, wallet, bank",
        selected: true,
        muted: false,
      },
      { name: "OnePay", sub: "Card & QR", selected: false, muted: false },
      { name: "iPay", sub: "Mobile wallet", selected: false, muted: false },
      { name: "PayPal", sub: "USD accepted", selected: false, muted: false },
    ],
  },
  {
    label: "LOCAL BANK GATEWAYS",
    methods: [
      { name: "HNB", sub: "Direct bank", selected: false, muted: false },
      {
        name: "Commercial Bank",
        sub: "Direct bank",
        selected: false,
        muted: false,
      },
      {
        name: "Seylan Bank",
        sub: "Direct bank",
        selected: false,
        muted: false,
      },
      {
        name: "Sampath Bank",
        sub: "Direct bank",
        selected: false,
        muted: false,
      },
    ],
  },
  {
    label: "INSTALMENTS",
    methods: [
      { name: "Koko", sub: "3 × interest free", selected: false, muted: false },
      {
        name: "Mintpay",
        sub: "3 × interest free",
        selected: false,
        muted: false,
      },
    ],
  },
  {
    label: "ON DELIVERY — PENDING CLIENT CONFIRMATION (APPENDIX B #3)",
    methods: [
      {
        name: "Cash on delivery",
        sub: "Domestic orders only",
        selected: false,
        muted: true,
      },
    ],
  },
]

// ---------- Confirmation / tracking ----------

export const CONFIRM_ORDERS = [
  {
    id: "KM-26-108447-A",
    detail: "Ayurma Herbals · 3 items · Fardar Express, free",
    total: "11,180",
  },
  {
    id: "KM-26-108447-B",
    detail: "Ceylon Glow · 1 item · Fardar Express, Rs 300",
    total: "4,250",
  },
]

export const TRACK_STEPS = [
  {
    title: "Out for delivery",
    time: "Today 09:14",
    detail: "With rider Sunil B. · Kurunegala hub → Wehera",
    tone: "blue",
    done: false,
    last: false,
  },
  {
    title: "Arrived at Kurunegala hub",
    time: "Today 06:02",
    detail: "Fardar Express sorting facility",
    tone: "green",
    done: true,
    last: false,
  },
  {
    title: "In transit",
    time: "Yesterday 21:40",
    detail: "Departed Colombo central sorting",
    tone: "green",
    done: true,
    last: false,
  },
  {
    title: "Picked up from seller",
    time: "27 Jul 16:20",
    detail: "Pickup auto-requested when the order was approved (FR-SHP-005)",
    tone: "green",
    done: true,
    last: false,
  },
  {
    title: "Order approved & paid",
    time: "27 Jul 14:22",
    detail: "PayHere authorisation 8842119 · stock decremented",
    tone: "green",
    done: true,
    last: true,
  },
]

// ---------- Vouchers ----------

export const VOUCHER_DESIGNS = [
  {
    name: "Classic ink",
    label: "Kᴏ",
    ink: "#fff",
    bg: "#0B1220",
    selected: true,
  },
  {
    name: "Blush",
    label: "Kᴏ",
    ink: "#C2352B",
    bg: "#FDF3F0",
    selected: false,
  },
  { name: "Avurudu", label: "Kᴏ", ink: "#fff", bg: "#2563EB", selected: false },
]

export const VOUCHER_AMOUNTS = [
  "Rs 2,500",
  "Rs 5,000",
  "Rs 10,000",
  "Rs 15,000",
  "Rs 25,000",
  "Custom",
]

// ---------- Returns / static page ----------

export const STATIC_NAV = [
  "About Koshima",
  "Terms of service",
  "Privacy policy (PDPA)",
  "Returns & refunds",
  "Shipping & delivery",
  "Seller agreement",
  "Cookie policy",
]

export const POLICY_SECTIONS = [
  {
    h: "1. Your right to return",
    b: "You may request a return within 7 days of delivery for most items. The item must be unused, in its original packaging, and with any seals intact. Health, beauty and personal-care items that have been opened cannot be returned for hygiene reasons unless they arrived damaged or are not what you ordered.",
  },
  {
    h: "2. How to start a return",
    b: "Open the order in your account, choose Request return, select a reason and upload at least one photograph. The seller or our operations team responds within two working days. Approved returns are collected by Fardar Express at a time you choose.",
  },
  {
    h: "3. Quality control and outcome",
    b: "Every returned item passes through quality control at our Kurunegala facility. QC records a pass or fail with photographs. Items that pass are restocked and your refund is released; items that fail are either returned to you or scrapped, and the outcome is recorded against the return.",
  },
  {
    h: "4. Refunds",
    b: "Refunds are issued to your original payment method, your Koshima wallet, or as store credit — your choice at the point of request. Gateway refunds typically settle within 5 to 10 working days; wallet credit is immediate. Partial refunds are supported where only part of an order is returned.",
  },
  {
    h: "5. Items that cannot be returned",
    b: "Gift vouchers, prescription items, opened cosmetics, and made-to-order products are excluded. Anything excluded is marked clearly on its product page before you buy.",
  },
]

export const POLICY_ROWS = [
  { cat: "Skincare & cosmetics (sealed)", win: "7 days", ship: "Seller pays" },
  { cat: "Skincare & cosmetics (opened)", win: "Not returnable", ship: "—" },
  {
    cat: "Supplements & health",
    win: "7 days, sealed only",
    ship: "Seller pays",
  },
  { cat: "Electronics", win: "14 days", ship: "Seller pays if faulty" },
  { cat: "Fashion & accessories", win: "14 days", ship: "Buyer pays" },
]
