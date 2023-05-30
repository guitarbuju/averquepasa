const User= require('../mongo/schemas')

const getAllUsers= async (req,res)=>{
    
    const allUsers= await User.find()
   res.json(allUsers)
}



const getOneIdUser =   async (req,res)=>{
    const id=req.params.id
     const foundUser= await User.findById(id)
    
   if(!req.params.id){res.json("fuck this shit")}
   else{res.json(foundUser)}
     
 }
 
const deleteUser=async (req,res)=>{
     const id=req.params.id
      const delUser= await User.findByIdAndDelete(id)
     
    if(!req.params.id){res.json("fuck this shit")}
    else{res.json(delUser)}
      
  }



module.exports={getAllUsers, getOneIdUser  ,getOneIdUser ,deleteUser}