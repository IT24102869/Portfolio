// Edit this file to customize your portfolio content.

import profileImage from './assets/profile.jpeg'
import projectAImage from './assets/project1.mp4'
import projectA1Image from './assets/p21.jpeg'
import projectA2Image from './assets/p22.jpeg'
import projectA3Image from './assets/p23.jpeg'
import projectA4Image from './assets/p24.jpeg'
import projectA5Image from './assets/p25.jpeg'
import projectA6Image from './assets/p26.jpeg'
import projectA7Image from './assets/p27.jpeg'
import projectA8Image from './assets/p31.jpeg'
import projectA9Image from './assets/p32.jpeg'
import projectA10Image from './assets/p33.jpeg'
import projectBImage from './assets/project-b.svg'
import projectCImage from './assets/project-c.svg'
import projectDImage from './assets/project-d.svg'
import projectEImage from './assets/project-e.svg'
import projectFImage from './assets/project-f.svg'
import projectGImage from './assets/project-g.svg'
import projectHImage from './assets/project-h.svg'
import projectIImage from './assets/project-i.svg'
import projectJImage from './assets/project-j.svg'
import certificateAImage from './assets/c1.jpeg'
import certificateBImage from './assets/c2.jpeg'
import certificateCImage from './assets/c3.jpeg'
import certificateDImage from './assets/c4.jpeg'
import certificateEImage from './assets/c5.jpeg'

export const site = {
  name: 'Sithirasenan Vipooshan ',
  role: 'Full Stack Developer',
  location: 'Jaffna, Sri Lanka',
  tagline: 'I build fast, accessible, and delightful web apps.',
  email: 'vipooshanvipoo9@gmail.com',
  resumeUrl: '#',
  profileImage,
  socials: [
    { label: 'GitHub', url: 'https://github.com/IT24102869' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sithirasenan-vipooshan-6a8385349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { label: 'WhatsApp', url: 'https://wa.me/0772078909' }
  ]
}

export const about = {
  title: 'About me',
  paragraphs: [
    'I\'m a passionate full-stack developer skilled in HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL. I also have experience in UI design using Figma and training AI models using Python. I love building modern web applications that are fast, user-friendly, and scalable.',
    'I completed my school education at St. John’s College, and I’m currently studying at SLIIT in Year 2, Semester 2. I’m focused on developing my knowledge through practical projects and learning new technologies to become a successful software engineer.'
  ],
  highlights: [
    { label: 'Studying', value: 'Y2S2 SLIIT' },
    { label: 'Focus', value: 'Software Engineer' },
    { label: 'Availability', value: 'Open to freelance' }
  ]
}

export const skills = [
  'React',
  'JavaScript ',
  'TypeScript',
  'HTML',
  'CSS',
  'Java',
  'Spring Boot',
  'MySQL',
  'Figma',
  'Python',
  'AI',
  'Responsive Design',
  'REST APIs',
  'Git / GitHub',
  'Testing '
]

export const projects = [
  {
    title: 'Toy Store Web App',
    description: 'Toy Store Web App is a full-stack project built with Spring Boot, Thymeleaf, JavaScript, HTML, and CSS. It includes secure login, product search, and category filtering, with data managed using a custom LinkedList and file handling. I’m currently adding AJAX for real-time updates and improving performance for a smoother experience.',
    image: projectAImage,
    video: projectAImage,
 
    tags: [ 'Responsive', 'Spring Boot', 'Thymeleaf', 'JavaScript', 'HTML', 'CSS'	],
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    title: 'Blood Donation System',
    description: 'The Blood Donation System is a web-based application designed to manage and streamline the process of blood donation by connecting donors, recipients, and blood banks through a centralized platform. It helps track donor details, blood stock availability, requests, and donation history in a secure and organized way.           ',
    image: projectA1Image,
    gallery: [
      projectA1Image,
      projectA2Image,
      projectA3Image,
      projectA4Image,
      projectA5Image,
      projectA6Image,
      projectA7Image
    ],
    tags: ['Responsive', 'Spring Boot', 'Thymeleaf', 'JavaScript', 'HTML', 'CSS','MySQL'],
    links: {
      demo: 'https://example.com',
      code: 'https://github.com/your-handle/project-b'
    }
  },
  {
    title: 'Tesla Stock Predictor',
    description: 'Built a Tesla (TSLA) stock price prediction system to forecast day-by-day stock prices using a hybrid LSTM + Random Forest model. LSTM captures long-term time-series patterns, while Random Forest improves accuracy using feature-based learning. The model was trained on historical Tesla stock data with preprocessing and evaluated using MAE/RMSE and actual vs predicted graphs.',
    image: projectA8Image,
    gallery: [
      projectA8Image,
      projectA9Image,
      projectA10Image
    ],
    tags: ['LSTM', 'Random Forest', 'Python', 'Streamlit'],
    links: {
      demo: 'https://stock-app-2025.streamlit.app/',
      code: 'https://github.com/IT24102869/Tesla-Stock-Predictor'
    }
  },
  
]

export const experience = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2024 — Present',
    bullets: [
      'Built reusable component libraries and page templates.',
      'Improved Core Web Vitals by optimizing bundles and images.',
      'Collaborated with designers to ship consistent UI patterns.'
    ]
  },
  {
    title: 'Intern — Web Developer',
    company: 'Company Name',
    period: '2023 — 2024',
    bullets: [
      'Implemented UI features and fixed bugs across multiple pages.',
      'Worked with REST APIs and handled loading/error states.'
    ]
  }
]

