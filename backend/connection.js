import mongoose from "mongoose";

const apiKey= "mongodb+srv://basitiqbal:12345@elite.kpmedmv.mongodb.net/?retryWrites=true&w=majority"

export const connection= mongoose.connect(apiKey, {useUnifiedTopology: true, useNewUrlParser: true});
