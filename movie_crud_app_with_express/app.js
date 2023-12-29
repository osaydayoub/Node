import express from 'express';
import { addMovie, deleteMovie, findMovie, getMovies, updateMovie } from './movies.js'
const app = express();
app.use(express.json());

app.get('/movies', function (req, res) {
    const movies = getMovies();
    res.send(movies)
})

app.post('/movies', (req, res) => {

    const { title, releaseYear } = req.body;
    addMovie(title, releaseYear);
    res.send('movie added')
})

app.delete('/movies', (req, res) => {

    const title = req.query.title;
    deleteMovie(title);
    res.send('movie deleted')
})

app.get('/movies/findMovie', function (req, res) {
    const movie = findMovie(req.query.title);
    res.send(movie)
})

app.put('/movies/:title', function (req, res) {
    
    const { title, releaseYear } = req.body;
    const OldTitle=req.params.title;
    console.log(OldTitle);
    updateMovie(OldTitle,title,releaseYear);

    res.send('movie update!')
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})