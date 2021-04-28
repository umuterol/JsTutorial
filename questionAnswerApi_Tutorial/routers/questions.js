const express=require("express");

const router=express.Router();

const {getAllQuestions} = require("../controllers/questions");


router.get("/",getAllQuestions);



// router.get("/" , (req , res) => {

//     res.status(404).json({
//         success:true
//     });
// });


// router.get("/delete" , (req , res) => {

//     res.send("questions delete page");
// });



module.exports = router;