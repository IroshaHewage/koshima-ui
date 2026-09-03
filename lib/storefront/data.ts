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
]

export const PRODUCTS: Product[] = []

export const PDP_PRODUCT = PRODUCTS[0]

export const RECENT = [
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
]

export const SUGGEST_PRODUCTS = [
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
]

// ---------- Compare ----------

export const COMPARE_COLS = [
]

export const COMPARE_ROWS = [
]

// ---------- Wishlist ----------

export const WISH_ITEMS = [
]

// ---------- Cart ----------

export const CART_GROUPS = [
]

export const CART_SUMMARY = [
]

export const MINI_CART = [
]

// ---------- Checkout: address ----------

export const ADDRESSES = [
]

export const ADDRESS_FIELDS = [
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
