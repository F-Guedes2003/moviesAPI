import mongoMovie from "../models/mongoModels/mongoMovie.js";

class MongoDatabaseService {
    async save(data) {
        const modelInstance = new mongoMovie({
            "name": data.name,
            "gender": data.gender,
            "year": data.year
        });
        
        modelInstance.save();
    }

    async find(id) {
        if(id) return mongoMovie.findById(id);
        
        return mongoMovie.find();
    }
}

export default MongoDatabaseService;