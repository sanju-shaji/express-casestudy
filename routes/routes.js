const express=require('express');
const { title } = require('process');
const router=express.Router();

var data=[{name:'sanju',age:22,loc:"qln"},{name:'arr',age:22,loc:"tvm"},
    {name:'aju',age:22,loc:"knr"}];


    function userroutes(nav){   ///function is used in case of ejs only.  it is used so that common elements like nav can be passed.
        router.get('/data',(req,res)=>{
            res.render("emp",{
                title:"Employedata",data,nav
            })
        })
        

    

    router.get('/empform',(req,res)=>{
        res.render("empform",{
            nav,
            title:'EMPLOYEE FORM'
        })
        
    })
    return router
    }



module.exports=userroutes
