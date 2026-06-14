export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  github?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Learning Material System",
    description:
      "A fully functional Learning Material Platform. Users can create courses and exam categories, add questions with answers, and manage user details, experience, education, and project entries.",
    images: [
      "custom-images/academy-new-courses.jpg",
      "custom-images/course-single-view.jpg",
      "custom-images/exams-view.jpg",
      "custom-images/lahiru-s-acadamy7.jpg",
      "custom-images/lahiru-s-acadamy8.jpg",
      "custom-images/lahiru-s-acadamy9.jpg",
      "custom-images/lahiru-s-acadamy10.jpg",
      "custom-images/lahiru-s-acadamy11.jpg",
    ],
    tech: ["Next.js", "Tailwind", "Redux Saga", "NestJS", "TypeORM", "PostgreSQL"],
    github: "https://github.com/yourusername/learning-material-system",
  },
  {
    id: 2,
    title: "FashionNestLK — Admin & Designer Portal",
    description:
      "Full-stack T-shirt design and order management platform featuring an admin panel for managing products, designers, and order workflows, and a designer portal for creating and uploading designs. Deployed on AWS S3 and EC2.",
    images: [
      "custom-images/optimized_design-1.jpg",
      "custom-images/optimized_admin-1.jpg",
      "custom-images/optimized_admin-2.jpg",
      "custom-images/fnlk-admin-2.jpg",
      "custom-images/fnlk-admin-4.jpg",
    ],
    tech: ["Next.js", "Tailwind", "Redux Saga", "ApexCharts", "NestJS", "Redis", "BullMQ", "AWS"],
    github: "https://github.com/yourusername/fashionnestlk",
  },
  {
    id: 3,
    title: "PosifyLK — Multi-Tenant POS System",
    description:
      "Multi-tenant point-of-sale system for business owners managing multiple shops — handling employees, resources, products, and customer orders from one platform with subscription-based PayHere payment integration.",
    images: [
      "custom-images/posify-all-shops.jpg",
      "custom-images/posify-my-shop.jpg",
      "custom-images/posify-subscription.jpg",
    ],
    tech: ["Next.js", "Tailwind", "NestJS", "PostgreSQL", "Prisma", "PayHere"],
    github: "https://github.com/yourusername/posifylk",
  },
  {
    id: 4,
    title: "Trending Movies & TV Shows",
    description:
      "Browse the latest trending movies and TV shows with Google login authentication. Features custom video uploading via AWS S3 with background queue processing using Redis and BullMQ.",
    images: [
      "/custom-images/movie-ratting-app-home.jpg",
      "/custom-images/movie-rating-single-view-black.jpg",
      "/custom-images/movie-rating-app-tv-shows.jpg",
      "/custom-images/movieRatingLogin.jpg",
      "/custom-images/movie-ratings-register.jpg",
      "/custom-images/movie-rating-app-video.jpg",
    ],
    tech: ["React", "Axios", "Redux Saga", "Tailwind", "NestJS", "Prisma", "PostgreSQL", "AWS S3", "BullMQ"],
    github: "https://github.com/yourusername/movies-tv-app",
  },
  {
    id: 5,
    title: "Online Compiler",
    description:
      "An in-browser compiler with real-time error highlighting for C, C++, Java, Python, and HTML — powered by Monaco Editor, the same editor that powers VS Code.",
    images: [
      "custom-images/onlineCompilerProject2.jpg",
      "custom-images/onlineCompiler1.jpg",
    ],
    tech: ["React", "Monaco Editor", "Bootstrap", "react-select"],
    github: "https://github.com/yourusername/online-compiler",
  },
  {
    id: 6,
    title: "Online Part-Time Job Portal",
    description:
      "Job portal for day jobs and part-time work with three roles: Admin, Employer, and Employee. Shows nearest available jobs to seekers and suggests the best applicant match for employers.",
    images: [
      "/custom-images/jobPortal1.jpg",
      "/custom-images/jobPortal2.jpg",
      "/custom-images/jobPortal3.jpg",
      "/custom-images/jobPortal4.jpg",
      "/custom-images/jobPortal5.jpg",
      "/custom-images/jobPortal6.jpg",
      "/custom-images/jobPortal7.jpg",
      "/custom-images/jobPortal8.jpg",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com/yourusername/job-portal",
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "Check real-time weather details for major cities around the world with a clean, minimal interface.",
    images: [
      "/custom-images/weatherApp1.jpg",
      "/custom-images/weatherApp2.jpg",
    ],
    tech: ["React", "Axios", "Bootstrap"],
    github: "https://github.com/yourusername/weather-app",
  },
];