const info = async (req,res,next)=>{
    const data = await req.body.name
    if(data != undefined){
        next()
    }
    else{
        res.status(500).json({
            error: "name isn't defined"
        })
    }
}
module.exports = {info}