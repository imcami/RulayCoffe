import mongoose from 'mongoose'

const connectionMongoose = async () => {
    await mongoose.connect(process.env.MONGODBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .catch((err) => console.log(err));
}
import mongoose from "mongoose";
import connectionMongoose from './mongoose';

export class connectionMongoDB {


    constructor(url, collection, schema) {
        this.url = url
        this.collection = collection
        this.schema = new mongoose.Schema(schema)
        this.model = mongoose.model(this.collection, this.schema)
    }

    async setConnection() {
        try {
            await mongoose.connect(this.url)
        } catch (error) {
            return error
        }
    }

    async addElements(elements) { //Agrego 1 o varios elementos
        this.setConnection()
        try {
            return await this.model.insertMany(elements)
        } catch (error) {
            return error
        }
    }

    async getElements() {
        this.setConnection()
        try {
            return await this.model.find()
        } catch (error) {
            return error
        }
    }

    async getElementById(id) { //Agrego 1 o varios elementos
        this.setConnection()
        try {
            return await this.model.findById(id)
        } catch (error) {
            return error
        }
    }

    async updateElement(id, ...info) {
        this.setConnection()
        try {
            return await this.model.findByIdAndUpdate(id, ...info)
        } catch (error) {
            return error
        }
    }

    async deleteElement(id) {
        this.setConnection()
        try {
            return await this.model.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    }

}

export default connectionMongoose