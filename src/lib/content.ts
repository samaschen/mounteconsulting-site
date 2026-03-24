/** Site copy sourced from mounteconsulting.com (home + about). Global SEO defaults live in `src/lib/seo.ts`. */

export const home = {
  hero: {
    titleBrand: "MountE Consulting",
    titleTagline: "Adaptable Solutions, Steadfast Results.",
    subtitle: "Transform your business with Data-Driven solutions",
    ctaLearnMore: "Learn More",
    /** Full-bleed background (~3840px wide). Unsplash License — replace with your own asset anytime. */
    backgroundSrc: "/images/backgrounds/hero-mountains.jpg",
  },
  whyMountE: {
    heading: "Why MountE",
    body: "At MountE Consulting, we believe that data is the key to unlocking business potential. We offer a wide range of data-centered services including Data Science, Low-code/No-code Platform Building, and Marketing Optimization. Our team of experts will work with you to develop customized solutions that meet your unique needs. Click below to learn more about our services.",
    ctaOurServices: "Our Services",
  },
  clients: {
    heading: "Our Happy Clients",
    /** Logos live in `public/images/clients/`. */
    items: [
      {
        href: "https://www.glassdoor.com/",
        label: "Glassdoor",
        imageSrc: "/images/clients/glassdoor.png",
      },
      {
        href: "https://www.ziffdavis.com/",
        label: "Ziff Davis",
        imageSrc: "/images/clients/ziff-davis.png",
      },
      {
        href: "https://www.uniuni.com/",
        label: "UniUni",
        imageSrc: "/images/clients/uniuni.png",
      },
      {
        href: "https://www.acqu.co/",
        label: "acqu.co",
        imageSrc: "/images/clients/acquco.png",
      },
      {
        href: "https://www.shippie.ca/",
        label: "Shippie",
        imageSrc: "/images/clients/shippie.png",
      },
      {
        href: "https://every-rate.vercel.app/",
        label: "every-rate.vercel.app",
        imageSrc: "/images/clients/everyrate.png",
      },
      {
        href: "https://getsmartrecover.com/",
        label: "getsmartrecover.com",
        imageSrc: "/images/clients/smartrecover.png",
      },
      {
        href: "https://www.linkedin.com/company/japancool/",
        label: "Japan Cool",
        imageSrc: "/images/clients/japancool.png",
      },
      {
        href: "https://www.freightclarity.com/",
        label: "Freight Clarity",
        imageSrc: "/images/clients/freight-clarity.png",
      },
    ] as const,
  },
  /**
   * The live Wix site shows a slideshow with 8 slides; only slide 1 is present in the server HTML.
   * Add more `{ quote, name, role }` objects here (paste from your Wix editor) to match them.
   */
  testimonials: [
    {
      quote:
        "MountE engaged with us to help us with migrating an existing Internal Tooling platform for performing content moderation activities and actions. Our company collects millions of pieces of user-generated content each year, and moderating that content is critical to the mission and success of the company.",
      name: "Nick Boeka",
      role: "Director, ML Knowledge Engineering, Glassdoor",
    },
    {
      quote:
        "Working with RC has been a game-changer for our team. We engaged him to enhance our internal management tool using low code/no code techniques, and he exceeded expectations by delivering early and with excellent results. His fresh ideas for user experience, strong product sense, and UI design elevated the project. RC quickly understood our business and data, identifying untapped opportunities for growth—beyond the original scope. He integrated seamlessly with our team, and we're excited to continue working with him.",
      name: "Gabi Swain",
      role: "Sr. Tech Product Manager, TDS Gift Cards (Ziff Davis Group)",
    },
    {
      quote:
        "RC supported our Retail Product team in building and migrating multiple internal applications using Retool. He ramped up quickly with minimal guidance, demonstrated strong technical expertise, and communicated proactively to ensure clarity and efficiency. Beyond executing requirements, RC took initiative to suggest meaningful improvements to our existing systems. He was a reliable and highly effective partner to work with.",
      name: "Marc Caballero",
      role: "PM of Operations Intelligence, UniUni",
    },
    {
      quote:
        "Quickly understood the business needs and picked up our tech stack. Solid Data Engineering knowledge and efficient communication strategy to clear roadblocks in projects.",
      name: "Paul Li",
      role: "Chief Data Officer, Acquco",
    },
    {
      quote:
        "We hired RC to execute on a software project to revamp internal admin tools, and migrate them to Retool. RC is a capable developer, and did everything we asked of him. His work was always completed to a very high standard, and once finished he was proactive in seeking out new tasks. RC is a clear communicator, and we wouldn't hesitate to hire him again.",
      name: "Mike Cialowitz",
      role: "Senior Director of Engineering, Glassdoor",
    },
    {
      quote:
        "Excellent communication, really brilliant work, took time to really understand the project parameters so appropriate expectations could be set. Extremely trustworthy and talented. Highly recommend.",
      name: "Jade Samadi",
      role: "Founder, SmartRecovero",
    },
    {
      quote:
        "RC has been a pleasure to work with. He quickly grasped the project parameters and scope and did a great job setting appropriate expectations and delivering on time and within budget. He is an excellent communicator, and we wouldn't hesitate to work with him again or recommend him to others.",
      name: "Josh Nelson",
      role: "Co-Founder, Freight Clarity",
    },
    {
      quote:
        "MountE's help came at just the right time for us. Their work on the computer vision prototype was a game-changer, offering crucial insights and guiding our strategic investments in this area. Thanks to them, we've made great strides. We're really looking forward to more projects with their team and the huge benefits they bring to the table.",
      name: "Sharif Elshinnawi",
      role: "Founder, JapanCool",
    },
  ] as const,
  services: {
    heading: "Our Services",
    items: [
      {
        title: "Data Science",
        body: "As the foundational division at MountE, our Data Science services are central to how we deliver impact. We provide tailored solutions across the full data lifecycle—including Machine Learning, Computer Vision, Data Engineering, and Business Intelligence—so teams can move from raw data to reliable insight. We work with stakeholders to interpret results and translate them into action, helping organizations harness their data with rigor and enabling informed decisions and sustainable growth.",
        imageSrc:
          "https://static.wixstatic.com/media/2eb6b5946645496a95e05bc7e87386f4.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01/2eb6b5946645496a95e05bc7e87386f4.jpg",
        imageAlt: "Lake and mountains — Data Science",
      },
      {
        title: "Low code/No code",
        body: "The implementation of our Low Code/No Code platform building services, among our recently established ventures, has yielded significant advantages in facilitating streamlined internal management for our esteemed clientele. Leveraging intuitive frameworks and user-friendly toolsets, businesses are empowered to optimize various internal processes, encompassing KPI tracking, content moderation, CRM, and day-to-day operations, with unparalleled efficiency.",
        imageSrc:
          "https://static.wixstatic.com/media/11062b_8e1f8dd5083c44d99b6415326674a662~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01/11062b_8e1f8dd5083c44d99b6415326674a662~mv2.jpeg",
        imageAlt: "Mountain reflection — Low code / No code",
      },
      {
        title: "Marketing Optimization",
        body: "MountE offers marketing optimization solutions tailored to strengthen your competitive edge in dynamic markets. We use Google Analytics (GA) and Google Tag Manager (GTM) to define, collect, and monitor the user behaviors that matter for your funnel and campaigns. Through Incrementality Testing and Marketing Mix Modeling (MMM), we analyze spend and performance end to end so you can refine investments and improve returns with confidence.",
        imageSrc:
          "https://static.wixstatic.com/media/45d10e_1cb62e29f2374d90a3d318d7bed48d77~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01/45d10e_1cb62e29f2374d90a3d318d7bed48d77~mv2.jpg",
        imageAlt: "Marketing and landscape — Marketing Optimization",
      },
    ] as const,
  },
  contact: {
    heading: "Contact us to learn more !",
    hint: "We usually respond within one business day.",
    thanks: "Thanks for submitting!",
    send: "Send Message",
    placeholders: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Type your message here...",
    },
  },
} as const;

