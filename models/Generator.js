class Generator {
	static movieIdCounter = 1;

	static movieId() { return this.movieIdCounter++; }
}

export default Generator;
