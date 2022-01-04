import { Link } from "react-router-dom"

const NavBar = ({title, links}) => {
  console.log(links)
  return (
    <>
      <nav className="navBar">
        <h1>{title}</h1>
        <ul>
          {links.map((link,i) => (
            <li key={i}>
              <Link className="navBar-link" to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar

