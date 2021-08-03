export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=4&api_key=iw6L0M3TlGa05aSG4AQujEOAIL1z5OyC`
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map(( img ) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}