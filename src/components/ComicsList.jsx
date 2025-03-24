import Card from "./Card/Card";
import comics from "../data/comics";

export default function ComicsList() {

    return (
        <section className="comics">
            <h2>CURRENT SERIES</h2>
            <div className="cont">
                <div className="row">
                    {
                        comics.map(comic => (<Card key={comic.id} thumb={comic.thumb} series={comic.series} />))
                    }

                </div>
            </div>
        </section>
    )
}