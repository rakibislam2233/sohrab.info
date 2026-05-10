export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // Full-time, Part-time, etc.
  category: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl: string;
  salary?: string;
}

export const jobs: Job[] = [
  {
    id: "frontend-developer",
    title: "Senior Frontend Developer",
    company: "TechVision Solutions",
    location: "Remote / Dhaka, BD",
    type: "Full-time",
    category: "Software Development",
    postedDate: "May 10, 2024",
    description: "We are looking for an experienced Frontend Developer to lead our UI/UX initiatives using React and Next.js.",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of Next.js and TypeScript",
      "Experience with Tailwind CSS and Framer Motion",
      "Good communication skills"
    ],
    responsibilities: [
      "Develop and maintain high-quality web applications",
      "Collaborate with backend developers and designers",
      "Mentor junior developers",
      "Optimize applications for maximum speed and scalability"
    ],
    applyUrl: "https://example.com/apply/frontend",
    salary: "80k - 120k BDT"
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer (Node.js)",
    company: "DataFlow Systems",
    location: "Dhaka, BD",
    type: "Full-time",
    category: "Software Development",
    postedDate: "May 08, 2024",
    description: "Join our core team to build scalable microservices and APIs using Node.js and PostgreSQL.",
    requirements: [
      "3+ years of experience with Node.js",
      "Proficiency in TypeScript and Prisma ORM",
      "Knowledge of PostgreSQL and Redis",
      "Experience with AWS or Docker is a plus"
    ],
    responsibilities: [
      "Design and implement scalable backend services",
      "Write clean, maintainable, and efficient code",
      "Troubleshoot and debug production issues",
      "Participate in code reviews"
    ],
    applyUrl: "https://example.com/apply/backend",
    salary: "70k - 100k BDT"
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "Creative Pulse",
    location: "Hybrid / Dhaka",
    type: "Contract",
    category: "Design",
    postedDate: "May 05, 2024",
    description: "Creative Pulse is seeking a talented UI/UX Designer to create stunning user experiences for our clients.",
    requirements: [
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio demonstrating UI/UX principles",
      "Understanding of responsive design",
      "Ability to create wireframes and prototypes"
    ],
    responsibilities: [
      "Create intuitive and visually appealing designs",
      "Conduct user research and testing",
      "Collaborate with product managers and developers",
      "Maintain and evolve design systems"
    ],
    applyUrl: "https://example.com/apply/designer",
    salary: "Negotiable"
  }
];
