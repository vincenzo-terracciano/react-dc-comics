export default function Card({ comic }) {
    return (
        <div className="col-2">
            <div className="card">
                <img src={comic.thumb} alt={comic.series} />
                <h6>{comic.series}</h6>
            </div>
        </div>
    )
}