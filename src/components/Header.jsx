export default function Header({ links }) {

    return (
        <header>
            <div className="container">
                <img src="./dc-logo.png" alt="" />
                <ul>
                    {
                        links.map((link, index) => (<li key={index}><a href="#">{link}</a></li>))
                    }
                </ul>
            </div>
        </header>
    )
}