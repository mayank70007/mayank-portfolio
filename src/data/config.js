/**
 * Portfolio Configuration
 * Update this file to personalize your portfolio
 */

export const siteConfig = {
    name: 'Mayank Singal',
    title: 'Full-Stack Developer',
    description: 'Full-stack developer focused on practical web apps, clean architecture, and dependable problem solving.',
    email: 'mayanksingal156@email.com',
    location: 'Ambala City, India',
    available: true, // Show "Available for work" badge
    website: 'www.mayanksingal.me',
    resumePath: '/Mayank Singal.pdf',
    resumeDownloadName: 'Mayank_Resume.pdf',
}

// EmailJS configuration — sign up at https://www.emailjs.com/
// 1. Create a service (connect your Gmail/email)
// 2. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 3. Get your Public Key from Account > API Keys
export const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

export const socialLinks = {
    github: 'https://github.com/mayank70007',
    linkedin: 'https://www.linkedin.com/in/mayank70007/',
    email: 'mailto:mayanksingal156@email.com',
}

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Showcase', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
]

export const heroContent = {
    greeting: 'Welcome to my portfolio',
    name: 'Mayank Singal',
    roles: [
        'Full-Stack Developer',
        'React Developer',
        'Problem Solver',
    ],
    description: 'I build practical, maintainable web applications with a strong focus on clean code, problem solving, and user experience.',
    cta: {
        projects: 'View Projects',
        resume: 'Download Resume',
        contact: 'Contact Me',
    },
}

export const aboutContent = {
    title: 'Building with purpose',
    paragraphs: [
        'I am a computer science student and full-stack developer who likes turning ideas into working web applications. I focus on simple architecture, readable code, and practical solutions.',
        'My work is shaped by hands-on projects in React, Node.js, Spring Boot, and databases, along with a habit of learning by building.',
        'I am comfortable working across frontend and backend tasks, and I prefer to keep things maintainable rather than overcomplicated.',
    ],
    stats: [
        { value: '5+', label: 'Projects Built' },
        { value: '8+', label: 'Core Technologies' },
        { value: '1', label: 'Years Experience' },
    ],
    traits: [
        {
            title: 'Practical Builder',
            description: 'I prefer solutions that are useful, maintainable, and grounded in clear requirements.',
        },
        {
            title: 'Continuous Learner',
            description: 'I keep improving by building projects and exploring tools that solve real problems.',
        },
        {
            title: 'Collaborative Mindset',
            description: 'I value communication, feedback, and working carefully with people or clients.',
        },
    ],
}

export const techStackItems = [
    { name: 'Spring Boot', color: '#6DB33F' },
    { name: 'Spring', color: '#6DB33F' },
    { name: 'Java', color: '#ED8B00' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Express', color: '#ffffff' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Git', color: '#F05032' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Vercel', color: '#ffffff' },
]

export const projects = [
    {
        id: 1,
        title: 'CareSync - Microservices Hospital Management System',
        shortDescription: 'Microservices hospital platform for appointments, records, and role-based workflows.',
        fullDescription: 'Built a healthcare management system with Spring Boot microservices, Eureka service discovery, JWT-based authentication, and a React dashboard for appointment and medical record management.',
        tech: ['Spring Boot', 'Spring Security', 'JWT', 'Eureka Server', 'React.js', 'MySQL', 'Spring Data JPA', 'REST APIs', 'Maven', 'Git', 'Postman'],
        features: [
            'Developed Spring Boot microservices with Eureka service discovery',
            'Implemented REST APIs for appointments, patient records, and role-based operations',
            'Secured endpoints with Spring Security and JWT authentication',
            'Integrated MySQL using Spring Data JPA for transactional data handling',
            'Built a React dashboard for appointment management and medical record viewing',
        ],
        liveUrl: 'https://github.com/mayank70007',
        githubUrl: 'https://github.com/mayank70007',
        featured: true,
    },
    {
        id: 2,
        title: 'CoachConnect - Real-Time Mentorship Platform',
        shortDescription: 'Mentorship platform with role-based workflows and live messaging.',
        fullDescription: 'Built a mentorship platform with role-aware backend structure, secure authentication, real-time communication, and workflow modeling for subscriptions, tasks, and progress tracking.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.IO', 'Docker', 'JWT', 'bcrypt'],
        features: [
            'Designed a Trainer and Trainee role-based backend with Node.js and Express.js',
            'Implemented JWT authentication and bcrypt-secured password handling',
            'Developed real-time messaging and activity updates with Socket.IO and Redis',
            'Modeled mentorship workflows for subscriptions, task assignment, and progress tracking in MongoDB',
            'Containerized the application with Docker for consistent development and deployment',
        ],
        liveUrl: 'https://github.com/mayank70007',
        githubUrl: 'https://github.com/mayank70007',
        featured: true,
    },
    {
        id: 3,
        title: 'EventSphere - Event Management Platform',
        shortDescription: 'Event platform for creation, registration, and event data management.',
        fullDescription: 'Built a full-stack event management system with a Node.js and Express.js backend, a React.js frontend, and MongoDB persistence for event lifecycle operations.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        features: [
            'Designed REST APIs for event creation, registration, and retrieval flows',
            'Used MongoDB for robust event data storage and management',
            'Developed responsive UI components with React.js and Tailwind CSS',
            'Delivered end-to-end integration between frontend and backend modules',
        ],
        liveUrl: 'https://github.com/mayank70007',
        githubUrl: 'https://github.com/mayank70007',
        featured: true,
    },
]

export const experiences = [
    {
        id: 1,
        title: 'Freelance Full-Stack Developer',
        company: 'Freelance',
        period: '2023 — Present',
        description: 'Working on freelance and self-driven web projects with a focus on practical delivery and maintainable code.',
        details: [
            'Built and maintained web applications across frontend and backend tasks',
            'Translated requirements into responsive interfaces and API-driven features',
            'Focused on clear communication, clean structure, and iterative delivery',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'MySQL'],
    },
]

export const education = {
    items: [
        {
            degree: 'B.E. in Computer Science',
            school: 'Chitkara University, CUIET | Rajpura, India',
            period: '2023 — 2027'
        },
        {
            degree: 'XII - Non-Medical',
            school: 'S.A. Jain Senior Model School | Ambala, India',
            period: '2023',
        }
    ],
}

export const profiles = [
    {
        name: 'GitHub',
        username: 'Mayank Singal',
        description: 'Open source contributions & projects',
        url: 'https://github.com/mayank70007',
    },
    {
        name: 'LinkedIn',
        username: 'Mayank Singal',
        description: 'Professional network & experience',
        url: 'https://www.linkedin.com/in/mayank70007/',
    },
    {
        name: 'LeetCode',
        username: 'Mayank Singal',
        description: '500+ problems solved',
        url: 'https://leetcode.com/u/Mayank_Singal/',
    },
]
