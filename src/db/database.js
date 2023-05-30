import mongoose from "mongoose";

const db = mongoose()

db.connect(MONGODB_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
