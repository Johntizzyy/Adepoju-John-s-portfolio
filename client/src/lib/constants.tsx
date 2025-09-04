import lorins from "../assets/lorins.png";
import coinview from "../assets/coinview.png";
import musicFinder from "../assets/musicfinder.png";
import portfolio from "../assets/portfolio.png"

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/+23437517462",
  linkedin: "https://linkedin.com/in/adepojujohn",
  github: "https://github.com/johntizzyy",
  twitter: "https://twitter.com/johntizzy5",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Creative Hub",
    category: "Portfolio Website",
    description: "Minimalist portfolio website with smooth animations and modern design.",
    image: portfolio,
    link: "#",
  },
  {
    id: 2,
    title: "CoinView",
    category:"Finance / Crypto Dashboard",
    description: "A web application that provides real-time cryptocurrency prices, market trends, and portfolio tracking using React and crypto APIs.",
    image: coinview,
    link: "#",
  },
  {
    id: 3,
    title: "Lorins Consults",
    category: "React website",
    description: "A professional website for a consulting firm built with React and TailwindCSS.",
    image: lorins,
    link: "#",
  },
    {
    id: 4,
    title: "MusicFinder",
    category: "Music Streanming",
    description: "A music streaming app built with the iTunes API, allowing users to play 30-second previews of tracks and save their favorite songs.",
    image: musicFinder,
    link: "#",
  },

  
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "TechStart Inc.",
    content: "Adepoju delivered an exceptional React application for our startup. His full-stack expertise and attention to detail made the entire process seamless. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 2,
    name: "Sarah Williams",
    company: "Commerce Plus",
    content: "Working with Adepoju was fantastic. He built our e-commerce platform with modern technologies and delivered exactly what we envisioned. Professional and reliable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 3,
    name: "David Chen",
    company: "DataFlow Systems",
    content: "Adepoju's development skills are outstanding. He created a complex dashboard application with beautiful UI and robust backend. Exceeded our expectations!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 4,
    name: "James Rodriguez",
    company: "Creative Studio",
    content: "The portfolio website Adepoju created for our agency is simply stunning. Modern design, smooth animations, and perfect performance. Amazing work!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "Innovation Labs",
    content: "Adepoju's full-stack development expertise helped us launch our product faster than expected. Clean code, great communication, and professional delivery.",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    id: 6,
    name: "Robert Martinez",
    company: "Digital Solutions",
    content: "Outstanding React development work! Adepoju transformed our outdated system into a modern, user-friendly application. Highly professional and skilled.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
];
export const SERVICES = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Modern, responsive user interfaces built with React, TailwindCSS, and the latest web technologies for exceptional user experiences.",
    link: "#work",
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, databases, and APIs that power your applications with reliability and scalability.",
    link: "#work",
  },
  {
    number: "03",
    title: "Full-Stack Solutions",
    description: "Complete web applications from concept to deployment, integrating modern frontend and backend technologies seamlessly.",
    link: "#work",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Let's Connect",
    subtitle: "Discovery Call",
    description: "Let's start with a conversation to understand your vision and goals. Together, we'll explore your technical requirements, preferred technologies, and discuss how modern web development can solve your challenges and bring your ideas to life.",
    duration: "2 Hours",
    features: [
      "We get to know each other better",
      "Determine technical requirements",
      "Understand your project goals",
    ],
  },
  {
    number: "02",
    title: "We Need a Plan",
    subtitle: "Concept & Strategy",
    description: "Together, we develop a technical strategy that combines your goals with modern web development best practices. I create wireframes and an interactive prototype using the latest tools and frameworks.",
    duration: "2 Weeks",
    features: [
      "Technical Architecture",
      "Wireframes & User Flow",
      "Interactive Prototype",
    ],
  },
  {
    number: "03",
    title: "Some Magic",
    subtitle: "UI/UX Design",
    description: "Now comes the magic. Based on the technical concept, I create a high-end user interface design perfectly tailored to your brand. A modern design that sets you apart from competition and provides excellent user experience.",
    duration: "2 Weeks",
    features: [
      "Modern UI design with React components",
      "TailwindCSS styling system",
      "Interactive design prototype",
    ],
  },
  {
    number: "04",
    title: "More Magic",
    subtitle: "Development",
    description: "In this step, I bring your design to life with clean, modern code. You'll receive a custom-built website using React, TailwindCSS, and full-stack architecture. Smooth animations and interactions will set you apart from the competition.",
    duration: "3 Weeks",
    features: [
      "React/Next.js development",
      "Backend API integration",
      "Database & hosting setup",
    ],
  },
  {
    number: "05",
    title: "Ready to Go",
    subtitle: "Deployment & Training",
    description: "I'll deploy your website and provide personal training on how to manage and update your content. You'll receive documentation and video tutorials so you can make changes confidently without needing a developer.",
    duration: "1 Week",
    features: [
      "Production deployment",
      "Personal training session",
      "Documentation & tutorials",
    ],
  },
];
