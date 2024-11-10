import Generator from "./Generator.js";

class Movie {
	constructor(name, gender, year) {
		this.id = Generator.movieId();
		this.name = name;
		this.gender = gender;
		this.year = year;
	}
}

export default Movie;
