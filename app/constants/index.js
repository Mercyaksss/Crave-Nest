// data/index.js

// ============================================================
// BRAND
// ============================================================

export const brand = {
    name: "Crave Nest",

    description:
        "A baking and food business creating baked goods, pastries, and catering experiences designed around comfort, quality, and enjoyment.",

    tagline: "", // To be decided with the owner

    colors: {
        navy: "#12284B",
        lightBlue: "#A9CBE0",
        neutral: "#F0F5F4",
        black: "#000000",
        gold: "#C9A24A",
    },

    fonts: {
        display: "Playfair Display",
        body: "Times New Roman",
        ui: "Inter",
        accent: "Allura",
    },
};


// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Menu",
        href: "#menu",
    },
    {
        name: "Gallery",
        href: "#gallery",
    },
    {
        name: "FAQ",
        href: "#faq",
    },
];


// ============================================================
// BUSINESS INFORMATION
// ============================================================

export const businessInfo = {
    name: "Crave Nest",

    type: "Baking & Food Business",

    description:
        "Crave Nest is a baking and food business focused mainly on baked goods and event/catering orders.",

    locations: ["Kaduna", "Abuja"],

    country: "Nigeria",

    serviceAreas: [
        "Kaduna",
        "Abuja",
    ],

    additionalServiceAreas:
        "Orders and catering projects outside Kaduna and Abuja may be considered depending on the project and travel requirements.",

    specialties: [
        "Cakes",
        "Bread",
        "Meat Pies",
        "Small Chops",
        "Doughnuts",
        "Pastries",
        "Event Catering",
    ],
};


// ============================================================
// CONTACT
// ============================================================

export const contactInfo = {
    phone: "+2349078006689",

    whatsapp: "+2349078006689",

    whatsappLink: "https://wa.me/2349078006689",

    email: "", // Not provided yet
};


// ============================================================
// SOCIAL MEDIA
// ============================================================

export const socialLinks = [
    {
        name: "Instagram",
        username: "@crave_nest_",
        url: "https://www.instagram.com/crave_nest_/",
    },
    {
        name: "TikTok",
        username: "@the_ayoeffect",
        url: "https://www.tiktok.com/@the_ayoeffect",
    },
];


// ============================================================
// BUSINESS HOURS
// ============================================================

export const businessHours = {
    enquiries: {
        label: "Enquiries & Orders",
        hours: "24/7",
    },

    production: {
        label: "Production",
        hours: "By arrangement",
    },

    pickup: {
        label: "Pickup",
        hours: "By arrangement",
    },

    delivery: {
        label: "Delivery",
        hours: "By arrangement",
    },
};


// ============================================================
// PRODUCT CATEGORIES
// ============================================================

export const productCategories = [
    {
        id: "cakes",
        name: "Cakes",
        description:
            "Custom cakes created for celebrations, special occasions, and everyday indulgence.",
        featured: true,
        customizable: true,
    },

    {
        id: "bread",
        name: "Bread",
        description: "",
        featured: false,
        customizable: true,
    },

    {
        id: "meat-pies",
        name: "Meat Pies",
        description: "",
        featured: false,
        customizable: true,
    },

    {
        id: "small-chops",
        name: "Small Chops",
        description: "",
        featured: false,
        customizable: true,
    },

    {
        id: "doughnuts",
        name: "Doughnuts",
        description: "",
        featured: false,
        customizable: true,
    },

    {
        id: "pastries",
        name: "Other Pastries",
        description:
            "A selection of other baked goods and pastries from Crave Nest.",
        featured: false,
        customizable: true,
    },
];


// ============================================================
// PRODUCTS
// ============================================================

// The owner said the complete product list will be provided separately.
// We will populate this array once the actual menu is available.

export const menuItems = [];


// ============================================================
// FEATURED CAKES
// ============================================================

// Cakes are the main specialty, so this section will eventually
// contain selected cake products/designs.

export const featuredCakes = [];


// ============================================================
// CUSTOM ORDERS
// ============================================================

export const customization = {
    available: true,

    description:
        "Crave Nest products can be customized to some degree depending on the product and the customer's requirements.",

    cakeOptions: [
        "Flavour",
        "Size",
        "Design",
        "Theme",
        "Other specifications",
    ],

    process: [
        "Choose your product",
        "Share your requirements",
        "Send a reference image if needed",
        "Discuss size, flavour, quantity, design, budget and deadline",
        "Confirm your order",
    ],
};


// ============================================================
// PRICING
// ============================================================

