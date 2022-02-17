const router = require('express').Router()
const User = require('../models/user')

router.get('/', async(req,res) => {
    try{
        const user = await User.find();
        res.status(200).send(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
router.get('/:id',getUser, async(req,res) => {
    res.send(res.user);
})

async function getUser(req,res,next) {
    let user;
    try{
        user = await User.findById(req.params.id);
        if(user == null){
            return res.status(400).json({message:'Cannot find user.'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.user = user;
    next();
}

module.exports = router