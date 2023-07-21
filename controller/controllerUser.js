const user = require("../model/customSchema")
const custom = async (req,res)=>{
    const data = req.body
    const customData = await user.create(data)
    .then(()=>{
        res.status(200).json({
            data: data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error : err
        })
    })
}
module.exports = {custom}