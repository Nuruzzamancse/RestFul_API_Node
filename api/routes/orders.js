const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Oreder was fetched'
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Oreder was created successfully'
    })
})

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Oreder Details',
        orderId: req.params.orderId
    })
})

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Oreder Deleted',
        orderId: req.params.orderId
    })
})


module.exports = router;