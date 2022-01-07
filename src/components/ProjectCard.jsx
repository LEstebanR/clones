import { Link } from "react-router-dom"

const ProjectCard = ({project}) => {

  return (
    <div className="card">
      <Link to={project.url}>
      <img src={project.img} alt="Project logo"></img>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      </Link>
    </div>
  )
}

export default ProjectCard