export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  totalExperience?: string;
  resume?: string;
  bio1?: string;
  bio2?: string;
  bio?: string;
  tagline: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  portfolio?: string;
}


export interface Experience {
  title?: string;
  company: string;
  location: string;
  logo: string;
  link: string;
  totalPeriod:string;
  roles: {
    title: string;
    period: string;
    description: string[];
    technologies: string[];
  }[];
}
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Skill {
  name?: string;
  score?: number;
  badgeLight?: string;
  badgeDark?: string;
  category: string;
  items?: string[];
}

export interface Certs {
  degree: string;
  institution: string;
  period?: string;
  credentials?: string;
  gpa?: string;
}

export interface CurrentWorkingOn {
  title: string;
  description: string;
  tags: string[];
}

export const certificates: Certs[] = [
{
  degree:"Certificate of Appreciation",
  institution:"Intel Vietnam",
  credentials:"Vision-Guard: Optimizing AI models to speed up training process",
  period:"2025"

}
];



export const personalInfo: PersonalInfo = {
  name: "Dinh Xuan Minh",
  title: "Final-year Software Engineering Student | Full-stack Developer",
  email: "minhdinh281.work@gmail.com",
  phone: "+84 704 510 688",
  location: "Ho Chi Minh, Viet Nam",
  profileImage: "ProfileImage.PNG",
  totalExperience: "Intern",
  resume:"CV.pdf",
  bio1: "Final-year Software Engineering student at RMIT University with hands-on experience in full-stack web development, mobile apps, and software testing.",
  bio2: "Built team projects using React, Spring Boot, MongoDB, Redis, Kafka, Docker, and Git, with practical QA/testing experience using Postman, Katalon, JUnit 5, Jira, and Swagger.",
  tagline: "Building practical software with strong engineering and QA foundations"
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/kakenpi",
  linkedin: "https://linkedin.com/in/minh-dinh-375823304/",
  
  
};

export const experiences: Experience[] = [{
    title: "University Project Team Member",
    company: "RMIT University",
    location: "Ho Chi Minh City, Viet Nam",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/RMIT_University_Logo.svg",
    link: "https://www.rmit.edu.vn/",
    totalPeriod: "2025 - 2026",
    roles: [{
      title: "Backend Developer - DEVision (Job Application Platform)",
      period: "Nov 2025 - Jan 2026",
      description: [
        "Developed backend services using Spring Boot and MongoDB for a job application platform.",
        "Designed system data model and C4 diagrams for modular monolith architecture.",
        "Integrated Redis caching and Kafka asynchronous communication across subsystems.",
        "Contributed to REST API development and Spring Boot security configuration.",
        "Collaborated in a team of 5 using GitHub, Agile task division, and sprint reviews."
      ],
      technologies: ["Java", "Spring Boot", "React", "MongoDB", "Redis", "Kafka", "Google OAuth"]
    }]

  },
  {
    title: "Capstone Team Lead",
    company: "RMIT University x Intel Vietnam",
    location: "Ho Chi Minh City, Viet Nam",
    totalPeriod: "2025",
    link: "https://rmitvn-showcase.com/uiia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/RMIT_University_Logo.svg",
    roles: [{
      title: "Vision-Guard - AI-based Die Defect Detection",
      period: "Feb 2025 - Aug 2025",
      description: [
        "Led dataset generation and annotation for semiconductor die defect inspection.",
        "Trained, tested, and evaluated multi-class computer vision models on Intel Geti.",
        "Defined defect classes and labeling strategy for model quality and consistency.",
        "Supported model integration using Intel Geti SDK for a web-based inspection system.",
        "Collaborated with Intel supervisors and teammates to deliver a working prototype."
      ],
      technologies: ["Python", "React", "Intel Geti", "Computer Vision"]
    }]

  }
]

export const educationList: Education[] = [
  {
    degree: "Bachelor of Software Engineering (Honours)",
    institution: "RMIT University",
    period: "Expected 2027",
    description: "Final-year Software Engineering student with focus on full-stack development, software testing, and system design."
  }
];

