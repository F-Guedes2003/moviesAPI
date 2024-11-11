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

    async find({id, name, gender, year}) {
        if(id) return mongoMovie.find({id: "id"});

        if(name) return mongoMovie.find({"name": name});

        if(gender) return mongoMovie.find({"gender": gender});

        if(year) return mongoMovie.findOne({"year": year});
        
        return mongoMovie.find();
    }
}

export default MongoDatabaseService;