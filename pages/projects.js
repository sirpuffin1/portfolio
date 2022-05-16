import { getAllProjects } from "../prisma/projects";
import Image from 'next/image';
import brailleApp from "../public/brailleApp.JPG"
import Card from "../components/Card";

export const getStaticProps = async ({ req }) => {
    const projects = await getAllProjects();
    
    const updatedProjects = projects.map((project) => ({
      ...project,
    }));
    return { props: { projects: updatedProjects } };
  };

const projects = ({projects}) => {
    
    return (
        <div className="bg-blue-200 h-screen">
            <h1 className="text-9xl font-bold text-white">Projects</h1>
            <div className="p-10 m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-20">
            {projects.map(project => (
                <Card key={project.title} description={project.description} title={project.title} imgUrl={project.imgUrl} tools={project.tools} gitHubLink={project.gitHubLink} liveSiteLink={project.liveSiteLink}/>
            ))}
            </div>
        </div>
    );
}



export default projects;