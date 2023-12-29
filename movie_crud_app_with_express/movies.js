import { readFileSync, writeFileSync } from 'node:fs';



export function findMovie(title) {
    const movies = getMovies();
    const movie = movies.find((m) => m.title === title)

    if (movie) {
        return movie;
    } else {

    }
}


export function addMovie(title, releaseYear) {
    const movies = getMovies();
    movies.push({
        title,
        releaseYear
    })
    saveMovie(movies);
}


export function getMovies() {
    console.log('dataJSON');
    try {
        const dataBuffer = readFileSync('./movies.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
export function saveMovie(movies) {
    const dataJSON = JSON.stringify(movies)
    writeFileSync('movies.json', dataJSON)
}

export const deleteMovie = function (title) {
    const movies = getMovies();
    const moviesToKeep = movies.filter((movie) => movie.title !== title)
    saveMovie(moviesToKeep);
}

export const updateMovie = function (title, newTitle, newReleaseYear) {
    const movies = getMovies();
    const movieIndex = movies.findIndex((movie) => movie.title === title);

    if (movieIndex !== -1) {
        console.log(newTitle);
        console.log(newReleaseYear);
        movies[movieIndex] = {
            title: newTitle,
            releaseYear: newReleaseYear
        }
        console.log(movies);
        saveMovie(movies);

    } else {
        console.log('movie not found!')
    }
}

// const res=getMovies();
// console.log(res);