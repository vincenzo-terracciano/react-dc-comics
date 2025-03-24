export default function Header() {
    const links = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

    return (
        <header>
            <div className="container">
                <img src="./dc-logo.png" alt="" />
                <ul>
                    {
                        links.map((link, index) => <li key={index}><a href="#">{link}</a></li>)
                    }
                </ul>
            </div>
        </header>
    )
}