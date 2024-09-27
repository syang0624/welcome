// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Steven Yang",
  title: "Hello there, I'm Steven",
  subTitle: emoji(
    "I am a passionate software engineer and Minerva University student, enthusiastic about AI 🤖, web development 💻, and sharing knowledge 📚 to help the community thrive 🌱."
  ),
  resumeLink: "https", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/syang0624",
  linkedin: "https://www.linkedin.com/in/syang0624/",
  gmail: "steven.yang@uni.minerva.edu",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I focus on web development and data analysis, with a strong passion for expanding my knowledge in the tech world.",
  skills: [
    emoji(
      "⚡ Build dynamic and engaging front-end user interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Perform data analysis to uncover insights and drive decision-making through visualization and statistical methods"
    ),
    emoji(
      "⚡ Integrate third-party services like Firebase, AWS, and Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
    // {
    //   skillName: "sklearn",
    //   fontAwesomeClassname: "fab fa-sklearn"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Minerva University",
      logo: require("./assets/images/minervaLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - May 2026",
      desc: "GPA: 3.79 / 4.00",
      descBullets: [
        "Minerva University is an innovative global institution offering a rigorous, interdisciplinary education that emphasizes critical thinking, problem-solving, and experiential learning across seven countries.",
        "I took a two-year leave of absence to fulfill mandatory military service in Korea."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Military Software Engineer",
      company: "AKA AI",
      companylogo: require("./assets/images/akaLogo.png"),
      date: "Aug 2022 – Jul 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Achieved a 75% reduction in build time by developing the Muse EOS X Tesla chatbot website using VITE.",
        "Boosted data efficiency by 25% for Musio English Korea by redesigning data flow and integrating Google APIs.",
        "Cut website response time by 27% by building an optimized dashboard and analysis tab for a mental health app.",
        "Reduced AWS usage and costs by 23%, maintaining the savings over a 6-month period through resource optimization.",
        "Led a Team of 8 with 6 different nationalities, planned the development schedule, and reported to the CEO."
      ]
    },
    {
      role: "Solutions Software Engineering Intern",
      company: "TigerGraph",
      companylogo: require("./assets/images/tigergraphLogo.png"),
      date: "May 2022 – Aug 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Produced 2 web apps to accelerate PoV and service cycles, and presented to a leading US satellite TV company.",
        "Enhanced TigerGraph’s graph algorithms library by building the Leiden from Louvain and revising 15 starter kits."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Sandbox Network",
      companylogo: require("./assets/images/sandboxLogo.png"),
      date: "Oct 2021 – Dec 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Analyzed over 50 YouTube video thumbnails to quantify visual complexity, using image processing.",
        "Led a team of 6 and pitched the results to 4 C-level executives and the manager at the end of the internship."
      ]
    },
    {
      role: "Machine Learning and Data Science Intern",
      company: "Laplace Technologies",
      companylogo: require("./assets/images/laplaceLogo.png"),
      date: "Jul 2021 – Sep 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Increased customer segmentation accuracy by 15% by developing a Cohort, RFM/LTV analysis model.",
        "Analyzed a sample of 10,000 consumer data points using scikit-learn and MySQL to uncover key trends and insights."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE WORKED ON, BOTH PROFESSIONALLY AND PERSONALLY",
  projects: [
    {
      image: require("./assets/images/aliveLogo.webp"),
      projectName: "Alive",
      projectDesc:
        "Alive is an app designed to support individuals with depression by improving their mental health through CBT-based AI chatbot sessions, mood tracking, and regular mental health assessments. I developed its frontend and managed the project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://alive.akaai.io/"
        }
      ]
    },
    {
      image: require("./assets/images/akaLogo.png"),
      projectName: "Muse EOS X Tesla",
      projectDesc:
        "Muse EOS (ExtraOrdinary Salesbot) is an AI chatbot created to help potential car buyers by recommending vehicles that best fit their needs. I worked on the frontend development, built the database, and performed data analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tesla.eos.akaintelligence.com/"
        }
      ]
    },
    {
      image: require("./assets/images/musioenglishLogo.png"),
      projectName: "Musio English Korea",
      projectDesc:
        "Musio English Korea is an online English education platform. I was responsible for developing the frontend, payment system, event pages, and managing databases.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://musioenglish.kr/"
        }
      ]
    },
    {
      image: require("./assets/images/sandboxLogo.png"),
      projectName: "Thumbnail Analysis",
      projectDesc:
        "Conducted an analysis of more than 50 YouTube video thumbnails to measure visual complexity by applying image processing techniques.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/syang0624/MinervaXSandbox-Youtube-Comment-Video-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/buddyLogo.png"),
      projectName: "Buddy",
      projectDesc:
        "Worked with a team to build a meditation/study app, optimizing backend response time by 30% using Flask, and achieving 95% voice detection accuracy with Google Speech Recognition API.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://devpost.com/software/buddy-72xe6l"
        }
      ]
    },
    {
      image: require("./assets/images/notionLogo.png"),
      projectName: "Notion X CodeSandbox",
      projectDesc:
        "Developed backend response handling using the Notion API to create custom CodeSandbox links for students, reducing class preparation time by 80% and streamlining workflows; pitched the project to a team at Facebook.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/syang0624/HackMIT2021"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Advanced Web Development",
      subtitle: "Fall 2024 - IN PROGRESS",
      image: require("./assets/images/codepathLogoOne.png"),
      imageAlt: "CodePath Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Intermediate Software Engineering",
      subtitle: "Summer 2024 - Passed with Honors",
      image: require("./assets/images/codepathLogoTwo.png"),
      imageAlt: "CodePath Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://media.licdn.com/dms/image/D562DAQFOVaan7JVm4g/profile-treasury-document-images_1920/1/1725460870398?e=1728518400&v=beta&t=h8gQZPUrJs1CqUIlcw1yeupZgmoCr6NVL_598bv8qr0"
        }
      ]
    },
    {
      title: "Headstarter AI SWE Fellow",
      subtitle: "Summer 2024",
      image: require("./assets/images/headstarterLogo.png"),
      imageAlt: "Headstarter Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "AWS Machine Learning Scholarship Recipient",
      subtitle: "Summer 2021",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// SchoolProject Section

const schoolProjectSection = {
  title: emoji("School Stuff  🏫 "),
  subtitle:
    "School Projects, Assignments, and Study Abroad Program that I have done !",

  schoolProjectCards: [
    {
      title: "Foot Traffic Modeling",
      subtitle:
        "It was a Linear Algebra assignment where we applied Markov Chains to model foot traffic within a building.",
      image: require("./assets/images/linearAlgebra.webp"),
      imageAlt: "Linear Algebra",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/file/d/1Qi26hrYuQa5cH5ZrhTnpxPBOJGDGGDbn/view?usp=sharing"
        }
      ]
    },
    {
      title: "Principle Landmarks",
      subtitle:
        "This assignment focuses on using Principal Component Analysis (PCA) to reduce the dimensionality of images and visualize them in a 2D space, while exploring how well the reduced data can reconstruct the original images.",
      image: require("./assets/images/pca.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/syang0624/CS156_Works/blob/main/LBA/Yang%2C%20Steven.%20LBA%20Assignment.pdf"
        }
      ]
    },
    {
      title: "Study Abroad in Germany",
      subtitle:
        "I spent a semester in Berlin, where I connected with German alumni from our university and discussed sustainability and policies in Germany as part of the city experience.",
      image: require("./assets/images/germany.png"),
      imageAlt: "germany",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

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

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  subtitle: "We're just an email away from each other.",
  // number: "(XXX) XXX-XXXX",
  email_address: "steven.yang@uni.minerva.edu"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  schoolProjectSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
