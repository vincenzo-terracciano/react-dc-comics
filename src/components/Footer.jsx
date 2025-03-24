import Info from "./Info"

export default function Footer({ info }) {
    return (
        <footer>
            <section className="utility">
                <div className="cont">
                    <div className="logo">
                        <img src="./dc-logo-bg.png" alt="" />
                    </div>
                    <Info info={info} />
                </div>
            </section>
            <section className="sign-up">
                <div className="cont">
                    <div className="btn">
                        <button type="button">SIGN UP NOW!</button>
                    </div>
                    <div className="social">
                        <h4>FOLLOW US</h4>
                        <ul>
                            <li>
                                <a href="">
                                    <img src="./footer-facebook.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="./footer-twitter.png" alt="" />
                                </a>
                            </li><li>
                                <a href="">
                                    <img src="./footer-youtube.png" alt="" />
                                </a>
                            </li><li>
                                <a href="">
                                    <img src="./footer-pinterest.png" alt="" />
                                </a>
                            </li><li>
                                <a href="">
                                    <img src="./footer-periscope.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}