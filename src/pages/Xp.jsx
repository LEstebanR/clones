import NavBar from "../components/NavBar"
import '../styles/xp.css'

const Xp = () => {
  return (
    <>
      <NavBar title={'Windows XP'} links={[{title:"Home", url:"/"}]}/>
      <section className="desktop"></section>
      <footer>
        <button className="start">
          <img className="start-logo"src="https://res.cloudinary.com/lesteban/image/upload/v1642023659/clones/xp/kisspng-windows-7-microsoft-windows-windows-vista-windows-png-download-icons-windows-5ab07d6e2df805.8198425815215158861883_iei2k6.png" alt="logo"/>
          <p className="start-text">Inicio</p>
        </button>
        <div className="shortcut">Atajos</div>
        <div className="space">Espacio</div>
        <p className="language">Esp</p>
        <div className="icons">Icons</div>
        <p className="time">time</p>
      </footer>

    </>
  )
}

export default Xp