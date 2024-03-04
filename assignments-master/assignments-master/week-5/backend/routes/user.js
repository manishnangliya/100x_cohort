const { Router } = require("express");
const { Cards } = require("../db");
const router = Router();

router.get('/getAllCards',async (req,res)=>{
    //implementing logic to get all cards
    const allCards = await Cards.find(); 
    res.json({
        allCards : allCards
    })
})

router.post('/addNewCard',async(req,res)=>{
    const fullName = req.body.fullName;
    const place = req.body.place;
    const description = req.body.description;
    const interests = req.body.interests;
    const socialMedia = req.body.socialMedia;
    const isAdmin = false;
    const newCard = new Cards({fullName,place,description,interests,socialMedia,isAdmin});
    const ans = await newCard.save();
    res.status(201).json({
        message: "New Card Created",
    })
})
router.delete('/deleteCard',async(req,res)=>{
    const id = req.headers.id;
    console.log(id);
    // Cards.deleteOne(Cards.findOne({id:id}));
    const ans = await Cards.deleteOne({_id:id});
    console.log(ans);
    res.status(201).json({
        message:"Card Successfully Deleted"
    })

})

module.exports = router