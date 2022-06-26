const express = require('express');
const router =express.Router();

const resTest1 = require("../responses/prueba_1.json")

router.get('/cerca/:latitud&:longitud&:radio',async function (req,res,next){
    var lat = req.params.latitud;
    var lon = req.params.longitud;
    var rad = req.params.radio;

    parseInt(rad);
    parseInt(lat);
    
    var total =1;

    console.log(total);

    //parseInt(total);
    if (latitud <= 14.5565 ){
        res.send({
            //message:"read all",
            
            resTest1,
            
            
            
        })
    }
    else{
        res.send({
            //message:"read all",
            lat,
            lon,
            rad,
            total,
            
            
            
        })
    }
    

});

module.exports = router;