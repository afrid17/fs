
import * as mongoose from "mongoose";
let mongoDbPassword = "21765A0217"
let MongoDbUrl = "mongodb+srv://afridayan01:21765A0217@freshslice.zj0ibgt.mongodb.net/?retryWrites=true&w=majority"



const connectMongoDb = ()=>{
    mongoose.connect(MongoDbUrl).then(()=>{
        console.log("Hello wolrd")
    })
    .catch(()=>{
        console.log("Error")
    })
}
export default connectMongoDb