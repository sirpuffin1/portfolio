import { getAllProjects } from "../prisma/projects";
import Image from 'next/image';
import brailleApp from "../public/brailleApp.JPG"

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
            {projects.map(project => (
                <div key={project.title}>
                <div key={project._id}>{project.description}</div>
                <Image key={project.imgUrl} src={`/${project.imgUrl}`} alt={""} layout="responsive" width={50} height={50}/>
                </div>
            ))}
        </div>
    );
}



export default projects;