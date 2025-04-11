import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ariston,
    aspnet,
    winform,
    mssql,
    java,
    csharp,
    meta,
    carrent,
    jobit,
    chatapp,
    shopcart,
    tripguide,
    threejs,
    travelplanner,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Desktop Application Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ASP.NET MVC",
      icon: aspnet,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Winform",
      icon: winform,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MS-SQL",
      icon: mssql,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },

  ];
  
  const experiences = [
    {
      title: "ASP.NET Developer Associate",
      company_name: "Ariston Capital Services Pvt. Ltd.",
      icon: ariston,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Developed and maintained financial software applications using C# and .NET Framework",
        "Implemented real-time stock analysis and back-testing functionalities using WinForms.",
        "Optimized performance of legacy systems by refactoring code and introducing efficient data handling.",
        "Collaborated with team to debug, test, and release updated versions of internal applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Travel Planner",
      description:
        "An intelligent AI-powered travel planning platform that crafts personalized itineraries based on user preferences, budget, and destination. Integrates real-time flight information and offers smart travel tips with a sleek UI powered by Vite, React. Also includes a live AI chat assistant for recommendations and query resolution.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: travelplanner,
      source_code_link: "https://github.com/Rohit-Baranwal/travelogic-gemini",
    },
    {
      name: "MERN Based Chat App",
      description:
        "A real-time chat application featuring instant messaging, typing indicators, and read receipts. Built using MERN stack and Socket.IO, it supports group chats and user authentication, offering a seamless, scalable communication platform with optimized backend performance.",
      tags: [
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Rohit-Baranwal/Chit-Chat-Chew",
    },
    {
      name: "Shop-skie App",
      description:
        "A feature-rich supermarket management system designed using ASP.NET MVC. The application enables inventory tracking, billing, and customer management. Integrated secure login system, robust form validations, and dynamic data-driven reports for insightful analytics and transactions.",
      tags: [
      { name: "asp.net mvc", color: "blue-text-gradient" },
      { name: "CSharp", color: "green-text-gradient" },
      { name: "sqlserver", color: "pink-text-gradient" },
      { name: "winforms", color: "orange-text-gradient" },
      { name: "data-validation", color: "blue-text-gradient" },
      ],
      image: shopcart,
      source_code_link: "https://github.com/Rohit-Baranwal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };