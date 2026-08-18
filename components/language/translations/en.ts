export const en = {
  navbar: {
    home: "Home",
    menu: "Menu",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
  },

  hero: {
    availability: "Available for opportunities",

    titleLine1: "I build things",
    titleLine2: "that",
    titleAccent: "work.",

    description:
      "I'm Krzysztof Buda. I build backends, APIs, Android applications and solutions that connect software with the real world.",

    projectsButton: "View projects",
    contactButton: "Contact",

    currentFocusLabel: "CURRENT FOCUS",
    currentFocusValue: "Building my own projects",

    scroll: "Scroll",
  },

  projects: {
    eyebrow: "SELECTED PROJECTS",

    title:
      "The best way to show what I can do is through what I've built.",

    description:
      "From mobile applications and backend systems to databases and software interacting with real hardware.",

    viewProject: "View project",

    screenshotPlaceholder:
      "SCREENSHOT PLACEHOLDER",

    details: {
      back: "Back to projects",
      about: "About the project",
      architecture: "Architecture",
      gallery: "Gallery",

      screenshotPlaceholder:
        "Application screenshot placeholder",

      architecturePlaceholder:
        "The project architecture diagram will be added here later.",
    },

    mobileWaiter: {
      title: "Mobile Waiter",
      subtitle: "ANDROID / POS",

      status: "In development",

      description:
        "An actively developed mobile hospitality system consisting of an Android application and a local REST API server that integrates mobile devices with an existing POS environment and a Firebird database.",

      problem: {
        title: "Problem",

        description:
          "The goal of the project is to allow waiters to work directly from a mobile device while maintaining integration with the existing hospitality environment. The application does not replace the POS system — it extends it with a mobile interface and secure communication with a local server.",
      },

      architecture: {
        title: "Architecture",

        description:
          "The system consists of a native Android application and a local backend. The client communicates with the server through a REST API, while static data is streamed as NDJSON and stored locally in Room. The backend handles integration with the Firebird database used by the POS environment, authentication and business logic.",

        diagram: {
          mobileClient: "MOBILE CLIENT",
          localServer: "LOCAL SERVER",
          posDatabase: "POS DATABASE",

          mobileTechnologies:
            "Kotlin · Jetpack Compose",

          serverTechnologies:
            "Python · JWT · Business logic",

          databaseTechnologies:
            "Users · Bills · Orders",

          apiConnection: "REST API / JSON",
          repositoryConnection: "Repositories",
        },
      },

      staticSync: {
        title: "Static data synchronization",

        description:
          "New data never immediately replaces the local dataset used by the application. A snapshot is first streamed from the server, stored as STAGING and validated. Only a valid dataset is atomically activated. If synchronization fails, the previous ACTIVE snapshot remains available.",

        diagram: {
          source: "POS DATABASE",
          server: "LOCAL SERVER",
          stream: "NDJSON STREAM",
          staging: "STAGING",
          validation: "VALIDATION",
          active: "ACTIVE",
          application: "ANDROID UI",

          sourceDetails: "Static data",
          serverDetails: "FastAPI",
          streamDetails: "Streaming chunks",
          stagingDetails: "Room snapshot",
          validationDetails:
            "Schema · ordering · relations",
          activeDetails:
            "Validated dataset",
          applicationDetails:
            "Data available to UI",

          success: "VALID",
          failure: "ERROR",

          successDescription:
            "Atomic activation",

          failureDescription:
            "STAGING discarded · previous ACTIVE preserved",
        },
      },


      currentState: {
        title: "What works today",

        items: [
          "User login with a PIN and a JWT-based session.",
          "Each application installation is identified by its own persistent device UUID.",
          "Configuration of the local server protocol, address and port.",
          "Synchronization of static data from the backend to a local Room database.",
          "Streaming processing of snapshots in NDJSON format.",
          "Synchronization of rooms, tables, products, product groups, VAT rates, payment methods, comments and menu structure.",
          "Validation of data ordering, chunks, schema version and relationships between records.",
          "Safe staging of a new snapshot before activation.",
          "Atomic activation of validated data while preserving the previous version in case of failure.",
          "Manual synchronization available directly from the PIN screen without user login.",
          "Polish, English and Ukrainian language support together with system, light and dark themes.",
        ],
      },

      highlights: {
        title: "Technical highlights",

        items: [
          "Snapshot-based synchronization with a local Room database instead of direct client access to the POS database.",
          "Streaming of larger datasets using NDJSON.",
          "Staging and atomic snapshot activation — an invalid synchronization never replaces the last valid dataset.",
          "Data integrity validation covering stage order, chunks and relationships between entities.",
          "Independent versioning of the synchronization contract and the local database schema.",
          "Layered architecture separating the Android client, API, business logic and Firebird database.",
        ],
      },

      roadmap: {
        title: "Roadmap",

        items: [
          "Expose the ACTIVE snapshot to the application UI layer.",
          "Build room selection and render the physical table layout.",
          "Handle open bills and dynamic table statuses.",
          "Create bills and add products from the synchronized menu.",
          "Support comments on individual order items and notes for the entire order.",
          "Enforce user permissions and discount rules.",
          "Add payments, bill finalization and server-side printing integration.",
          "Expand automated testing and connection-loss scenarios.",
        ],
      },

      gallery: {
        title: "Current interface",

        description:
          "The application interface is still under development. The screens below show the current state of the project, including login, navigation and application configuration.",

        featuredAlt:
          "Mobile Waiter — PIN login screen",

        loginAlt:
          "Mobile Waiter — login screen",

        menuAlt:
          "Mobile Waiter — application menu",

        connectionAlt:
          "Mobile Waiter — connection configuration",

        settingsAlt:
          "Mobile Waiter — application settings",
      },
    },

    garage: {
      title: "Garage Management System",
      subtitle: "IOT / BACKEND / ANDROID",

      description:
        "A complete system combining an Android application, HTTP server, Raspberry Pi and MySQL database to control the garage gate, alarm system and lighting.",
    },

    pizza: {
      title: "Pizza Ordering Application",
      subtitle: "APPLICATION / DATABASE",

      description:
        "A two-person application project for managing orders together with database integration and data handling.",
    },

    calculator: {
      title: "Electronics Calculator",
      subtitle: "C++ / DESKTOP",

      description:
        "A desktop application written in C++ for calculating fundamental electronics parameters and relationships.",
    },
  },

  skills: {
    eyebrow: "TECHNOLOGIES & SKILLS",

    title:
      "I choose tools to fit the problem.",

    description:
      "I mainly work with backend systems, Android applications, databases and solutions that connect software with real hardware.",

    backend: "Backend & API",
    mobile: "Mobile",
    databases: "Databases",
    systems: "Systems & networking",
    embedded: "Embedded & electronics",
    tools: "Tools",
  },

  about: {
    eyebrow: "ABOUT ME",

    title:
      "Software is only part of the system.",

    lead:
      "I'm most interested in projects where code solves a real-world problem — especially when software connects with devices, networks or existing systems.",

    paragraph1:
      "My background comes from mechatronics, electronics and telecommunications. Because of that, I tend to look at applications not only from the code perspective, but also at the environment in which they have to operate.",

    paragraph2:
      "I'm mainly developing my skills in Python, backend systems, APIs, Kotlin and Android. My professional experience also includes networks, hardware, Firebird databases and deploying and troubleshooting systems used by customers.",

    philosophyLabel: "HOW I THINK",

    philosophy:
      "I like understanding not only how to write something, but why it works — and what exists on the other side of the API.",

    timeline: {
      mechatronics: {
        title: "Mechatronics Technician",

        subtitle:
          "ZST Mechanik · Jelenia Góra",

        description:
          "My first strong combination of mechanics, electronics, automation and programming.",
      },

      university: {
        title:
          "Electronics & Telecommunications",

        subtitle:
          "Wrocław University of Science and Technology",

        description:
          "Studies focused on Digital Electronics, followed by further development in software and digital systems.",
      },

      electronics: {
        title: "Electronics Service",

        subtitle:
          "VLAB Service",

        description:
          "Hardware diagnostics, electronics repair, soldering, data recovery and practical work with electronic devices.",
      },

      it: {
        title:
          "Systems, Deployments & Software",

        subtitle:
          "Hospitality / POS environment",

        description:
          "Device and network configuration, system deployments, database work, reporting and development of custom tools and applications.",
      },
    },
  },

  contact: {
    eyebrow: "CONTACT",

    title:
      "Let's build something together.",

    description:
      "If you have a job opportunity, an interesting project or simply want to talk about technology — get in touch.",

    status:
      "Open to new opportunities",
  },

  footer: {
    builtWith: "Built with",
  },
} as const;