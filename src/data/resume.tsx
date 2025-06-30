import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sandeep Guttula",
  initials: "DV",
  url: "https://dillion.io",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Software Engineer. I love building useful products, solving real-world problems, and helping people along the way. Always exploring the intersection of code, community, and impact.",
  summary:
    "At the start of my tech journey, I taught myself to code and quickly found myself building full-stack applications that solve real-world problems. Since then, I’ve worked as a software engineer on learning platforms and web apps, using everything from Node.js and React Native to Ruby on Rails and FastAPI. \n\n In 2024, I joined Auzmor to help scale their learning management system and previously contributed to InterviewBuddy’s platform, improving performance and user experience. Along the way, I’ve built projects like Donor Spot, a mobile app to connect blood donors, and experimented with AI chatbots and role-based systems just for fun.",
  avatarUrl: "/image.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Ruby",
    "React",
    "React Native",
    "Next.js",
    "Ruby on Rails",
    "Node.js",
    "Express.js",
    "Python",
    "Postgres",
    "Java",
    "GraphQL",
    "TailwindCSS",
    "Postman",
    "Figma",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sandeepguttula2002@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sandeep-guttula",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sandeep-guttula",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sandeep_0701",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Growstack",
      href: "https://www.growstack.ai/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/growstacklogo.png",
      start: "May 2025",
      end: "Present",
      description:
        "At Growstack, I’m primarily responsible for developing backend systems and AI agents that power the company’s core SaaS products. My work involves building RESTful APIs, integrating with AI models, managing scalable infrastructure, and maintaining performance-focused codebases. I collaborate closely with frontend developers and product teams to deliver seamless user experiences while ensuring backend reliability. I also contribute to architectural decisions, evaluate new technologies, and help optimize deployments for speed and resilience.",
    },
    {
      company: "Auzmor",
      badges: [],
      href: "https://auzmor.com/",
      location: "Hyderabad, India",
      title: "Backend Developer",
      logoUrl: "/auzmor.png",
      start: "July 2024",
      end: "March 2025",
      description:
        "As part of the Auzmor Learn product team, I worked on both backend and frontend features for a learning management system used by enterprise clients. I built responsive UIs with React and designed scalable APIs with Ruby on Rails. I was involved in optimizing MySQL queries to reduce load times and improve data fetch efficiency. I collaborated with cross-functional teams to design, implement, and test new features, ensuring production readiness and a smooth end-user experience across platforms.",
    },
    {
      company: "Auzmor",
      href: "https://auzmor.com/",
      badges: [],
      location: "Hyderabad, India",
      title: "Backend Developer (Intern)",
      logoUrl: "/auzmor.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "As an intern at Auzmor, I contributed to the development of their learning management system by building backend features using Ruby on Rails. I focused on creating RESTful APIs, optimizing database queries, and ensuring data integrity. I also assisted in frontend development with React, implementing responsive designs and user-friendly interfaces. My role involved collaborating with senior developers to understand best practices in software development and contributing to code reviews.",
    },
    {
      company: "InterviewBuddy",
      href: "https://interviewbuddy.net",
      badges: [],
      location: "Vizag, India",
      title: "Full Stack Developer (Intern)",
      logoUrl: "/intreviewbuddy.jpeg",
      start: "Feb 2024",
      end: "April 2024",
      description:
        "During my internship, I worked on maintaining and enhancing full-stack applications using Angular for the frontend and Express.js with GraphQL for the backend. I helped refactor inefficient API endpoints, integrated third-party services, and implemented clean database models using PostgreSQL. I also wrote unit and integration tests to maintain code quality and participated in code reviews, gaining experience in agile workflows and cross-team communication.",
    },
  ],
  education: [
    {
      school: "Aditya University",
      href: "https://adityauniversity.in/",
      degree: "Bachelor's Degree of Technology (B.Tech) in Computer Science",
      logoUrl: "/aditya.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Aditya Polytechnic College",
      href: "https://polytechnic.aec.edu.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/aditya.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "AES Dr.K R B M School",
      href: "http://www.andhraeducationsociety.com/Cmspage.aspx?Cid=Our250",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/AES.webp",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "ColorUpJS: Color Utility Library (Under Development)",
      href: "https://sandeep-1.gitbook.io/colorupjs",
      dates: "Jun 2025 - Jun 2025",
      active: true,
      description:
        "ColorUpJS is a modern, extensible TypeScript color utility library built for design systems, frontend apps, and theming engines. It supports advanced color conversions (HEX, RGB, HSL, HSV), color analysis (luminance, contrast), palette generation, accessibility tools, and CSS token exports. The architecture is modular and tree-shakable with a plugin-ready core, making it suitable for both lightweight web apps and full-scale design tooling.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Rollup",
        "Color Theory",
        "Accessibility (WCAG)",
        "Modular Architecture",
        "Testing Library",
        "ESLint",
        "Prettier"
      ],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/colorupjs",
          // icon: <Icons.package className="size-3" />,
        },
                {
          type: "Documentation",
          href: "https://sandeep-1.gitbook.io/colorupjs",
          // icon: <Icons.package className="size-3" />,
        },
      ],
      image: "/colorupjs.avif",
      video: "",
    },
    {
      title: "Donor Spot (Mobile App)",
      href: "https://github.com/sandeep-guttula/donor-spot-alpha",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "Donor Spot is a cross-platform mobile application that connects blood donors with people in urgent need. I developed the frontend using React Native and TypeScript to ensure a consistent and smooth mobile experience. On the backend, I built a Node.js and Express.js server connected to a MongoDB database, with Firebase integration for real-time updates and notifications. A map interface shows available donors nearby, making it easier to save lives with timely donations. The app uses a combination of REST APIs and GraphQL for flexible data flow.",
      technologies: [
        "React Native",
        "NativeWind",
        "TypeScript",
        "Node.js",
        "Express.js",
        "GraphQL",
        "Firebase",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/donorspot.avif",
      video: "",
    },
    {
      title: "Student Management System API",
      href: "https://github.com/sandeep-guttula/RubyOnRailsStudentEnrollmentSystemAPI",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "This API-based system was built using Ruby on Rails and Grape and is designed to streamline student enrollment, course assignments, and evaluations. It supports role-based authentication with three distinct user types: Admins who manage the system and user roles, Teachers who create and evaluate courses and tests, and Students who enroll in courses and take assessments. The backend handles data integrity, role logic, and grading workflows efficiently using PostgreSQL.",
      technologies: [
        "Ruby",
        "Ruby on Rails",
        "Grape",
        "MySQL",
        "REST APIs",
        "Postman",
      ],
      links: [
        // {
        //   type: "",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/sms.avif",
      video: "",
    },
    {
      title: "Store Rating Platform API",
      href: "https://github.com/sandeep-guttula/store-management-system-backend",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "A robust backend system that enables users to rate stores and provides role-based access for Admins, Store Owners, and general Users. Built with modern technologies for scalability, type safety, and secure authentication.",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Authentication",
        "Zod",
        "Role-Based Access Control (RBAC)",
      ],
      links: [],
      image: "/store.avif",
      video: "",
    },
    {
      title: "AI Chatbot (OpenAI)",
      href: "https://github.com/sandeep-guttula/ai-chat-bot",
      dates: "Dec 2023 - Dec 2023",
      active: true,
      description:
        "This project features a chatbot powered by OpenAI’s API, built using React.js for the frontend and Node.js for the backend. The chatbot supports natural language interactions and can be easily extended for customer support or educational purposes. This was a passion project that allowed me to explore LLM integrations, token management, and prompt engineering for AI-driven communication.",
      technologies: [
        "React.js",
        "Node.js",
        "OpenAI API",
        "TailwindCSS",
        "Shadcn UI",
        "TypeScript",
      ],
      links: [],
      image: "/openai.avif",
      video: "",
    }
  ],
  hackathons: [
    // {
    //   title: "",
    //   dates: "",
    //   location: "",
    //   description: "",
    //   image: "",
    //   win: "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "",
    //       icon: " ",
    //       href: "",
    //     },
    //   ],
    // }
  ],
  certifications: [
    {
      title: "AWS Cloud Foundations",
      subtitle: "Amazon Web Services",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMG6QtFiFWPugbhk_Exio8BSEfzAdjulSwlg&s",
      href: "",
      period: "2023",
      badges: ["Cloud"],
      description: "Covered core AWS services, architecture principles, and cloud security concepts.",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      subtitle: "Postman",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s",
      href: "",
      period: "2023",
      badges: ["API", "Postman"],
      description: "Certified in API development, documentation, testing, and automation using Postman.",
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals",
      subtitle: "Microsoft",
      logoUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      href: "",
      period: "2023",
      badges: ["Cloud", "Azure"],
      description: "Gained knowledge in cloud concepts, Azure services, governance, and pricing models.",
    },
    {
      title: "AZ-104: Microsoft Azure Administrator",
      subtitle: "Microsoft",
      logoUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      href: "",
      period: "2024",
      badges: ["Azure", "Cloud Ops"],
      description: "Validated skills in managing Azure resources, identities, storage, and virtual networks.",
    },
    {
      title: "Foundations of UX Design",
      subtitle: "Google",
      logoUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1",
      href: "",
      period: "2022",
      badges: ["UX", "Design"],
      description: "Explored user research, wireframing, prototyping, and accessibility in UX design.",
    },
  ],
  achievements: [
    {
      title: "Google India DSC Co-Lead",
      subtitle: "Developer Student Clubs",
      logoUrl: "https://miro.medium.com/v2/resize:fit:1185/1*8J1TPCS6dLEYG9W-XJyr-Q.jpeg",
      period: "2022-2023",
      badges: ["Leadership", "Community"],
      description: "Orchestrated and delivered 11+ tech seminars, mentoring over 800 students on development and cloud skills.",
      href: ""
    },
    {
      title: "Hacktoberfest Contributor",
      subtitle: "DigitalOcean",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sklvmSTiWQo89AIt2IEqRizfdmeApWwSxA&s",
      period: "2023",
      badges: ["Open Source", "GitHub"],
      description: "Earned a Hacktoberfest badge for contributing to open-source repositories on GitHub.",
      href: ""

    },
    {
      title: "Java Programming Mentor",
      subtitle: "Skill Active",
      logoUrl: "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png",
      period: "2022",
      badges: ["Mentorship", "Java"],
      description: "Created and mentored a Java Programming course on Skill Active platform for aspiring developers.",
      href: ""

    }
  ]
} as const;
