export type Review = {
  quote: string | null;
  stars: number;
  source: string;
};

export type SoloShowReview = {
  quote: string;
  stars: number;
  source: string;
  href?: string;
};

export type SoloShowAudienceReview = {
  author: string;
  quote: string;
};

export type SoloShow = {
  title: string;
  year: string;
  subtitle?: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
  accolade?: string;
  href?: string;
  pressReviews?: SoloShowReview[];
  audienceReviews?: SoloShowAudienceReview[];
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const site = {
  artistName: "George Zacharopoulos",
  alsoKnownAs: "George Zach",
  siteName: "georgezacharopoulos.com",
  tagline: "Greek Comedian of the Year",
  heroEyebrow: "One of Europe's rising stars",
  description:
    "George Zacharopoulos — Greek stand-up comedian and storyteller. Upcoming gigs across the UK, Europe, Dubai, and Australia.",
  heroImage: "/hero.webp",
  heroImageMobile: "/hero-mobile.webp",
  heroImageAlt: "George Zacharopoulos on stage",
  homeIntro:
    "Born in Kalamata, Greece — a land of olives and debt — now headlining clubs across the UK, Europe, Dubai, and Australia. Storytelling comedy about immigration, identity, and pretending your life is together.",
  credits: [
    "Jim Jefferies tour support",
    "BBC One",
    "Edinburgh Fringe",
    "London O2 Arena",
  ],
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
  soloShowsIntro: {
    title: "What is a solo show?",
    paragraphs: [
      "Every year since 2015 I create a solo show — a 55–70 minute hour of new material that I take to festivals and on tour around the world. It's a much different vibe to when you see me do twenty minutes at the comedy clubs.",
      "They mostly tend to have a theme or a story and are centered around that.",
    ],
    image: {
      src: "/solo-shows/intro.jpg",
      alt: "George Zacharopoulos solo show promotional photo",
    },
  },
  soloShows: [
    {
      title: "The Meaning of Life, Maybe",
      year: "2026",
      paragraphs: [
        "Brand new hour. After a year of sold-out shows, an O2 Arena gig, and a proposal, everything went to shit. A heartwarming, hilarious show about how joy survives when your world collapses.",
      ],
    },
    {
      title: "The Butterfly Effect",
      year: "2025",
      paragraphs: [
        "Greek Comedian of the Year show — sharp storytelling about cause, chaos, and accidentally becoming an adult.",
      ],
    },
    {
      title: "Greek in the Sheets",
      year: "2024",
      paragraphs: [
        "In 2024, I turned 40. It hit me like a ton of bricks as I have already been afraid of dying from a very young age. I realised all my life I have been avoiding getting older by trying to live with zero stress, next to no responsibilities and very spontaneously.",
        "That culminated in me getting detained in Australia at 1 am in the city centre on charges of terrorism and espionage.",
      ],
      image: {
        src: "/solo-shows/greek-in-the-sheets.jpg",
        alt: "George Zacharopoulos — Greek in the Sheets",
      },
      pressReviews: [
        {
          quote:
            "George remains one of the best comedians you'll see at the Fringe. Other comedians are clever, other comedians are funny. George is both.",
          stars: 4.5,
          source: "The Quintessential Review",
          href: "https://theqr.co.uk/2024/08/08/edfringe-review-2024-greek-comedian-of-the-year-greek-in-the-sheets-george-zacharopoulos/",
        },
        {
          quote: "Some comedians think they are legends. But George Zacharopoulos is the real deal.",
          stars: 5,
          source: "Theatre Vibe",
          href: "https://theatrevibe.co.uk/2024/08/20/review-just-the-tonic-legends-greek-in-the-sheets-edinburgh-fringe-2024/",
        },
      ],
      audienceReviews: [
        {
          author: "Basma",
          quote: "Really enjoyed this, highly recommend!",
        },
        {
          author: "Lisa Chappell",
          quote:
            "We've seen George three times and he just gets better over time. Hilarious (and true) reflections on life. This show is a real treat every year.",
        },
        {
          author: "Katie Marsden",
          quote:
            "George flyered us yesterday himself. He was very gentle in his approach. We gave him a chance and oh my, what a treat. This was an Edinburgh highlight. He should be full every night and not need to flyer himself. An astonishing show. We will come back next year!",
        },
        {
          author: "Michael Foster",
          quote:
            "I just saw George and came to create an account to say what a fantastic show all of us experienced today. He seems to be relatively unknown but many people in the room came because they had seen him before. George was absolutely fantastic. The applause at the end was deafening. We will definitely see him again. What a hidden gem, thank you.",
        },
      ],
    },
    {
      title: "50/50",
      year: "2024",
      paragraphs: [
        "This year I also decided to do a show called 50/50 — basically me doing stand-up for 30 minutes followed by improvisation based on audience suggestions.",
        "Very silly, really fun.",
      ],
      image: {
        src: "/solo-shows/fifty-fifty.jpg",
        alt: "George Zacharopoulos — 50/50",
      },
    },
    {
      title: "Wonderland",
      year: "2023",
      subtitle: "Also: The Right Swipe That Ruined My Life · Honeybadger",
      paragraphs: [
        "This show has two titles, depending on where it was performed. It appeared in Edinburgh Fringe as Wonderland, Melbourne Comedy Festival as Honeybadger, and Perth Comedy Festival as The Right Swipe That Ruined My Life.",
        "It is a wild, outlandish and yet 100% true story about falling in love with the wrong person.",
      ],
      accolade: "Top 50 best reviewed shows — British Comedy Guide, Edinburgh Fringe 2023",
      image: {
        src: "/solo-shows/wonderland.png",
        alt: "George Zacharopoulos — Wonderland Edinburgh Fringe poster",
      },
      pressReviews: [
        {
          quote:
            "Very funny, and utterly surprising. Go see Wonderland before it leaves town. It is, without question, one of the best hours of comedy on offer this August.",
          stars: 5,
          source: "The Quintessential Review",
          href: "https://theqr.co.uk/2023/08/25/edfringe-review-george-zacharopoulos-wonderland/",
        },
        {
          quote: "He delivers this with such a wicked sense of humour that you will ache from laughing so hard.",
          stars: 5,
          source: "The Reviews Hub",
          href: "https://www.thereviewshub.com/george-zacharopoulos-wonderland-edinburgh-fringe-2023pleasance-dome/",
        },
        {
          quote: "This is disarmingly honest, heart on sleeve, brilliant, funny story telling.",
          stars: 4,
          source: "One4Review",
          href: "https://one4review.co.uk/2023/08/george-zacharopoulos-wonderland-5/",
        },
      ],
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
    title: "Get in touch",
    body: "Bookings, press, or just saying hi — drop a line below.",
  },
  nav: [
    { label: "Gigs", href: "/shows/" },
    { label: "Solo shows", href: "/solo-shows/" },
    { label: "Press", href: "/press/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Bio", href: "/bio/" },
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
