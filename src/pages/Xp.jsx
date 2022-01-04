import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import '../styles/xp.css'

const Xp = () => {
  return (
    <>
      <NavBar title={'Windows XP'} links={[{title:"Home", url:"/"}]}/>
    </>
  )
}

export default Xp