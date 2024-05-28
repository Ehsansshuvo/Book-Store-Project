import express from "express";
const router=express.Router();

import Books from '../models/bookModel.js';

//route for save a new book

router.post('/',async(req,res)=>{
    const newBook= new Books({
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
        details: req.body.details
    });
    await newBook.save();
    res.status(200).send({
        success:true,
        newBook: JSON.stringify(newBook)
    });
})
// route for get all books
router.get('/',async(req,res)=>{
    
    const allBook= await Books.find({});
     console.log(allBook);
      res.json(allBook);
})
// route for get one book
router.get('/:id',async(req,res)=>{
    const oneBook= await Books.findOne({_id:req.params.id});
    console.log("amra ekhon " + req.params.id);
     console.log(oneBook);
     res.json(oneBook);
})
//route for update a book

router.put('/:id',async(req,res)=>{
    const oneBook= await Books.findByIdAndUpdate(req.params.id,req.body);
    console.log(req.body);
    if(oneBook){
        return res.status(200).send({
            success:true,
            oneBook: JSON.stringify(oneBook)
        });
    }else{
        res.status(401).json({message:"Not Found"});
    }

})
//delete a book
router.delete('/:id',async(req,res)=>{
    const oneBook= await Books.findOneAndDelete({_id:req.params.id});
    if(oneBook){
        res.status(200).send({
            success:true,
            oneBook: JSON.stringify(oneBook)
        });
    }else{
        res.status(401).json({message:"Not Found"});
    }
})

export default router;