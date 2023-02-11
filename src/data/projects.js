const projects = [
  {
    id: 1,
    title: "Sudoku",
    date: "December 2020",
    category: "Web Application",
    img: require("@/assets/images/projects/sudoku/sudoku1.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/sudoku/sudoku1.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/sudoku/sudoku2.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/sudoku/sudoku3.png"),
      },
    ],
    clientInformation: {
      header: "Institution",
      client: [
        {
          id: 1,
          title: "Name",
          details: "Universidad Distrital Francisco Jose de Caldas",
        },
        {
          id: 2,
          title: "Services",
          details: "Software design/development",
        },
      ],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Develop a sudoku using the main web technologies to understand the DOM structure, styles and web scripts.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["Javascript", "HTML", "CSS"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: "https://github.com/miguel-ch/Sudoku-Avzda",
        },
        {
          id: 2,
          name: "Try it",
          icon: "external-link",
          url: "https://miguel-ch.github.io/Sudoku-Avzda/",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A simple sudoku designed and coded with pure HTML, CSS and Javascript, no other technologies or frameworks were used in its development. The application has its own sudoku generator in a separated Javascript file. The sudoku structure (9x9 Table) its generated and inserted into the DOM using Javascript code. Validations and table filling are done by getting data directly from the DOM.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Clients CRUD",
    category: "Web Application",
    date: "January 2020",
    img: require("@/assets/images/projects/jcrud/jcrud1.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/jcrud/jcrud1.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/jcrud/jcrud2.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/jcrud/jcrud3.png"),
      },
    ],
    clientInformation: {
      header: "Personal project",
      client: [],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Develop a CRUD to manage clients in a static HTML page.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["Javascript", "JQuery"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          button: "",
          icon: "github",
          url: "https://github.com/miguel-ch/jquery-crud",
        },
        {
          id: 2,
          name: "Try it",
          icon: "external-link",
          url: "https://miguel-ch.github.io/jquery-crud/",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A CRUD that manages different clients and their data, clients are saved in the local storage for later use. There main code is separated in different functions to make code maintainable and scalable. Developed using only Javascript and JQuery for DOM management",
        },
      ],
    },
  },
  {
    id: 3,
    title: "CRUD",
    date: "February 2021",
    category: "Web Application",
    img: require("@/assets/images/projects/crud/crud1.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/crud/crud2.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/crud/crud3.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/crud/crud4.png"),
      },
    ],
    clientInformation: {
      header: "Institution",
      client: [
        {
          id: 1,
          title: "Name",
          details: "Universidad Distrital Francisco Jose de Caldas",
        },
        {
          id: 2,
          title: "Services",
          details: "Software design/development",
        },
      ],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Build a CRUD to manage items, clients and orders with a hosted database.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["HTML", "CSS", "Javascript", "JQuery", "Python", "Flask", "SQLite"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: "https://github.com/miguel-ch/CRUD-Avzda",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A CRUD developed to manage clients, items, zones and orders with relationships between them simulating a warehouse. Every entity has its own dedicated table and filling form. The application Frontend was developed using pure HTML, CSS and Javascript. The Backend was developed using Python, Flask and SQLite creating a RESTful API with dedicated routing for each entity.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Othello Game",
    category: "Desktop Application",
    date: "February 2021",
    img: require("@/assets/images/projects/othello/othello2.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/othello/othello1.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/othello/othello3.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/othello/othello4.png"),
      },
    ],
    clientInformation: {
      header: "Institution",
      client: [
        {
          id: 1,
          title: "Name",
          details: "Universidad Distrital Francisco Jose de Caldas",
        },
        {
          id: 2,
          title: "Services",
          details: "Software design/development",
        },
      ],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Develop a Othello desktop game using only Java and its native UI library.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["Java", "JSwing"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: "https://github.com/miguel-ch/Othello-Java",
        },
        {
          id: 2,
          name: "Download",
          icon: "download",
          url: "https://drive.google.com/file/d/1Z-FU2LRaMVwK-rMbs4RbOO-ojY9EoS6Y/view?usp=sharing",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "Othello game designed and coded using only Java, works as a desktop app. The game has 2 game modes, player vs player or player vs computer the game logic was designed and coded separately from the view. The view is coded based on a component architecture so it was maintainable and easy to manipulate. ",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Web UNO",
    date: "March 2021",
    category: "Web Application",
    img: require("@/assets/images/projects/uno/uno1.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/uno/uno2.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/uno/uno3.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/uno/uno4.png"),
      },
    ],
    clientInformation: {
      header: "Institution",
      client: [
        {
          id: 1,
          title: "Name",
          details: "Universidad Distrital Francisco Jose de Caldas",
        },
        {
          id: 2,
          title: "Services",
          details: "Software design/development",
        },
      ],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Build an UNO game using real time communication technologies.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["HTML", "CSS", "Javascript", "Python", "Flask", "Socket.io"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: "https://github.com/miguel-ch/UNO-web",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A UNO web application that works as a locally game where you play in real time with different users (Max. 4 players) in the same network. The application uses WebSockets to communicate between players. The user interface was developed with pure HTML, CSS and Javascript. DOM and Socket communications were developed using Pure Javascript.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Warranties Manager",
    date: "June 2022",
    category: "Web/Desktop Application",
    img: require("@/assets/images/projects/warranties_manager/warranties1.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/warranties_manager/warranties1.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/warranties_manager/warranties3.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/warranties_manager/warranties4.png"),
      },
    ],
    clientInformation: {
      header: "About Client",
      client: [
        {
          id: 1,
          title: "Company Name",
          details: "Kolors People",
        },
        {
          id: 2,
          title: "Services",
          details: "Software design/development",
        },
      ],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Develop a software to manage the incoming shop warranties.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["Javascript", "Node.JS", "Express", "Moment.JS", "HTML", "CSS", "Vue.JS", "PrimeVue", "SQLite", "Electron"],
    },
    sharing: {
      public: false,
      header: "Media",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: null,
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A software developed for a retail shop. This software manages the warranties received by every shop, their state, item and other details, it also manages clients, employees and warranty exchanges. The application can be used as a desktop application or as a web application depending on the user requirements, it prints a receipt for every received warranty or even an administrator can print a receipt copy. The back-end works as a server or service depending on the requirements.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Weather Application",
    date: "February 2023",
    category: "Web Application",
    img: require("@/assets/images/projects/weather-app/weather.png"),
    images: [
      {
        id: 1,
        title: "Image 1,",
        source: require("@/assets/images/projects/weather-app/weather1.png"),
      },
      {
        id: 2,
        title: "Image 2,",
        source: require("@/assets/images/projects/weather-app/weather2.png"),
      },
      {
        id: 3,
        title: "Image 3,",
        source: require("@/assets/images/projects/weather-app/weather3.png"),
      },
    ],
    clientInformation: {
      header: "Personal Project",
      client: [],
    },
    objectives: {
      header: "Objectives",
      description: [
        {
          id: 1,
          detail: "Build an weather app where the user can enter a city name and the the city's weather status is displayed.",
        },
      ],
    },
    technologies: {
      header: "Technologies",
      description: ["React.js", "Node.js", "Tailwind CSS", "Axios", "React-Toastify", "Javascript", "HTML", "CSS"],
    },
    sharing: {
      public: true,
      header: "Links",
      links: [
        {
          id: 1,
          name: "Github",
          icon: "github",
          url: "https://github.com/miguel-ch/weather-app",
        },
        {
          id: 2,
          name: "Try it",
          icon: "external-link",
          url: "https://miguel-ch.github.io/weather-app/",
        },
      ],
    },
    projectAbout: {
      header: "About",
      details: [
        {
          id: 1,
          objective:
            "A single page weather app. This app displays the entered city weather status (temperature, status, date, wind speed, humidity, cloudiness). Applications get weather information using the OpenWeatherMap API and also have the option to switch between Fahrenheit and Celsius for temperature values.",
        },
      ],
    },
  },
];

export default projects;
