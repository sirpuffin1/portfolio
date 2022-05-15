import prisma from "./prisma";

export const getAllProjects = async () => {
    const projects = await prisma.projects.findMany({})
    return projects
}

export const getProject = async id => {
    const project = await prisma.projects.findUnique({
        where: { id }
    })
    return project 
}