export const pricing = {
    displayFixedPrices: false,

    defaultLabel: "Request Current Price",

    customOrderLabel: "Request a Quote",

    description:
        "Prices may vary depending on location, size, design, quantity, ingredients and level of customization.",
};


// ============================================================
// ORDERING PROCESS
// ============================================================

export const orderingProcess = [
    {
        step: "01",
        title: "Browse",
        description:
            "Explore our menu and discover the products available at Crave Nest.",
    },

    {
        step: "02",
        title: "Choose",
        description:
            "Select what you'd like and consider your preferred size, flavour, quantity or customization.",
    },

    {
        step: "03",
        title: "Enquire",
        description:
            "Send your requirements to us on WhatsApp so we can discuss your order.",
    },

    {
        step: "04",
        title: "Confirm",
        description:
            "We'll discuss availability, pricing, delivery or pickup and finalize your order.",
    },
];


// ============================================================
// CATERING & EVENTS
// ============================================================

export const cateringInfo = {
    available: true,

    title: "Catering & Event Orders",

    description:
        "Crave Nest accepts bulk orders, event orders, catering jobs and special food projects.",

    customQuote: true,

    outsideServiceAreas:
        "Catering projects outside Kaduna and Abuja may be considered. Travel and logistics arrangements will need to be discussed.",

    eventTypes: [], // To be provided

    packages: [], // To be provided
};


// ============================================================
// GALLERY
// ============================================================

// Actual product images will be added once the final edited assets
// are ready.

export const galleryItems = ['sprinklescake', 'parfait1', 'redVelvetCake', 'smallchopsraw', 'yogurtpour' ];


// ============================================================
// TESTIMONIALS
// ============================================================

// Real customer testimonials will be added when provided.
// Do NOT use fabricated reviews.

export const testimonials = [];


// ============================================================
// FAQ
// ============================================================

export const faqItems = [
    {
        question: "What products does Crave Nest offer?",
        answer:
            "Crave Nest offers cakes, bread, meat pies, small chops, doughnuts, pastries and event/catering orders.",
    },

    {
        question: "Where does Crave Nest operate?",
        answer:
            "Crave Nest currently serves customers in Kaduna and Abuja.",
    },

    {
        question: "Do you offer custom orders?",
        answer:
            "Yes. Crave Nest products can be customized depending on the product and your requirements.",
    },

    {
        question: "Can I send a reference picture for a custom cake?",
        answer:
            "Yes. Customers can share reference images when discussing custom cake designs and other customized orders.",
    },

    {
        question: "Do you offer catering and bulk orders?",
        answer:
            "Yes. Crave Nest accepts event, catering, bulk and larger food orders.",
    },

    {
        question: "Do you offer delivery?",
        answer:
            "Delivery arrangements depend on the order, location and specific requirements. Contact Crave Nest to discuss delivery options.",
    },

    {
        question: "Can I order from outside Kaduna or Abuja?",
        answer:
            "Some larger events, catering jobs and special projects outside Kaduna and Abuja may be considered. Contact us to discuss your requirements and travel arrangements.",
    },

    {
        question: "Do you have fixed prices?",
        answer:
            "Prices are generally provided on request because they can vary depending on location, size, design, quantity, ingredients and customization.",
    },

    {
        question: "How do I place an order?",
        answer:
            "Browse the products you are interested in, then contact Crave Nest on WhatsApp to discuss availability, requirements, pricing and delivery or pickup.",
    },

    {
        question: "When can I contact Crave Nest?",
        answer:
            "Enquiries and orders can be received 24/7. Production, pickup and delivery times are arranged according to each order.",
    },
];


// ============================================================
// CTA
// ============================================================

export const cta = {
    title: "Got a craving?",

    description:
        "Tell us what you're craving and let's create something you'll love.",

    primaryButton: {
        text: "Order on WhatsApp",
        href: "https://wa.me/2349078006689",
    },

    secondaryButton: {
        text: "Explore Menu",
        href: "#menu",
    },
};


// ============================================================
// FOOTER
// ============================================================

export const footerLinks = [
    {
        title: "Explore",
        links: [
            {
                name: "About",
                href: "#about",
            },
            {
                name: "Menu",
                href: "#menu",
            },
            {
                name: "Gallery",
                href: "#gallery",
            },
            {
                name: "FAQ",
                href: "#faq",
            },
        ],
    },

    {
        title: "Contact",
        links: [
            {
                name: "WhatsApp",
                href: "https://wa.me/2349078006689",
            },
            {
                name: "Instagram",
                href: "https://www.instagram.com/crave_nest_/",
            },
            {
                name: "TikTok",
                href: "https://www.tiktok.com/@the_ayoeffect",
            },
        ],
    },
];
