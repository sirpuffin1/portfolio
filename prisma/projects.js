import prisma from "./prisma";

export const getAllProjects = async () => {
    const projects = await prisma.projects.findMany({})
    return projects
}