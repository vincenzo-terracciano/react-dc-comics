export default function Card({ series, thumb }) {
    return (
        <div className="col-2">
            <div className="card">
                <img src={thumb} alt={series} />
                <h6>{series}</h6>
            </div>
        </div>
    )
}