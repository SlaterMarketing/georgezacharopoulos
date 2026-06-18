export const site = {
  artistName: "Michael Bevan",
  siteName: "michaeljbevan.com",
  description:
    "Michael Bevan is a comedian, writer, and actor based in NYC — featured in The New York Comedy Festival, Funny or Die, and Vogue.",
  heroImage: "/hero.webp",
  heroImageMobile: "/hero-mobile.webp",
  heroImageAlt: "Michael Bevan",
  bookingsEmail: "bookings@michaeljbevan.com",
  email: "hello@michaeljbevan.com",
  showsHeading: "Upcoming shows",
  noShowsMessage: "No upcoming shows listed right now — check back soon or follow on Instagram.",
  varietyShow: {
    title: "The Michael Bevan Show",
    body:
      "Manhattan's finest variety hour folded inside a comedy show — up-and-coming stand-up sandwiched between jaw-dropping variety acts. Hosted monthly at Club Cumming.",
    href: "https://clubcummingnyc.com/schedule/michaelbevan",
  },
  about: {
    paragraphs: [
      "Michael Bevan is a comedian, writer, and actor based in NYC. He's a Virgo from Houston, just like Beyoncé. He studied with the Atlantic Acting Studio and Stonestreet Studios.",
      "Michael's work has been featured in The New York Comedy Festival, Funny or Die, and Snap. He has performed all over NYC including The Comedy Cellar, The Slipper Room, and Broadway Comedy Club.",
      "In addition to acting for the screen and stage, he LOVES doing his monthly variety show, The Michael Bevan Show, exclusively at the acclaimed Club Cumming.",
      "Michael is a media titan paving the way for innovative new comedy with hit viral videos such as 37 Questions with Flower, which was a Funny or Die feature, A Tour With Cartor, and Adobe advertising for TikTok. He graduated from New York University with a degree in Theatre.",
    ],
    photoCredit: "Photo by Victoria Romulo",
  },
  contact: {
    title: "Contact",
    body: "Bookings, press, or just saying hi — reach out below.",
  },
  nav: [
    { label: "FOLLOW", href: "https://www.instagram.com/michaeljbevan", external: true },
    { label: "YOUR CITY", href: "/request-a-show/" },
    { label: "BIO", href: "/bio/" },
    { label: "SHOWS", href: "/shows/" },
    { label: "CONTACT", href: "/contact/" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/michaeljbevan", platform: "instagram" as const },
    { label: "X", href: "https://twitter.com/michaeljbevan", platform: "twitter" as const },
  ],
  footerCredit: {
    prefix: "Built with ",
    label: "Kintana",
    href: "https://kintana.app",
  },
} as const;
