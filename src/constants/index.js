import {
    frontend,
    computertech,
    creator,
    graphicdesigner,
    javascript,
    html,
    css,
    git,
    figma,
    microsoft,
    adobe,
    coppers,
    zymek,
    jswithzikebuz,
    // solutec,
    teknowledge,
    newshub,
    // footprinth,
    minicom,
    coinradar,
  } from "../assets";
  
  const navLinks = [
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
      title: "Computer Technician",
      icon: computertech,
    },

    {
      title: "Frontend Developer",
      icon: frontend,
    },

    {
      title: "Graphic Designer",
      icon: graphicdesigner,
    },
  
    {
      title: "Content Creator",
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
      name: "git",
      icon: git,
    },
    {
      name: "microsoft",
      icon: microsoft,
    },
    {
      name: "adobe",
      icon: adobe,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Support Advocate",
      company_name: "Tek Experts",
      icon: teknowledge,
      iconBg: "#360f60",
      date: "May 2024 - Present",
      points: [
        "Successfully resolved Microsoft 365 subscription and application issues for customers.",
        "Streamlined customer support by routing concerns to appropriate teams.",
        "Troubleshooted Office apps (Word, Excel, etc.) and email issues.",
        "Escalated complex issues effectively.",
        "Educated customers on subscription benefits and usage.",
      ],
    },
    {
      title: "Professional Freelancer",
      company_name: "JSwithZikebuz",
      icon: jswithzikebuz,
      iconBg: "#89d4f3",
      date: "September 2021 - May 2024",
      points: [
        "Managed NGO projects: Web maintenance, graphic/logo design.",
        "Mentored 5-10 individuals on cryptocurrency platforms (Unstoppable Domains, OpenSea, etc.)",
        "Supported online marketing efforts: Content creation, web development, design.",
        "Provided remote IT support: Hardware, software, network troubleshooting.",
        "Conducted IT fundamentals training and workshops.",
      ],
    },
    {
      title: "IT Support",
      company_name: "Zymek",
      icon: zymek,
      iconBg: "#ffffff",
      date: "April 2021 - August 2021",
      points: [
        "Conducted daily hard disk lifespan testing on 150 computers",
        "Trained 15+ sales staff, resulting in 40% sales growth.",
        "Managed inventory with 100% accuracy.",
        "Executed weekly system software updates.",
        "Repaired 50+ computers weekly.",
        "Configured and terminated 300+ network cables daily.",
      ],
    },
    
/*     {
      title: "Assistant Technician",
      company_name: "Coppers",
      icon: coppers,
      iconBg: "#E6DEDD",
      date: "February 2010 - June 2011",
      points: [
        "Cleared 2+ desktop system BIOS passwords each day.",
        "Installed system software drivers for 10-20 computers, enhancing usability.",
        "Conducted weekly backups and reloaded 20+ computers with software-related issues.",
        "Installed premium application packages with optimal settings for 10+ computers.",
        "Repaired 10-15 computers daily, addressing minor faults for on-time delivery.",
      ],
    }, */
  ];
  
  const testimonials = [
    {
      testimonial:
        "I used to think it was impossible to match the beauty of our product with a website, but Ebuka proved me wrong.",
      name: "Blessing",
      designation: "CEO",
      company: "Chinemerem Hairs",
      image: "https://user-images.githubusercontent.com/71839001/227767325-f18fea8c-e7e2-4a13-b7fc-ca84acc0b4f7.jpg",
    },
    {
      testimonial:
        "Among all the frontend developers I've worked with, I've never met someone who genuinely cares about their clients' success like Ebuka does.",
      name: "Christopher",
      designation: "CEO",
      company: "Xtotech Nigeria",
      image: "https://user-images.githubusercontent.com/71839001/227767381-4173ea44-a375-4fe9-96aa-4cef4792a17f.jpg",
    },
    {
      testimonial:
        "Thanks to Ebuka's website optimization, our traffic increased by 60%. We're immensely grateful for his help.",
      name: "Prince",
      designation: "CEO",
      company: "Jadon Enterprises",
      image: "https://user-images.githubusercontent.com/71839001/227767386-0288f21a-ee10-4909-a09a-fc85e156964c.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Minicom",
      description:
        "A web application that enables users to see and order for an item, add the item to cart and pay instantly for it online.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: minicom,
      source_code_link1: "https://github.com/ebuztrend/minicom",
      source_code_link2: "https://minicom-ten.vercel.app/",
    },
    {
      name: "Newshub",
      description:
        "News aggregating web application that allows users to read and follow up on latest breaking news in different categories.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: newshub,
      source_code_link1: "https://github.com/Zikebuz/newshub",
      source_code_link2: "https://newshub-wine.vercel.app/",  
    },
    {
      name: "Coinradar",
      description:
        "An app for crypto traders or investors who wants to convert their local currency into cryptocurrencies equivalent.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "crypto",
          color: "green-text-gradient",
        },
        {
          name: "newscatcher",
          color: "pink-text-gradient",
        },
      ],
      image: coinradar,
      source_code_link1: "https://github.com/Zikebuz/coinradar",
      source_code_link2: "https://coinradar.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, navLinks, projects };
  