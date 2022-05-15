import { getAllProjects, getProject } from "../../prisma/projects";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const project = await getProject(req.query.id);
          return res.status(200).json(project);
        } else {
          const projects = await getAllProjects();
          return res.json(projects);
        }
      }

      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
