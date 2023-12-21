import connectMongoDb from "@/libs/mongoDB"


export default async function GET(){
    try{
        await connectMongoDb()
    }
    catch(e){
        console.log(e)
    }
}