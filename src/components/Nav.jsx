export default function Nav({ links }) {
    return (
        <ul>
            {
                links.map((link, index) => (<li key={index}><a href="#">{link}</a></li>))
            }
        </ul>
    )
}