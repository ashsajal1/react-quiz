import { Link } from "react-router-dom";
import { IoLogoGithub, IoStarOutline, IoSparklesOutline } from 'react-icons/io5'

import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <h1 className="headline">React Quiz App</h1>
            {/* <p className="credit">Developed by <a target="_blink" href='https://github.com/ashsajal1/react-quiz'>Ashfiquzzaman Sajal</a></p> */}
            <div className="menu">
                <div><Link to={'multiple'}><IoSparklesOutline /> Multiple</Link></div>
                <div><Link to={'/'}><IoStarOutline /> Single</Link></div>
                <div><a href="https://github.com/ashsajal1/react-quiz"><IoLogoGithub /> Repo</a></div>
            </div>
        </nav>
    )
}
