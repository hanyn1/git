var express=require('express')
const exp=express()


exp.use(function(req, ress, next) {
    ress.header("Access-Control-Allow-Origin", "*");
    ress.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  exp.get('/yiziihchim',(req,ress)=>{
    ress.send('9h5h')
})

  exp.listen(4000,()=>{
    console.log('running')
})
  exp.get('/mail',(req,ress)=>{
    ress.send('abcd@gmail.com')
  })