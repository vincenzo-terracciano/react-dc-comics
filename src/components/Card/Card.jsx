export default function Card({ title, thumb }) {
    return (
        <div className="col-2">
            <div className="card">
                <img src={thumb} alt={title} />
                <h6>{title}</h6>
            </div>
        </div>
    )
}