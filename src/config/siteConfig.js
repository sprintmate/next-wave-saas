export const siteConfig = {
  companyName: "Nextwave SaaSPrivate Limited",
  tagline: "Your Vision. Our SaaS. Limitless Possibilities.",
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ],
  hero: {
    title: "Custom SaaS Solutions",
    subtitle: "We turn your ideas into scalable, secure, production-ready products.",
    description: "From MVP to enterprise-scale applications, we deliver exceptional SaaS experiences with cutting-edge technology and refined user interfaces.",
    ctaText: "Let's Build Together",
    ctaSecondary: "View Our Work"
  },
  about: {
    title: "Why Choose Nextwave?",
    subtitle: "We combine technical excellence with business acumen to deliver solutions that scale.",
    features: [
      {
        title: "Scalable Architectures",
        description: "Built for growth with modern cloud-native principles"
      },
      {
        title: "Cloud-Native Deployment",
        description: "Seamless deployment on AWS, Azure, and Google Cloud"
      },
      {
        title: "Fast MVP Delivery",
        description: "From concept to market in weeks, not months"
      },
      {
        title: "Backend & API Excellence",
        description: "Robust, secure APIs that power your business"
      }
    ]
  },
  services: [
    {
      title: "Web App Development",
      description: "Elegant, fast, and scalable web apps built using React, Java, Spring Boot.",
      icon: "globe",
      features: ["React & Next.js", "Spring Boot", "PostgreSQL", "AWS Deployment"]
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile apps with a native feel and performance.",
      icon: "smartphone",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Real-time Sync"]
    },
    {
      title: "SaaS MVP for Startups",
      description: "Launch your idea quickly and iterate with confidence.",
      icon: "rocket",
      features: ["Rapid Prototyping", "User Analytics", "Payment Integration", "Scalable Infrastructure"]
    },
    {
      title: "Custom APIs & Backends",
      description: "Secure, scalable APIs using Java, Go, Kafka, Redis, and more.",
      icon: "server",
      features: ["RESTful APIs", "Microservices", "Real-time Data", "Security First"]
    }
  ],
  portfolio: [
    // {
    //   name: "DocZone",
    //   description: "A comprehensive healthcare SaaS platform for online prescriptions, clinic management, and patient engagement.",
    //   tech: ["Spring Boot", "React", "AWS", "PostgreSQL"],
    //   image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   category: "Healthcare SaaS"
    // },
    // {
    //   name: "FinanceFlow",
    //   description: "Modern financial management platform with real-time analytics and automated reporting.",
    //   tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    //   image: "https://images.pexels.com/photos/6772083/pexels-photo-6772083.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   category: "FinTech"
    // },
    {
      name: "Code4Contract",
      description: "Freelancers Market place to connect Buyers and Sellers.",
      tech: ["Spring Boot", "React", "AWS", "PostgreSQL"],
      image: "https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_1280.png",
      category: "Marketplace"
    }
  ],
  testimonials: [
    {
      name: "Ankith",
      position: "Freelancer",
      company: "Self Employed",
      quote: "Nextwave gave us a production-ready MVP in weeks with stunning UI. Their attention to detail and technical expertise exceeded our expectations."
    }
  ],
  contact: {
    title: "Ready to Build Something Amazing?",
    subtitle: "Let's discuss your project and create something extraordinary together.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "company", label: "Company Name", type: "text", required: false },
      { name: "projectBrief", label: "Project Brief", type: "textarea", required: true },
      { name: "budget", label: "Budget Range", type: "select", required: true, options: [
        "Under $10K", "$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"
      ]},
      { name: "timeline", label: "Timeline", type: "select", required: true, options: [
        "ASAP", "1-2 months", "3-6 months", "6+ months"
      ]}
    ],
    whatsapp: "https://wa.me/919643156859",
    email: "info@nextwavesaas.tech",
    phone: "+91 9643156859"
  },
  footer: {
    description: "Building the future of SaaS, one solution at a time.",
    quickLinks: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      // { name: "Cookie Policy", href: "/cookies" }
    ],
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/nextwave-saas-private-limited", icon: "linkedin" },
      // { name: "Twitter", href: "#", icon: "twitter" },
      // { name: "GitHub", href: "#", icon: "github" }
    ]
  }
};