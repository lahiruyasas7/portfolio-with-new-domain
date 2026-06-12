export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Learning Material System",
    description:
      "A fully functional Learning Material Platform. user can create courses and exam categories, add questions with answers, user details, experience, education, project details. used technologies are nextjs, tailwind, redux saga for frontend and nest js, typeorm and postgresql for backend.",
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
  },
  {
    id: 7,
    title: "FashionNestLK-Admin dashboard and designer portal",
    description:
      "Developed a full-stack T-shirt design and order management platform for a clothing company, featuring an admin panel for managing products, designers, and order workflows, and a designer portal for creating and uploading T-shirt designs. Built using Next.js, Tailwind CSS, Redux-Saga, and ApexCharts on the frontend, with NestJS, Redis, and BullMQ powering backend operations, and deployed on AWS S3 and EC2 for scalable storage and hosting.",
    images: [
      "custom-images/optimized_design-1.jpg",
      "custom-images/optimized_admin-1.jpg",
      "custom-images/optimized_admin-2.jpg",
      "custom-images/fnlk-admin-2.jpg",
      "custom-images/fnlk-admin-4.jpg",
    ],
  },
  {
    id: 6,
    title: "PosifyLK - Multi Tenant POS System",
    description:
      "PosifyLK is a multi-tenant point-of-sale system built for business owners managing multiple shops, enabling them to handle employees, resources, shops, products, and customer orders from a single platform. The system supports subscription-based access with seamless PayHere integration for payments, while providing a secure and scalable backend powered by NestJS, PostgreSQL, and Prisma. A modern, responsive admin dashboard built with Next.js ensures a smooth user experience for managing day-to-day operations efficiently.",
    images: [
      "custom-images/posify-all-shops.jpg",
      "custom-images/posify-my-shop.jpg",
      "custom-images/posify-subscription.jpg",
    ],
  },
  {
    id: 3,
    title: "Latest Trending Movies & Tv Shows",
    description:
      "A website view latest trending movies, Tv Shows and check their details with authentication/ google login. Custom Video uploading with aws s3 bucket with queueing using redis and bullmq. used technologies are react js, axios, redux saga, tailwind, Nest.js, Prisma, postgresql.",
    images: [
      "/custom-images/movie-ratting-app-home.jpg",
      "/custom-images/movie-rating-single-view-black.jpg",
      "/custom-images/movie-rating-app-tv-shows.jpg",
      "/custom-images/movieRatingLogin.jpg",
      "/custom-images/movie-ratings-register.jpg",
      "/custom-images/movie-rating-app-video.jpg",
    ],
  },
  {
    id: 2,
    title: "Online Compiler",
    description:
      "An online compiler with error showing for c, c++, java, python, html. use technologies are react js, monaco editor, bootstrap, react-select",
    images: [
      "custom-images/onlineCompilerProject2.jpg",
      "custom-images/onlineCompiler1.jpg",
    ],
  },

  {
    id: 4,
    title: "Online Part time job portal ",
    description:
      "This job portal for mainly for day jobs and part time jobs. there are 3 roles accounts. Admin, Employer, Employee. Employee post, update, delete job posts. system shows the nearest job for job seekers. also system suggest best job applier for employee. use technologies are Html, css, javascript, bootstrap, php, mysql.",
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
  },
  {
    id: 3,
    title: "Weather App ",
    description:
      "User can check weather details of main cities of the world. used technologies are react js, axios, bootstrap",
    images: [
      "/custom-images/weatherApp1.jpg",
      "/custom-images/weatherApp2.jpg",
    ],
  },
];
