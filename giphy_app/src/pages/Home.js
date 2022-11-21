import { 
    Grid,
    SearchBar
 } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import "isomorphic-fetch";

const giphyFetch = new GiphyFetch("iFpWygWnIjBCkBYQlYSeC9XpN1bFDlgV")

const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 25 });
export const getServerSideProps = async () => {
    const { data } = await fetchGifs(0);
    return {
        props: {
            gifs: data
        }
    };
};

export default function homePage({ gifs }) {
    return gifs ? (
        <Grid initialGifs={gifs} width={600} columns={3} fetchGifs={fetchGifs} />
    ) : null;
}