export const certificates = [
  {
    title: 'AI for Beginners',
    issuer: 'HP LIFE online course',
    description: 'Completed “AI for Beginners” online course from HP LIFE (HP Foundation), gaining basic knowledge of AI concepts, data importance, applications, and ethics.',
    image: certificateAImage,
    date: '9/5/2025',
    tags: ['AI'],
    credentialUrl: 'https://www.udemy.com/certificate/example',
    verifyUrl: 'https://www.udemy.com/certificate/verify/example'
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE online course',
    description: 'Completed “Data Science & Analytics” online course from HP LIFE (HP Foundation), gaining knowledge in data science practices, tools, and data-driven decision making for business.',
    image: certificateBImage,
    date: '9/16/2025',
    tags: ['Data Science'],
    credentialUrl: 'https://freecodecamp.org/certification/example',
    verifyUrl: 'https://freecodecamp.org/certification/verify/example'
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE online course',
    description: 'Completed “Introduction to Cybersecurity Awareness” course from HP LIFE (HP Foundation), learning common cyber threats and basic methods to protect online data securely.',
    image: certificateCImage,
    date: '9/8/2025',
    tags: ['Cybersecurity'],
    credentialUrl: 'https://freecodecamp.org/certification/example-js',
    verifyUrl: 'https://freecodecamp.org/certification/verify/example-js'
  },  {
    title: 'Agile Project Management',
    issuer: 'HP LIFE online course',
    description: 'Completed the “Agile Project Management” , gaining knowledge in defining minimum viable products (MVP), understanding iterative and incremental development, analyzing Agile methodologies such as Scrum and Kanban, and applying agile ways of working to improve project management.',
    image: certificateDImage,
    date: '9/6/2025',
    tags: ['Agile','Project Management','Scrum','Kanban'],
    credentialUrl: 'https://freecodecamp.org/certification/example-js',
    verifyUrl: 'https://freecodecamp.org/certification/verify/example-js'
  }, {
    title: 'Introduction to UI/UX',
      issuer: 'Uki',
      description: 'the “Introduction to UI/UX” online course from Uki, gaining knowledge in understanding the importance of UI/UX in web development, the user journey, and the design process.',
    image: certificateEImage,
    date: '9/6/2025',
    tags: ['UI/UX','User Journey','Design Process','Figma'],
    credentialUrl: 'https://freecodecamp.org/certification/example-js',
    verifyUrl: 'https://freecodecamp.org/certification/verify/example-js'
  } 
]
