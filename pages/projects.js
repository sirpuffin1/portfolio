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
        <div>
        <div >
            <h1 className="inline text-7xl font-bold text-white border-b-8 border-b-blue-900">Projects</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            {projects.map(project => (
                <Card key={project.title} description={project.description} title={project.title} imgUrl={project.imgUrl} tools={project.tools} gitHubLink={project.gitHubLink} liveSiteLink={project.liveSiteLink}/>
            ))}
            </div>
        </div>
        </div>
    );
}



export default projects;