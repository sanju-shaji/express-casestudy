const express=require('express')
const app= new express()

const morgan=require('morgan')
app.use(morgan('dev'))

app.set('view engine','ejs')// view engin format seting 
app.set('views',__dirname+'/views')//view path setting

app.use(express.static(__dirname + '/public'));//static file path setting

const nav=[{
    link:'/basic/data',name:'Home'
},
{
    link:'/basic/empform',name:'ADD Employee'
}
]
const routes=require('./routes/routes')(nav);
app.use('/basic',routes)
    


app.listen(3000,()=>{
    console.log('listening port 3000.....')
})