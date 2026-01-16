import { Link } from "react-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="/src/assets/krishiv.jpg" alt="A headshot picture of Krishiv Panchal"/>
                <span>Krishiv Panchal</span>
            </div>

            <div className="nav-container">
                <button class="nav-element">Projects</button>
                <button class="nav-element">Work Experience</button>
                <button class="nav-element">About Me</button>
            </div>
        </nav>
    )
}