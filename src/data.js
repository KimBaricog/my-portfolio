// Edit this file to update your portfolio. No other file needs to change.
// Put images in /public/images and reference them like "/images/csulends.png".

export const profile = {
  name: "Kim Baricog",
  role: "",
  headline: "Websites that work on every phone.",
  intro:
    "I build fast, mobile-friendly websites and web apps for small businesses and student organizations.",
  photo:
    "https://res.cloudinary.com/dgwmeeszw/image/upload/v1794642092/DSC03859_bovvze.jpg", // e.g. "/images/me.jpg"
  email: "kimbaricog4@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/KimBaricog" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kim-baricog-aba590393/",
    },
    { label: "Facebook", href: "https://www.facebook.com/kim.baricog.2025" },
  ],
};

export const services = [
  {
    title: "One-page websites",
    text: "A clear page with your services, photos, and a button to message you.",
  },
  {
    title: "Business websites",
    text: "Home, services, about, and a contact form, set up with your own domain.",
  },
  {
    title: "Custom web apps",
    text: "Logins, databases, and dashboards for tools your business or school group needs.",
  },
];

export const skills = [
  "React",
  "React Native",
  "JavaScript",
  "C",
  "HTML & CSS",
  "Supabase",
  "Vercel",
];

// To add a project, copy one block below and fill it in.
export const projects = [
  {
    title: "CSULends",
    description:
      "A campus lending app where Caraga State University students lend and borrow items like calculators, rackets, and books, with an optional small daily fee. Works on phones with a bottom navigation bar.",
    tags: ["React", "Supabase", "Vercel"],
    image:
      "https://res.cloudinary.com/dgwmeeszw/image/upload/v1794641942/Screenshot_2026-11-14_153740_vgaoeq.png", // e.g. "/images/csulends.png"
    live: "https://csulends.vercel.app/",
    repo: "",
  },

  {
    title: "AWOdictionary",
    description:
      "A simple and fast mobile dictionary app built with React Native and Expo. It lets users search English words and instantly get meanings, phonetics, examples, and pronunciation audio.",
    tags: ["React Native", "Expo"],
    image:
      "https://res.cloudinary.com/dgwmeeszw/image/upload/v1794642799/ChatGPT_Image_May_11_2026_10_49_56_PM_t7atb7.png", // e.g. "/images/csulends.png"
    live: "",
    repo: "https://github.com/KimBaricog/awo-dictionary",
  },
];
