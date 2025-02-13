const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({
    path:".env"
})
const mongourl=process.env.mongoose_url
const database=()=>{
 mongoose.connect(mongourl)
console.log("MOngodb connected...")
}
module.exports=database