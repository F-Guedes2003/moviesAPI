import express from 'express';
import bodyParser from 'body-parser';
import Movie from './models/Movie.js';
import movies from './data/movies.js';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import MongoDatabaseService from './services/MongoDatabaseService.js';
import MovieService from './services/MovieService.js';

dotenv.config();
const app = express();
const PORT = 3000;
const mongoService = new MongoDatabaseService
const movieService = new MovieService(mongoService);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://fhelipped:${process.env.MONGO_KEY}@moviesapi.09ngu.mongodb.net/?retryWrites=true&w=majority&appName=moviesAPI`)
	.then(() => {
		console.log('Database connected');
		
		app.listen(PORT, () => { 
			console.log(`Server online and running on port ${PORT}`) 
		})
	})
	.catch(error => console.error('failed to run the server'));

app.get('/', (req, res) => {
	res.send('hello world');
})

app.route('/movies')
	.get((req, res) => {
		res.json(movies);
	})
	
	.post((req, res) => {
		const object = req.body;

		if(object.name && object.gender && object.year){
			movies.push(new Movie(object.name, object.gender, object.year));
			movieService.save(object);
			return res.status(201).json({message: "Movie Created!"});
		}

		if(!object.name) return res.status(400).json({errorMessage: "There should be a name field!"});

		if(!object.gender)  return res.status(400).json({errorMessage: "There should be a gender field!"});
	
		if(!object.year)  return res.status(400).json({errorMessage: "There should be an year field!"});
	})

app.route('/movies/:id')
	.get((req, res) => {
		const movie = movies.find(movie => movie.id == req.params.id);
		console.log(movie);

		if(movie){
			return res.status(200).json(movie);
		} 

		res.status(404).json({errorMessage: "movie not found"});
	})

	.put((req, res) => {
		const id = req.params.id;
		const object = req.body;

		if(!object.name && !object.gender && !object.year) return res.status(400).json({errorMessage: "All fields must be defined on PUT operation"});

		if(!object.name) return res.status(400).json({errorMessage: "Missing name"});

		if(!object.gender) return res.status(400).json({errorMessage: "Missing gender"});

		if(!object.year) return res.status(400).json({errorMessage: "Missing year"});

		const index = movies.findIndex(e => e.id == id);
		movies[index].name = object.name;
		movies[index].gender = object.gender;
		movies[index].year = object.year;

		return res.status(200).json({message: "Movie succesfully updated!"});
	})
