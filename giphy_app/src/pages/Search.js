import {
    Grid,
    SearchBar,
    SearchContext,
    SearchContextManager,
  } from "@giphy/react-components";
import "isomorphic-fetch";
import { useContext } from "react";

export default function Home({ gifs }) {
    return (
        <SearchContextManager apiKey="iFpWygWnIjBCkBYQlYSeC9XpN1bFDlgV">
            <Components />
        </SearchContextManager>
    )
}

const Components = () => {
    const { fetchGifs, term, channelSearch, activeChannel} = useContext(
        SearchContext
    );
    return (
        <div>
            <SearchBar className={className} />
            <Grid
                key={`${channelSearch} ${term} ${activeChannel?.user.username}`}
                columns={600 < 400 ? 2 : 3}
                width={600}
                fetchGifs={fetchGifs}
            />
        </div>
    )
}