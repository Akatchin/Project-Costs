import { Link } from "react-router-dom"
import Container from "./container"
import styles from './navbar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
    return(
    <nav className={styles.navbar}>
        <Container>
            <Link to='/'>
                <img src={logo} alt="costs"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/projects'>Project</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/company'>Company</Link>
                </li>
            </ul>
        </Container>
    </nav>
    )
}

export default NavBar