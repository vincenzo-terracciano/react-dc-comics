import Card from "./Card/Card";
import comics from "../data/comics";

export default function ComicsList({ comics }) {

    return (
        <section className="comics">
            <h2>CURRENT SERIES</h2>
            <div className="cont">
                <div className="row">
                    {
                        comics.map(comic => (<Card key={comic.id} comic={comic} />))
                    }

                </div>
            </div>
        </section>
    )
}