import Logo from "./Logo"
import Nav from "./Nav"

export default function Header({ links }) {

    return (
        <header>
            <div className="container">
                <Logo />
                <Nav links={links} />
            </div>
        </header>
    )
}