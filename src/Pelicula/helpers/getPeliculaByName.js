
export const getPeliculaByName = async (name = '', state) => {

    try {

        name = name.toLocaleLowerCase().trim();
        if (name.length === 0) return [];

        const url = `https://api.tvmaze.com/singlesearch/shows?q=${name}`;
        const peticion = await fetch(url);
        const data = await peticion.json();
        state(data);

    } catch (error) {

        console.log(error);
    }
}