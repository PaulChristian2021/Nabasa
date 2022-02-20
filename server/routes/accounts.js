const router = require("express").Router();
const Account = require("../models/account");

router.post("/", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  console.log(username, password);
  let account;

  try {
    account = await Account.findOne({ username: username });
    if (
      username &&
      password &&
      username === account.username &&
      password === account.password
    ) {
      res.status(200).send(account.books);
    } else {
      res.status(401).send({ message: "Invalid Credentials" });
    }
  } catch (err) {
    if (err.message == "Cannot read properties of null (reading 'username')") {
      res.status(401).send({ message: "Invalid Credentials" });
    } else {
      res
        .status(500)
        .json({ message: "Authentication Failed: [ " + err.message + " ]" });
    }
  }
});

router.post('/updateBooks', async (req,res) => {
    const books = req.body
    console.log(books)
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

module.exports = router;