export const projects: Project[] = [
  {
    name: "DEVision - Job Application Web Platform",
    description: "Team-built job application platform with backend services, modular architecture, and secure API integration.",
    technologies: ["React", "Spring Boot", "MongoDB", "Redis", "Kafka", "Google OAuth", "Resend"],
    github: "https://github.com/ISYS3461-2025C-SonTinh-DEVision/JobApplicant.git",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Vision-Guard - AI Die Defect Detection",
    description: "Capstone project delivering an AI-assisted die defect inspection workflow from dataset preparation to model validation and integration.",
    technologies: ["Python", "React", "Intel Geti", "Computer Vision"],
    demo: "https://www.rmitvn-showcase.com/uiia",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const skills: Skill[] = [
  // Languages
  {
    name: "Java",
    score: 8,
    badgeLight: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    badgeDark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Languages"
  },
  {
    name: "JavaScript",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/javascript/F7DF1E?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/javascript/F7DF1E?viewbox=auto",
    category: "Languages"
  },
  {
    name: "Python",
    score: 5,
    badgeLight: "https://cdn.simpleicons.org/python/3776AB?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/python/4B8BBE?viewbox=auto",
    category: "Languages"
  },
  {
    name: "C",
    score: 5,
    badgeLight: "https://cdn.simpleicons.org/c/A8B9CC?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/c/A8B9CC?viewbox=auto",
    category: "Languages"
  },

  // Frameworks
  {
    name: "Spring Boot",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/springboot/6DB33F?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/springboot/68BC45?viewbox=auto",
    category: "Frameworks"
  },
  {
    name: "React",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/react/61DAFB?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/react/61DAFB?viewbox=auto",
    category: "Frameworks"
  },
  {
    name: "Node.js",
    score: 5,
    badgeLight: "https://cdn.simpleicons.org/nodedotjs/339933?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/nodedotjs/68CC44?viewbox=auto",
    category: "Frameworks"
  },
  {
    name: "Next.js",
    score: 5,
    badgeLight: "https://cdn.simpleicons.org/nextdotjs/000000?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/nextdotjs/FFFFFF?viewbox=auto",
    category: "Frameworks"
  },

  // Databases & Messaging
  {
    name: "MongoDB",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/mongodb/47A248?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/mongodb/4DB33D?viewbox=auto",
    category: "Databases & Messaging"
  },
  {
    name: "PostgreSQL (Neon)",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/postgresql/4169E1?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/postgresql/336791?viewbox=auto",
    category: "Databases & Messaging"
  },
  {
    name: "Redis",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/redis/DC382D?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/redis/DC382D?viewbox=auto",
    category: "Databases & Messaging"
  },
  {
    name: "Kafka",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/apachekafka/000000?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/apachekafka/FFFFFF?viewbox=auto",
    category: "Databases & Messaging"
  },

  // Cloud & Deployment
  {
    name: "Docker",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/docker/2496ED?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/docker/2496ED?viewbox=auto",
    category: "Cloud & Deployment"
  },
  {
    name: "AWS Elastic Beanstalk",
    score: 6,
    badgeLight: "https://icon.icepanel.io/AWS/svg/Compute/Elastic-Beanstalk.svg",
    badgeDark: "https://icon.icepanel.io/AWS/svg/Compute/Elastic-Beanstalk.svg",
    category: "Cloud & Deployment"
  },
  {
    name: "Amazon ECR",
    score: 6,
    badgeLight: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Registry.svg",
    badgeDark: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Registry.svg",
    category: "Cloud & Deployment"
  },
  {
    name: "Cloudflare Pages",
    score: 6,
    badgeLight: "https://cdn.simpleicons.org/cloudflare/F38020?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/cloudflare/F38020?viewbox=auto",
    category: "Cloud & Deployment"
  },
  {
    name: "Cloudflare Tunnel",
    score: 6,
    badgeLight: "https://cdn.simpleicons.org/cloudflare/F38020?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/cloudflare/F38020?viewbox=auto",
    category: "Cloud & Deployment"
  },

  // Tools & Practices
  {
    name: "Git/GitHub",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/github/181717?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/github/FFFFFF?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Linux",
    score: 6,
    badgeLight: "https://cdn.simpleicons.org/linux/FCC624?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/linux/FCC624?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "REST APIs",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/postman/FF6C37?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/postman/FF6C37?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Postman",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/postman/FF6C37?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/postman/FF6C37?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Katalon",
    score: 6,
    badgeLight: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Katalon-logo-vector.svg/960px-Katalon-logo-vector.svg.png",
    badgeDark: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Katalon-logo-vector.svg/960px-Katalon-logo-vector.svg.png",
    category: "Tools & Practices"
  },
  {
    name: "JUnit 5",
    score: 6,
    badgeLight: "https://cdn.simpleicons.org/junit5/25A162?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/junit5/25A162?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Jira",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/jira/0052CC?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/jira/2684FF?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Swagger",
    score: 7,
    badgeLight: "https://cdn.simpleicons.org/swagger/85EA2D?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/swagger/85EA2D?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Figma",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/figma/F24E1E?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/figma/F24E1E?viewbox=auto",
    category: "Tools & Practices"
  },
  {
    name: "Technical Documentation",
    score: 8,
    badgeLight: "https://cdn.simpleicons.org/readthedocs/8CA1AF?viewbox=auto",
    badgeDark: "https://cdn.simpleicons.org/readthedocs/8CA1AF?viewbox=auto",
    category: "Tools & Practices"
  }
]

export const analytics = {
  gtagId: "G-XXXXXXXXXX" // Replace with your actual Google Analytics ID
};

export const currentWorkingOn: CurrentWorkingOn = {
  title: "Sontra Retreat website",
  description: "Sontra Retreat website is a landing page for a restaurant located in Da Nang, Viet Nam.",
  tags: ["WordPress", "Elementor", "Custom CSS", "Custom JavaScript"]
};


export const terminalCommands = {
  help: [
    'Available commands:',
    '  help       - Show this help message',
    '  clear      - Clear terminal',
    '  about      - Open About section',
    '  work       - Open Work Experience',
    '  experience - Open Work Experience',
    '  education  - Open Education section',
    '  projects   - Open Projects section',
    '  skills     - Open Skills section',
    '  contact    - Open Contact section',
    '  resume     - Open Resume',
    '  whoami     - Show user info',
    '  ls         - List available files',
    '  pwd        - Show current directory',
    '  date       - Show current date',
    '  echo <msg> - Echo a message'
  ],
  about: ['Opening About.java...'],
  work: ['Opening Work.css...'],
  experience: ['Opening Work.css...'],
  education: ['Opening education.yml...'],
  projects: ['Opening projects.ts...'],
  skills: ['Opening skills.json...'],
  contact: ['Opening Contact.html...'],
  resume: ['Opening resume.pdf...'],
  whoami: ['dev@portfolio:~$ Your NAME - Developer'],
  ls: [
    'About.java',
    'Work.css',
    'education.yml',
    'projects.ts',
    'skills.json',
    'Contact.html',
    'resume.pdf'
  ],
  pwd: ['/home/dev/portfolio'],
  date: [new Date().toString()]
};

