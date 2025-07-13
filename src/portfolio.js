import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Karim Hassan",
  title: "Hi I'm Karim",
  subTitle: emoji(
    "I’m a software engineer with a deep passion for technology and a constant drive to learn and grow. I love building thoughtful, reliable tools that solve real problems. Whether it's a full-stack platform or a developer tool, I treat every project as a chance to create meaningful software."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/codingwithkarim",
  linkedin: "https://www.linkedin.com/in/karimahassan",
  gmail: "karimhassan82@gmail.com",
  youtube: "https://www.youtube.com/@techbykhezzy",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Software Engineer passionate about building secure, impactful software and continuously learning to improve.",

  skills: [
    emoji("💻 Built secure, scalable full-stack apps using Go, C#/.NET, Node.js, and modern frontend frameworks."),
    emoji("🔐 Designed privacy-first systems with end-to-end encryption, zero-knowledge models, and robust auth flows."),
    emoji("📡 Developed RESTful APIs, WebSocket services, and microservices supporting real-time tools and platforms."),
    emoji("🛠️ Managed infrastructure using Docker, NGINX, and Linux; deployed to AWS EC2, RDS, and cloud-native environments."),
    emoji("🧠 Integrated custom and third-party LLMs (OpenAI, Claude, Gemini, Groq) via a unified agent-driven framework."),
    emoji("📈 Refactored and modernized legacy systems to boost performance, reliability, and scalability in fintech stacks.")
  ],

  softwareSkills: [
    {
      group: "Languages",
      skills: [
        { skillName: "Javascript / Typescript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "C# / .NET", fontAwesomeClassname: "fa-brands fa-microsoft" },
        { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
        { skillName: "Go / Golang", fontAwesomeClassname: "fa-brands fa-golang" },
      ],
    },
    {
      group: "Frameworks",
      skills: [
        { skillName: "React", fontAwesomeClassname: "fab fa-react" },
        { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
        { skillName: "ASP.NET Core", fontAwesomeClassname: "fab fa-microsoft" },
        { skillName: "Django + Flask", fontAwesomeClassname: "fab fa-python" },
      ],
    },
    {
      group: "Markup & Styling",
      skills: [
        { skillName: "HTML", fontAwesomeClassname: "fa-brands fa-html5" },
        { skillName: "CSS", fontAwesomeClassname: "fa-brands fa-css3" },
        { skillName: "Tailwind CSS", fontAwesomeClassname: "fa-solid fa-wind" },
        { skillName: "Bootstrap", fontAwesomeClassname: "fa-brands fa-bootstrap" },
      ],
    },
    {
      group: "Databases",
      skills: [
        { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
        { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
        { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
        { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
      ],
    },
    {
      group: "Infra & DevOps",
      skills: [
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
        { skillName: "AWS (EC2/RDS)", fontAwesomeClassname: "fab fa-aws" },
        { skillName: "NGINX", fontAwesomeClassname: "fas fa-server" },
      ],
    }
  ],

  display: true
};


// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Eze Software",
      companylogo: "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/2a/93/d7/2a93d710-b3d0-e151-25ce-d542a811f600/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-85-220.png/1200x630wa.png",
      date: "April 2022 – November 2024",
      desc: "Worked on a multi-asset order management system used by traders and financial institutions. Led efforts to modernize the UI and contributed across the full stack, improving performance, usability, and code maintainability.",
      descBullets: [
        "Modernized legacy WinForms interfaces by migrating to DevExpress, introducing dark/light mode and improved UI consistency.",
        "Built and integrated microservice APIs to replace client-side SQL logic, enhancing reliability and scalability.",
        "Developed unit and integration tests, and collaborated with QA, Product, and DevOps to ship stable and maintainable features."
      ]
    },
    {
      role: "Software Engineer Fellow",
      company: "Resilient Coders",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JdRSTeGKPnFsl-6isxPxIDzwUeoaJh32bQ&s",
      date: "Aug 2021 – Feb 2022",
      desc: " Completed an intensive full-stack training program covering HTML, CSS, JavaScript, and modern frameworks, including responsive design and accessibility. Collaborated in agile teams on code reviews, pair programming, and client project delivery.",
      descBullets: [
        "Built dynamic web applications using HTML, CSS, JavaScript, and modern libraries.",
        "Developed full-stack apps for internal projects and an external daycare client, delivering a complete web platform.",
        "Maintained clean git workflows while collaborating with teams on GitHub, following agile best practices."
      ]
    }

    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "",
  projects: [
    {
      image: "https://github.com/user-attachments/assets/2720491b-88e7-4896-8ce7-354d7a2dca01",
      projectName: "FreeAI",
      projectDesc: "FreeAI is a powerful and user friendly AI control center for running AI models entirely on your own computer hardware. No subscriptions. No API keys. No internet required.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/codingwithkarim/freeai"
        }
      ]
    },
    {
      image: "https://github.com/user-attachments/assets/a8276a67-9638-4d6d-b5ba-240f75dd9503",
      projectName: "Posto",
      projectDesc: "A privacy-first blogging platform that puts you in control. Private posts stay secure with end-to-end encryption, while public posts and social features help you grow a trusted community.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://postoblog.duckdns.org"
        },
        {
          name: "GitHub",
          url: "https://github.com/codingwithkarim/posto"
        }
      ]
    },
    {
      image: require("./assets/images/hson-server.png"),
      projectName: "HSON Server",
      projectDesc: "A drop-in JSON Server replacement for mocking structured data. Supports plain text formats with deep nesting, filtering, pagination, and automatic live reload.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/codingwithkarim/hson-server"
        }
      ]
    },
    {
      image: "https://github.com/user-attachments/assets/8e4a23ae-e07e-46f7-bd49-bf7448123738",
      projectName: "AgentK",
      projectDesc: "A WrapGPT-powered chat client that unifies access to 7+ AI providers in one interface. Supports session management, model switching, and shared context across conversations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/codingwithkarim/agentk"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "781-584-0784",
  email_address: "karimhassan92@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