export const about = {
  title: "About MountE Consulting",
  metaDescription:
    "At MountE Consulting, we help both enterprise and individual clients who are looking to make data-driven decisions. Our clients come from a variety of industries including E-commerce, technology, retail, logistics, entertainment, sports, and more. We work closely with our clients to understand their unique needs and provide customized solutions to help them achieve their goals.",
  sections: [
    {
      heading: "Who We Help",
      bodyWithBold: {
        before:
          "At MountE Consulting, we help both enterprise and individual clients who are looking to make data-driven decisions. Our clients come from a variety of industries including ",
        bold: "E-commerce, technology, retail, logistics, entertainment, sports",
        after:
          ", and more. We work closely with our clients to understand their unique needs and provide customized solutions to help them achieve their goals.",
      },
    },
    {
      heading: "How We Do It",
      body: "MountE Consulting follows a rigorous process to ensure that our clients get the best possible results. We start by understanding our client's needs and goals. We use various kinds of tools and algorithms in different services based on the situation. We work with our clients to interpret the results and develop actionable insights. Finally, we help our clients implement these insights to drive business growth.",
    },
    {
      heading: "What's in It for You",
      body: "We are committed to helping our clients succeed. We provide customized solutions that are tailored to meet our client's unique needs. Our team of experts has years of experience in the field and is constantly updating their skills and knowledge to stay ahead of the game. When you work with us, you can expect high-quality service and measurable results.",
    },
    {
      heading: "Our Background",
      bodyWithBold: {
        before: "At MountE Consulting, we have a team of experts with years of experience in the fields of ",
        bold: "data science, software engineering, marketing analytics, machine learning, computer vision, and business analytics",
        after:
          ". Our team members hold degrees in computer science, data science, statistics, and other related fields.",
      },
    },
  ] as const,
  founder: {
    heading: "Founder Story",
    imageSrc: "/images/about/founder.png",
    imageAlt: "RC, founder of MountE Consulting",
    paragraphs: [
      "RC is a seasoned data professional with over 9 years of experience in the field, demonstrating a fervent commitment to leveraging data to tackle intricate business challenges. He is adept at forging valuable connections through strategic networking and insightful interviews, culminating in the establishment of MountE.",
      "Having earned his degree in Applied Statistics from the University of Toronto, RC has cultivated a deep and comprehensive understanding of statistical theory, which has become a cornerstone of his professional pursuits. His academic background has provided him with the analytical tools necessary to excel in data-driven decision-making, a skill he has continuously refined throughout his career. Now, as an active MBA student at the prestigious Rotman School of Management, University of Toronto, RC is expanding his expertise in business management. This advanced education is enabling him to blend his technical knowledge with strategic leadership skills, preparing him to take on complex challenges in today’s dynamic business environment.",
      "Despite his extensive tenure in the workforce, RC remains deeply committed to advancing his academic pursuits. His notable achievements include co-authoring a paper in the esteemed Journal of Sports Science in 2023 and receiving an esteemed invitation as a guest lecturer at the University of California, San Francisco (UCSF) in 2024. Furthermore, he actively contributes as a data mentor across three prominent online learning platforms. RC's exceptional accomplishments underscore his exceptional dedication and expertise, enriching MountE's clientele with unparalleled opportunities for growth and innovation.",
    ] as const,
  },
} as const;
