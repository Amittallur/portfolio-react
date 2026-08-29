export const profile = {
  name: 'Amit Tallur',
  role: 'Frontend Engineer',
  tenure: '3+ years',
  place: 'Belgaum, Karnataka, India',
  email: 'amittalluratom@gmail.com',
  phone: '+91 7996389821',
  line: 'React and Next.js for healthcare and CloudOps.',
  tagline: 'I make the hospital dashboard finish loading.',
  pitch:
    'RBAC, appointments, and Twilio for staff and patients. GIS and CloudOps tools on the other side. About 40% less wait on the dashboards I rewired at Sedona.',
}

export const apps = [
  { id: 'welcome', title: 'Finder', label: 'Welcome', icon: 'finder' },
  { id: 'work', title: 'Work', label: 'Selected Work', icon: 'work' },
  { id: 'about', title: 'About', label: 'About', icon: 'about' },
  { id: 'skills', title: 'Craft', label: 'What I Do', icon: 'craft' },
  { id: 'contact', title: 'Mail', label: 'Mail', icon: 'mail' },
  { id: 'terminal', title: 'Terminal', label: 'Terminal', icon: 'term' },
  { id: 'now', title: 'Portfolio', label: 'Portfolio', icon: 'era', era: true },
]

export const experiences = [
  {
    code: 'Sedona',
    role: 'Software Engineer',
    company: 'Sedona Management Solutions',
    period: 'September 2024 — Present',
    location: 'Remote, India',
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MySQL', 'AWS'],
    bullets: [
      'Build and maintain scalable healthcare applications for patient and staff management workflows.',
      'Shipped RBAC across admins, coordinators, coaches, and patients.',
      'Designed REST APIs for appointment automation, insurance, and operations; tuned MySQL queries.',
      'Deploy and monitor on AWS (EC2, S3, Amplify, CloudWatch); Twilio for realtime staff–patient communication.',
    ],
  },
  {
    code: 'Applied Materials',
    role: 'Frontend Developer',
    company: 'Applied Materials',
    period: 'July 2023 — August 2024',
    location: 'Bengaluru, India',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Redux'],
    bullets: [
      'Delivered enterprise frontends for GIS and CloudOps using React, Next.js, Redux, and TypeScript.',
      'Owned 6+ internal tools for deployment automation, network management, and workflow optimization.',
      'Automated OpenShift operations to reduce manual intervention.',
      'Built data-heavy interfaces and REST integrations, including BLE device registration for asset tracking.',
    ],
  },
]

export const projects = [
  {
    name: 'JivaHealthCares',
    summary:
      'Healthcare platform for Restore, REM, and DME with RBAC, role-specific dashboards, appointment automation, a digital library, and Twilio chat.',
  },
  {
    name: 'Enterprise Automation Suite',
    summary:
      'Internal CloudOps and GIS tools: IP management, OpenShift automation, BLE registration, and shift handover — React/Next.js with REST-backed workflows.',
  },
]

export const skillKits = [
  {
    id: '01',
    name: 'Frontend',
    samples: ['JavaScript', 'React.js', 'Next.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'],
  },
  {
    id: '02',
    name: 'Backend & data',
    samples: ['Node.js', 'Express.js', 'REST APIs', 'SQL', 'MySQL', 'MongoDB'],
  },
  {
    id: '03',
    name: 'Cloud & delivery',
    samples: ['AWS EC2', 'S3', 'Amplify', 'App Runner', 'CloudWatch', 'Git', 'Jira'],
  },
]

export const practices = [
  {
    id: '01',
    title: 'Interface systems',
    text: 'Role-based dashboards and workflows that stay clear under real hospital and enterprise load.',
  },
  {
    id: '02',
    title: 'Front-end craft',
    text: 'React and Next.js with TypeScript, Redux, and precise UI kits — Tailwind, MUI, Ant Design.',
  },
  {
    id: '03',
    title: 'Performance',
    text: 'Parallel API work with Promise.all; about 40% faster dashboards on healthcare tools.',
  },
  {
    id: '04',
    title: 'APIs & data',
    text: 'Express, REST, MySQL, MongoDB — appointments, insurance, GIS, and CloudOps tools.',
  },
  {
    id: '05',
    title: 'Ship on AWS',
    text: 'EC2, S3, Amplify, App Runner, CloudWatch. Twilio when the product needs a live channel.',
  },
]

export const education = [
  {
    year: '2022',
    title: 'B.E. in Computer Science',
    place: 'KLE Dr. MS Sheshgiri College of Engineering and Technology, Belgaum',
    detail: 'CGPA 8.74 / 10',
  },
  {
    year: '2018',
    title: 'Higher Secondary Education (10+2)',
    place: "KLE Society's Raja Lakhamagouda Science College, Belgaum",
    detail: '90.33%',
  },
]

export const links = [
  { label: 'GitHub', href: 'https://github.com/Amittallur' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amittallur/' },
  { label: 'Email', href: 'mailto:amittalluratom@gmail.com' },
  { label: 'Phone', href: 'tel:+917996389821' },
]
