
const listadoPeliculas = async (state) => {

    try {

        const url = `http://api.tvmaze.com/search/shows?q=star%20wars`;
        const peticion = await fetch(url);
        const data = await peticion.json();
        state(data);

    } catch (error) {

        console.log(error);
    }
}

export {

    listadoPeliculas
}
