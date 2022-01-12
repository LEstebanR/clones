import NavBar from "../components/NavBar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import '../styles/app.css'

const projects = [
  {
    name: "Windows XP",
    description: "Ventana de inicio del sistema operativo Windows XP",
    url: "/xp",
    img: "https://velneo.es/files/2015/09/XP-Logo.png"
  },

]

const Home = () => {
  return (
    <div className="home">
      <NavBar title={'Clones'} links={[]}/>
      <p className="warning">Esta es una página en la que replico webs o interfaces que me gustan, lo hago solo con
        fines académicos y solo vistas Desktop.
      </p>
      <div className="projects">
        {projects.map(project => (
          <ProjectCard project={project}/>
        ))}
      </div>
    </div>
  )
}

export default Home