import express from 'express';
import bodyParser from 'body-parser';
import Movie from './models/Movie.js';
import movies from './data/movies.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

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
			return res.status(201).json({message: "Movie Created!"});
		}

		if(!object.name) return res.status(400).json({errorMessage: "There should be a name field!"});

		if(!object.gender)  return res.status(400).json({errorMessage: "There should be a gender field!"});
	
		if(!object.year)  return res.status(400).json({errorMessage: "There should be an year field!"});
	})

app.listen(PORT, () => {
	console.log(`Server online running on PORT: ${PORT}`);
})
