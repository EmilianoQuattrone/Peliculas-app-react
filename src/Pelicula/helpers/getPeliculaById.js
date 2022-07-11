
export const getPeliculaById = async (id, state) => {

    try {

        const url = `https://api.tvmaze.com/shows/${id}`;
        const peliculaId = await fetch(url);
        const data = await peliculaId.json();
        state(data);

    } catch (error) {

        console.log(error);
    }
}