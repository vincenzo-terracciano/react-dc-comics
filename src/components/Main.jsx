import ComicsList from "./ComicsList"

export default function Main() {
    return (
        <main>
            <section className="dark">
                <div className="cont">
                    <ComicsList />
                </div>
            </section>
            <section className="primary">

                <ul>
                    <li>
                        <a href="">
                            <img src="./buy-comics-digital-comics.png" alt="" />
                            <span>DIGITAL COMICS</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./buy-comics-merchandise.png" alt="" />
                            <span>DC MERCHANDISE</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./buy-comics-subscriptions.png" alt="" />
                            <span>SUBSCRIPTION</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./buy-comics-shop-locator.png" className="locator" alt="" />
                            <span>COMIC SHOP LOCATOR</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./buy-dc-power-visa.svg" alt="" />
                            <span>DC POWER VISA</span>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}