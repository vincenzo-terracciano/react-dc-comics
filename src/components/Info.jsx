import info from '../data/info'

export default function Info({ info }) {
    return (
        <div className="link">
            {
                info.map((text, index) => (
                    <div key={index}>
                        <h4>{text.title}</h4>
                        <ul>
                            {text.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}