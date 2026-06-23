export type Review = {
  quote: string | null;
  stars: number;
  source: string;
};

export type SoloShow = {
  title: string;
  body: string;
  href?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const site = {
  artistName: "George Zacharopoulos",
  siteName: "georgezacharopoulos.com",
  tagline: "Greek Comedian of the Year",
  description:
    "George Zacharopoulos — Greek stand-up comedian, storyteller, and one of Europe's rising stars. Upcoming gigs across the UK, Europe, Dubai, and Australia.",
  heroImage: "/hero.webp",
  heroImageMobile: "/hero-mobile.webp",
  heroImageAlt: "George Zacharopoulos on stage",
  heroTitleLines: ["George", "Zacharopoulos"],
  bookingsEmail: "bookings@georgezacharopoulos.com",
  email: "hello@georgezacharopoulos.com",
  showsHeading: "Upcoming gigs",
  noShowsMessage: "No upcoming gigs listed right now — check back soon or follow on Instagram.",
  about: {
    paragraphs: [
      "My name is George Zacharopoulos, though British comperes often call me George Zach because they can't pronounce my ridiculous name. I was born in Kalamata, Greece — a land of olives and debt — but moved to Newcastle to study Biochemistry. I then stayed for the weather. And the fact I am dodging my national service.",
      "Luckily I discovered comedy. I now headline clubs across the UK, Europe, Dubai, and Australia. I've supported Jim Jefferies, Chris McCausland, Sophie Willan, and TJ Miller on tour, and performed everywhere from the Edinburgh Fringe to London's O2 Arena.",
      "My comedy is storytelling-driven — immigration, identity, relationships, and the chaos of trying to look like you've got your life together when you absolutely don't.",
      "Am I funny? Scroll to the gallery and you will see a photo of at least one guy laughing. That photo was on my dating app profile and convinced my now girlfriend to swipe right. So yes — I am a pretty big deal.",
    ],
  },
  soloShows: [
    {
      title: "The Meaning of Life, Maybe",
      body:
        "Brand new hour for 2026. After a year of sold-out shows, an O2 Arena gig, and a proposal, everything went to shit. A heartwarming, hilarious show about how joy survives when your world collapses.",
    },
    {
      title: "The Butterfly Effect",
      body: "2025 Greek Comedian of the Year show — sharp storytelling about cause, chaos, and accidentally becoming an adult.",
    },
    {
      title: "Greek in the Sheets",
      body: "2024 Greek Comedian of the Year hour — personal, filthy, and very Greek.",
    },
    {
      title: "Wonderland",
      body: "Edinburgh Fringe hour — absurd adventures through George's upside-down world.",
    },
  ] satisfies SoloShow[],
  reviews: [
    { quote: "You will ache from laughing so hard.", stars: 5, source: "Reviews Hub, 2023" },
    { quote: "One of the best comedians you'll see at the Fringe.", stars: 5, source: "The Quintessential Review, 2024" },
    { quote: "Masterful storytelling.", stars: 5, source: "European Comedy Awards, 2025" },
    { quote: "Hilarious and captivating.", stars: 5, source: "British Comedy Guide" },
    { quote: "A true European star.", stars: 5, source: "Fringe World" },
    { quote: "Heartwarming, yet hilarious.", stars: 5, source: "Perth Fringe World, 2026" },
  ] satisfies Review[],
  awards: [
    "Greek Comedian of the Year (multiple years)",
    "Best International Comedian — Melbourne, 2023",
    "Best European Performer — Edinburgh Fringe, 2024",
    "Actually Funny Comedian — Perth Fringe World, 2026",
  ],
  gallery: {
    title: "Gallery",
    images: [
      { src: "/gallery/01.webp", alt: "George Zacharopoulos performing stand-up" },
      { src: "/gallery/02.webp", alt: "George Zacharopoulos on stage at the Edinburgh Fringe" },
      { src: "/gallery/03.webp", alt: "George Zacharopoulos with a laughing audience member" },
      { src: "/gallery/04.webp", alt: "George Zacharopoulos at a comedy club" },
    ] satisfies GalleryImage[],
  },
  contact: {
    title: "Contact",
    body: "Bookings, press, or just saying hi — reach out below.",
  },
  nav: [
    { label: "Gigs", href: "/shows/" },
    { label: "Solo shows", href: "/solo-shows/" },
    { label: "Press", href: "/press/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Bio", href: "/bio/" },
    { label: "Contact", href: "/contact/" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/greekcomedian", platform: "instagram" as const },
    { label: "Facebook", href: "https://www.facebook.com/georgezacharopoulos", platform: "facebook" as const },
    { label: "X", href: "https://twitter.com/georgezach", platform: "twitter" as const },
  ],
  footerCredit: {
    prefix: "Built with ",
    label: "Kintana",
    href: "https://kintana.app",
  },
} as const;
