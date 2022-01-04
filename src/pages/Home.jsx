import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import '../styles/app.css'

const projects = [
  {
    name: "Windows XP",
    description: "Ventana de inicio del sistema operativo Windows XP",
    url: "/xp",
    img: "https://i.imgur.com/XqQZQZL.png"
  }
]

const Home = () => {
  return (
    <>
      <NavBar title={'Clones'} links={[]}/>
      <p className="warning">Esta es una página en la que replico webs o interfaces que me gustan, lo hago solo con
      fines academicos.
      </p>
      <div className="projects">

      </div>
 
    </>
  )
}

export default Home