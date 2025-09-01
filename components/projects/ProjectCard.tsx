import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projectsData";
import { Project } from "@/data/projectsData";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 border p-6 rounded-xl shadow-lg">
      {/* Left - Carousel */}
      <div className="w-full md:w-1/2 cursor-pointer">
        <Carousel>
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-64 object-scale-down rounded-lg"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-2">
            <CarouselPrevious className="static relative" />
            <CarouselNext className="static relative" />
          </div>
        </Carousel>
      </div>

      {/* Right - Project Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1> */}
      <div className="grid gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
