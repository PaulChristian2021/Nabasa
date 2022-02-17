const router = require('express').Router()
const Account = require('../models/account')

router.get('/', async(req,res) => {
    const {username} = req.body;
    const {password} = req.body;
    let account;
    
    try{
        account = await Account.findOne({username: username});
        
    }catch(err){
        res.status(500).json({message: err.message})
    }
    if(password === account.password){
        res.status(200).send(account.books)
    }else{
        res.status(401).send({ message: "Invalid Credentials" })
    }
})
// router.get('/:id',getUser, async(req,res) => {
//     res.send(res.account);
// })

// async function getUser(req,res,next) {
//     let account;
//     try{
//         account = await User.findById(req.params.id);
//         if(account == null){
//             return res.status(400).json({message:'Cannot find user.'})
//         }
//     }catch(err){
//         return res.status(500).json({message: err.message})
//     }
//     res.account = account;
//     next();
// }

module.exports = router